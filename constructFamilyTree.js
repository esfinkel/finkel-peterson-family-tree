

function GetURLParameter(sParam) {
  try {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam) {
        return sParameterName[1];
      }
    }
  } catch(err) {
    return null;
  }
}

  
function init(fam=null, firsttime=true) {

  // instructions

  // if (GetURLParameter('info')=='true' || GetURLParameter('info')=='yes') {
  //     setTimeout(function() { alert(    // asynchronous?
  //         "INSTRUCTIONS:" + "\n" +
  //         "Click on a name or marriage link to see extra info." + "\n" + 
  //         "(Light blue people and red marriages have extra info.)" + "\n" +
  //         "For a married couple, click on one member's '-' sign to see only their side of the family." + "\n" + 
  //         "Drag and drop family members. Scroll and zoom normally."
  //     ); }, 1); // 1 ms
  // }

  // specify a family

  if (fam==null) fam = GetURLParameter('family');
  switch(fam) {
    case 'finkel': var familyInfo = PatykFinkels.concat(FinkelPetersons).concat(Finkels); document.getElementById("current-family-name").textContent='Finkels'; break;
    case 'patyk': var familyInfo = PatykFinkels.concat(Patyks); document.getElementById("current-family-name").textContent='Patyks'; break;
    case 'peterson': var familyInfo = FinkelPetersons.concat(Petersons); document.getElementById("current-family-name").textContent='Petersons'; break;
    default: var familyInfo = PatykFinkels.concat(FinkelPetersons).concat(Finkels).concat(Patyks).concat(Petersons); document.getElementById("current-family-name").textContent='All'; break;
  };

    // make diagram

  var $ = go.GraphObject.make;
  myDiagram = $(go.Diagram, "myDiagramDiv", {
    initialAutoScale: go.Diagram.Uniform,
    "undoManager.isEnabled": true,
    // when a node is selected, draw a big yellow circle behind it  // handle clicking/highlighting
    nodeSelectionAdornmentTemplate:
      $(go.Adornment, "Auto",
      { layerName: "Grid" },  // the predefined layer that is behind everything else
      $(go.Shape, "Circle", { fill: "yellow", stroke: null }),
      $(go.Placeholder)
      ),
      layout:  // use a custom layout, defined below
      $(GenogramLayout, { direction: 90, layerSpacing: 50, columnSpacing: 10, aggressiveOption: go.LayeredDigraphLayout.AggressiveMore,})// layeringOption: go.LayeredDigraphLayout.LayerOptimalLinkLength}) // last 2 don't seem to do anything
  });
    
    
  // displace user info
  
  function showMessage(h, m, url=[]) {
    document.getElementById("diagramEventsMsgHeader").innerText = h;
    document.getElementById("diagramEventsMsgMsg").innerText = m;
    
    if (url.length>1) {
      document.getElementById("diagramEventsLink").innerText = url[0];
      document.getElementById("diagramEventsLink").setAttribute('href', url[1]);
    } else {
      document.getElementById("diagramEventsLink").innerText = "";
      document.getElementById("diagramEventsLink").setAttribute('href', "#");  
    }
  }
    
  function theyAreMarried(s1, s2) {
    return (s1.hasOwnProperty('ux') && s1.ux==s2.key) || (s2.hasOwnProperty('ux') && s2.ux==s1.key);
  }
    


  myDiagram.addDiagramListener("ObjectSingleClicked",
    function(e) { 
      var part = e.subject.part;
  
      var head = "";
      var msg = "";
      var url = [];
  
      if (part instanceof go.Link) {
        const pair = familyInfo.filter(d => d.key==part.fromNode.key || d.key==part.toNode.key);
        var from = pair[0];
        var to = pair[1];
        if (theyAreMarried(from, to)) {
          name1 = from.n!="" ? from.n : "UNKNOWN"
          name2 = to.n!="" ? to.n : "UNKNOWN"
          if (part.data.hasOwnProperty("info")) {
            head = "Info for marriage between "+name1+" and "+name2;
            msg = part.data.info;
          } else {
            msg = "No additional info for marriage between "+name1+" and "+name2+".";
          }
        }
      } else { // if node
        if (part.data.hasOwnProperty("info")) {
          head = "Info for "+part.data.n;
          msg = part.data.info;
          if (part.data.key==-47) url = ["So much detail", "https://goo.gl/UZaHn5"]; // hardcoded methods for a few keys 
        } else {
          msg = "No additional info on this person.";
        }
      }
  
      showMessage(head, msg, url);  
    }
  ); 
  
  // allow message to disappear when item is deselected 
  myDiagram.addDiagramListener("BackgroundSingleClicked",
    function(e) {
      showMessage("", "");
  }); 
  myDiagram.addDiagramListener("BackgroundDoubleClicked",
    function(e) {
      showMessage("", "");
  }); 
  myDiagram.addDiagramListener("BackgroundContextClicked",
    function(e) {
      showMessage("", "");
  }); 
  
  
  




    
  // make a better isTreeLeaf. if is someone's spouse, is not a leaf
  // collapse everyone except the people above you and their descendents
  // collect:
  // if node is not start:
  // make node invisible
  // x = list of spouses
  // y = list of children
  // z = []
  // if node is not start: z gets parents
  // z = list of parents
  // 
  // for p in (x+y+z):
  // if p is visible and p is not start:
  // collapse(p)

  function findAllSpouses(p) {
    return familyInfo.filter(d => d.ux==p.key || d.key==p.ux);
  }

  // function findAllSpousesKey(p_key) {
  //   return findAllSpouses(getNode(p_key));
  // }

  function findAllChildren(p) {
    return familyInfo.filter(d => d.p1==p.key || d.p2==p.key);
  }

  // function aHasSpouseb(a, b) {
  //   if (a.hasOwnProperty('ux') && a.ux==b.key) return true;
  //   if (b.hasOwnProperty('ux') && b.ux==a.key) return true;
  //   return false;
  // }

  // function aHasParentb(a, b) {
  //   if (! a.hasOwnProperty('p1')) return false;
  //   return a.p1==b.key || a.p2==b.key;
  // }

  function collapseFrom(node, start) {
    if (node.data.isCollapsed) return;

    // if (node==start) {node.diagram.model.setDataProperty(node.data, "visible", false); node.diagram.model.setDataProperty(node.data, "isCollapsed", true);}

    node.diagram.model.setDataProperty(node.data, "sign", 'p');


    if (node !== start) {
        node.diagram.model.setDataProperty(node.data, "isCollapsed", true);
        node.diagram.model.setDataProperty(node.data, "visible", false);
    } else {
        // var opos = node.diagram.transformDocToView(node.getDocumentPoint(go.Spot.Center));
    }
    var thisNodeData = node.data;
    var x = findAllSpouses(thisNodeData);
    var y = findAllChildren(thisNodeData);
    var z = [];
    if (node !== start && thisNodeData.hasOwnProperty('p1')) {z.push(thisNodeData.p1); z.push(thisNodeData.p2);}

    var toCollapse = [];
    x.concat(y).forEach(p => toCollapse.push(p.key));
    z.forEach(p => toCollapse.push(p));
    toCollapse.forEach(p => {var pno = node.diagram.findNodeForKey(p); if (pno!==null && pno!==start) collapseFrom(pno, start);});  // if pno!==null && not start

    if (node==start) {
        node.diagram.layout.updateParts();
    }

  }

  function expandFrom(node, start) {
    if (node!==start && !node.data.isCollapsed) return;
    node.diagram.model.setDataProperty(node.data, "sign", 'm');
    if (node !== start) {
        node.diagram.model.setDataProperty(node.data, "isCollapsed", false);
        node.diagram.model.setDataProperty(node.data, "visible", true);
    }
    var thisNodeData = node.data;
    var x = findAllSpouses(thisNodeData);
    var y = findAllChildren(thisNodeData);
    var z = [];
    if (node !== start && thisNodeData.hasOwnProperty('p1')) {z.push(thisNodeData.p1); z.push(thisNodeData.p2);}

    var toExpand = [];
    x.concat(y).forEach(p => toExpand.push(p.key));
    z.forEach(p => toExpand.push(p));
    toExpand.forEach(p => {var pno = node.diagram.findNodeForKey(p); if (pno!==null && pno!==start) expandFrom(pno, start);});  // if pno!==null && not start

    // node.findNodesOutOf().each(expandFrom);
  }

  // function getP(key) {
  //   var persons = familyInfo.filter(d => d.key==key);
  //   if (persons.length==0) return null;
  //   return persons[0];
  // }


  var hasSpouse = [];
  familyInfo.forEach(m => {m.sign = 'm'; if (!hasSpouse.includes(m.key) && m.hasOwnProperty("ux")) {hasSpouse.push(m.key); hasSpouse.push(m.ux)}});
  function shouldHaveButton(node_key) {
    // if you have a spouse and children
    // if you have children, you have a spouse
    // so just check for a spouse
    return hasSpouse.includes(node_key);
  }



  function addTemplate(diagm, gend, node_shape) {
    diagm.nodeTemplateMap.add(gend,
    $(go.Node, "Vertical",
      { locationSpot: go.Spot.Center, locationObjectName: "ICON" },
      new go.Binding("visible"), 
      $(go.Panel,
        { name: "ICON" },
        $(go.Shape, node_shape,
          { width: 40, height: 40, strokeWidth: 3, fill: "#F0FFF0", portId: "" },
          new go.Binding("fill", "info", function (i) {return i.length>3 ? "lightblue" : "white"}),
        ),
      ),
      $(go.TextBlock,
        { textAlign: "center", maxSize: new go.Size(120, NaN), font: "14pt sans-serif" },
        new go.Binding("text", "n")),

      $("Button",  // a replacement for "TreeExpanderButton" that works for non-tree-structured graphs
        // assume initially not visible because there are no links coming out
        { visible: false },
        // bind the button visibility to whether it's not a leaf node
        new go.Binding("visible", "key", shouldHaveButton)
          .ofObject(),
        $(go.Shape,
          {
            name: "ButtonIcon",
            figure: "MinusLine",
            desiredSize: new go.Size(6, 6)
          },
          new go.Binding("figure", "sign",  // data.isCollapsed remembers "collapsed" or "expanded"
            function(s) { return s!='m' ? "PlusLine" : "MinusLine"; })),
        {
          click: function(e, obj) {
            e.diagram.startTransaction();
            var node = obj.part;
            if (node.data.sign=='p') {
              expandFrom(node, node);
            } else {
              collapseFrom(node, node);
            }
            e.diagram.commitTransaction("toggled visibility of dependencies");
          }
        })
    ),
    );
  }



  addTemplate(myDiagram, "M", "Square");

  addTemplate(myDiagram, "F", "Triangle");

  addTemplate(myDiagram, "X", "Diamond");

  addTemplate(myDiagram, "P", "Circle")





      // the representation of each label node -- nothing shows on a Marriage Link
    myDiagram.nodeTemplateMap.add("LinkLabel",
      $(go.Node, { selectable: false, width: 1, height: 1, fromEndSegmentLength: 20 }));
    myDiagram.linkTemplate =  // for parent-child relationships
      $(go.Link,
        {
          routing: go.Link.Orthogonal, curviness: 15,
          layerName: "Background", selectable: false,
          fromSpot: go.Spot.Bottom, toSpot: go.Spot.Top
        },
        $(go.Shape, { strokeWidth: 2 })
      );
              var marriageWithInfo = "red";
              var marriageWithoutInfo = "blue";
    myDiagram.linkTemplateMap.add("Marriage",  // for marriage relationships
      $(go.Link,
        {
          selectable: true
          ,routing: go.Link.AvoidsNodes
        },
              // two "main" strokes so that a transparent clickable one overlies a sleek visible one
          $(
            go.Shape, { isPanelMain: true, strokeWidth: 15, stroke: "transparent" },
          ),
          $(
              go.Shape, {isPanelMain: true, strokeWidth: 4, stroke: marriageWithoutInfo},
              new go.Binding("stroke", "info", function (i) { return i.length>3 ? marriageWithInfo : marriageWithoutInfo}),
          )
      ));

    setupDiagram(myDiagram, familyInfo);

    // myDiagram.minScale is by default equal to 0.0001

    myDiagram.minScale = 0.0005;
    myDiagram.maxScale = 3.5;
    // in ZoomSlider.js I should maybe change
    // zoomRangeInput.max 
  

    
    myDiagram.zoomslider = new ZoomSlider(myDiagram, {
        //   alignment: go.Spot.BottomRight, alignmentFocus: go.Spot.BottomRight,
          alignment: go.Spot.TopRight, alignmentFocus: go.Spot.TopRight, 
          size: 150, buttonSize: 30, orientation: 'horizontal'
        });
    


  }
  
  // create and initialize the Diagram.model given an array of node data representing people
  function setupDiagram(diagram, array) {
    diagram.model =
      go.GraphObject.make(go.GraphLinksModel,
        { // declare support for link label nodes
          linkLabelKeysProperty: "labelKeys",
          // this property determines which template is used
          nodeCategoryProperty: "s",
          // if a node data object is copied, copy its data.a Array
          copiesArrays: true,
          // create all of the nodes for people
          nodeDataArray: array
        });
    setupMarriages(diagram);
    setupParents(diagram);
    // var node = diagram.findNodeForKey(focusId);  // autoselect a node upon load
    // if (node !== null) {                                  
    //   diagram.select(node);
    // }
  }
  function findMarriage(diagram, a, b) {  // A and B are node keys
    var nodeA = diagram.findNodeForKey(a);
    var nodeB = diagram.findNodeForKey(b);
    if (nodeA !== null && nodeB !== null) {
      var it = nodeA.findLinksBetween(nodeB);  // in either direction
      while (it.next()) {
        var link = it.value;
        // Link.data.category === "Marriage" means it's a marriage relationship
        if (link.data !== null && link.data.category === "Marriage") return link;
      }
    }
    return null;
  }
  // now process the node data to determine marriages
  function setupMarriages(diagram) {

    var model = diagram.model;
    var nodeDataArray = model.nodeDataArray;

    for (var i = 0; i < nodeDataArray.length; i++) {
      var data = nodeDataArray[i];
      var key = data.key;
      var uxs = data.ux;
      if (uxs !== undefined) {
        if (typeof uxs === "number" || typeof uxs === "string") uxs = [uxs];
        for (var j = 0; j < uxs.length; j++) {
          var spouse = uxs[j];
          if (key === spouse) {
            // or warn no reflexive marriages
            continue;
          }
          var link = findMarriage(diagram, key, spouse);
          if (link === null) {
            // add a label node for the marriage link
            var mlab = { s: "LinkLabel" };
            model.addNodeData(mlab);
            // add the marriage link itself, also referring to the label node
            var info;
            mInfo = marriagesInfo.filter(d => (d.sA==key || d.sB==key) && (d.sA==spouse || d.sB==spouse))
            if (mInfo.length>0) {
              infor = mInfo[0].info
              var mdata = { from: key, to: spouse, labelKeys: [mlab.key], category: "Marriage", info: infor };
            } else {
              var mdata = { from: key, to: spouse, labelKeys: [mlab.key], category: "Marriage" };
            }

            model.addLinkData(mdata);
          } 
        }
      }
    }
  }
  // process parent-child relationships once all marriages are known
  function setupParents(diagram) {
    var model = diagram.model;
    var nodeDataArray = model.nodeDataArray;
    for (var i = 0; i < nodeDataArray.length; i++) {
      var data = nodeDataArray[i];
      var key = data.key;
      var p1 = data.p1;
      var p2 = data.p2;
      if (p1 == undefined && p2 == undefined) {
          p1 = data.m;
          p2 = data.f;
      }
      if (p1 !== undefined && p2 !== undefined) {
        var link = findMarriage(diagram, p1, p2);
        if (link === null) {
          // or warn no known mother or no known father or no known marriage between them
          if (window.console) window.console.log("unknown marriage: " + p1 + " & " + p2);
          continue;
        }
        var mdata = link.data;
        var mlabkey = mdata.labelKeys[0];
        var cdata = { from: mlabkey, to: key };
        myDiagram.model.addLinkData(cdata);
      }
    }
  }
  // A custom layout that shows the two families related to a person's parents
  function GenogramLayout() {
    go.LayeredDigraphLayout.call(this);
    this.initializeOption = go.LayeredDigraphLayout.InitDepthFirstIn;
    this.spouseSpacing = 30;  // minimum space between spouses
  }
  go.Diagram.inherit(GenogramLayout, go.LayeredDigraphLayout);
  GenogramLayout.prototype.makeNetwork = function(coll) {
    // generate LayoutEdges for each parent-child Link
    var net = this.createNetwork();
    if (coll instanceof go.Diagram) {
      this.add(net, coll.nodes, true);
      this.add(net, coll.links, true);
    } else if (coll instanceof go.Group) {
      this.add(net, coll.memberParts, false);
    } else if (coll.iterator) {
      this.add(net, coll.iterator, false);
    }
    return net;
  };
  // internal method for creating LayeredDigraphNetwork where husband/wife pairs are represented
  // by a single LayeredDigraphVertex corresponding to the label Node on the marriage Link
  GenogramLayout.prototype.add = function(net, coll, nonmemberonly) {
    var multiSpousePeople = new go.Set();
    // consider all Nodes in the given collection
    var it = coll.iterator;
    while (it.next()) {
      var node = it.value;
      if (!(node instanceof go.Node)) continue;
      if (!node.isLayoutPositioned || !node.isVisible()) continue;
      if (nonmemberonly && node.containingGroup !== null) continue;
      // if it's an unmarried Node, or if it's a Link Label Node, create a LayoutVertex for it
      if (node.isLinkLabel) {
        // get marriage Link
        var link = node.labeledLink;
        var spouseA = link.fromNode;
        var spouseB = link.toNode;
        // create vertex representing both husband and wife
        var vertex = net.addNode(node);
        // now define the vertex size to be big enough to hold both spouses
        vertex.width = spouseA.actualBounds.width + this.spouseSpacing + spouseB.actualBounds.width;
        vertex.height = Math.max(spouseA.actualBounds.height, spouseB.actualBounds.height);
        vertex.focus = new go.Point(spouseA.actualBounds.width + this.spouseSpacing / 2, vertex.height / 2);
      } else {
        // don't add a vertex for any married person!
        // instead, code above adds label node for marriage link
        // assume a marriage Link has a label Node
        var marriages = 0;
        node.linksConnected.each(function(l) { if (l.isLabeledLink) marriages++; });
        if (marriages === 0) {
          var vertex = net.addNode(node);
        } else if (marriages > 1) {
          multiSpousePeople.add(node);
        }
      }
    }
    // now do all Links
    it.reset();
    while (it.next()) {
      var link = it.value;
      if (!(link instanceof go.Link)) continue;
      if (!link.isLayoutPositioned || !link.isVisible()) continue;
      if (nonmemberonly && link.containingGroup !== null) continue;
      // if it's a parent-child link, add a LayoutEdge for it
      if (!link.isLabeledLink) {
        var parent = net.findVertex(link.fromNode);  // should be a label node
        var child = net.findVertex(link.toNode);
        if (child !== null) {  // an unmarried child
          net.linkVertexes(parent, child, link);
        } else {  // a married child
          link.toNode.linksConnected.each(function(l) {
            if (!l.isLabeledLink) return;  // if it has no label node, it's a parent-child link
            // found the Marriage Link, now get its label Node
            var mlab = l.labelNodes.first();
            // parent-child link should connect with the label node,
            // so the LayoutEdge should connect with the LayoutVertex representing the label node
            var mlabvert = net.findVertex(mlab);
            if (mlabvert !== null) {
              net.linkVertexes(parent, mlabvert, link);
            }
          });
        }
      }
    }
    while (multiSpousePeople.count > 0) {
      // find all collections of people that are indirectly married to each other
      var node = multiSpousePeople.first();
      var cohort = new go.Set();
      this.extendCohort(cohort, node);
      // then encourage them all to be the same generation by connecting them all with a common vertex
      var dummyvert = net.createVertex();
      net.addVertex(dummyvert);
      var marriages = new go.Set();
      cohort.each(function(n) {
        n.linksConnected.each(function(l) {
          marriages.add(l);
        })
      });
      marriages.each(function(link) {
        // find the vertex for the marriage link (i.e. for the label node)
        var mlab = link.labelNodes.first()
        var v = net.findVertex(mlab);
        if (v !== null) {
          net.linkVertexes(dummyvert, v, null);
        }
      });
      // done with these people, now see if there are any other multiple-married people
      multiSpousePeople.removeAll(cohort);
    }
  };
  // collect all of the people indirectly married with a person
  GenogramLayout.prototype.extendCohort = function(coll, node) {
    if (coll.has(node)) return;
    coll.add(node);
    var lay = this;
    node.linksConnected.each(function(l) {
      if (l.isLabeledLink) {  // if it's a marriage link, continue with both spouses
        lay.extendCohort(coll, l.fromNode);
        lay.extendCohort(coll, l.toNode);
      }
    });
  };


  GenogramLayout.prototype.assignLayers = function() {
      var starttime = performance.now();
    go.LayeredDigraphLayout.prototype.assignLayers.call(this);
    var horiz = this.direction == 0.0 || this.direction == 180.0;
    // for every vertex, record the maximum vertex width or height for the vertex's layer
    var maxsizes = [];
    this.network.vertexes.each(function(v) {
      var lay = v.layer;
      var max = maxsizes[lay];
      if (max === undefined) max = 0;
      var sz = (horiz ? v.width : v.height);
      if (sz > max) maxsizes[lay] = sz;
    });
    // now make sure every vertex has the maximum width or height according to which layer it is in,
    // and aligned on the left (if horizontal) or the top (if vertical)
    this.network.vertexes.each(function(v) {
      var lay = v.layer;
      var max = maxsizes[lay];
      if (horiz) {
        v.focus = new go.Point(0, v.height / 2);
        v.width = max;
      } else {
        v.focus = new go.Point(v.width / 2, 0);
        v.height = max;
      }
    });
    // from now on, the LayeredDigraphLayout will think that the Node is bigger than it really is
    // (other than the ones that are the widest or tallest in their respective layer).
  //   window.console.log('' + performance.now()-starttime + ' ms - assigned layers');
  };


  GenogramLayout.prototype.commitNodes = function() {
  // window.console.log('starting - commit nodes');
    go.LayeredDigraphLayout.prototype.commitNodes.call(this);
    // position regular nodes
  //   window.console.log('position regular nodes');
    this.network.vertexes.each(function(v) {
      if (v.node !== null && !v.node.isLinkLabel) {
        v.node.position = new go.Point(v.x, v.y);
      }
    });
    // position the spouses of each marriage vertex
  //   window.console.log('position the spouses of each marriage vertex');
    var layout = this;
    this.network.vertexes.each(function(v) {
      if (v.node === null) return;
      if (!v.node.isLinkLabel) return;
      var labnode = v.node;
      var lablink = labnode.labeledLink;
      // In case the spouses are not actually moved, we need to have the marriage link
      // position the label node, because LayoutVertex.commit() was called above on these vertexes.
      // Alternatively we could override LayoutVetex.commit to be a no-op for label node vertexes.
      lablink.invalidateRoute();
      var spouseA = lablink.fromNode;
      var spouseB = lablink.toNode;
      // prefer fathers on the left, mothers on the right
      if (spouseA.data.s === "F") {  // gender is female
        var temp = spouseA;
        spouseA = spouseB;
        spouseB = temp;
      }
      // see if the parents are on the desired sides, to avoid a link crossing
      var aParentsNode = layout.findParentsMarriageLabelNode(spouseA);
      var bParentsNode = layout.findParentsMarriageLabelNode(spouseB);
      if (aParentsNode !== null && bParentsNode !== null && aParentsNode.position.x > bParentsNode.position.x) {
        // swap the spouses
        var temp = spouseA;
        spouseA = spouseB;
        spouseB = temp;
      }
      spouseA.position = new go.Point(v.x, v.y);
      spouseB.position = new go.Point(v.x + spouseA.actualBounds.width + layout.spouseSpacing, v.y);
      if (spouseA.opacity === 0) {
        var pos = new go.Point(v.centerX - spouseA.actualBounds.width / 2, v.y);
        spouseA.position = pos;
        spouseB.position = pos;
      } else if (spouseB.opacity === 0) {
        var pos = new go.Point(v.centerX - spouseB.actualBounds.width / 2, v.y);
        spouseA.position = pos;
        spouseB.position = pos;
      }
    });
    // position only-child nodes to be under the marriage label node
    var starttime = performance.now(); 
    this.network.vertexes.each(function(v) {
      if (v.node === null || v.node.linksConnected.count > 1) return;
      var mnode = layout.findParentsMarriageLabelNode(v.node);
      if (mnode !== null && mnode.linksConnected.count === 1) {  // if only one child
        var mvert = layout.network.findVertex(mnode);
        var newbnds = v.node.actualBounds.copy();
        newbnds.x = mvert.centerX - v.node.actualBounds.width / 2;
        // see if there's any empty space at the horizontal mid-point in that layer
        var overlaps = layout.diagram.findObjectsIn(newbnds, function(x) { return x.part; }, function(p) { return p !== v.node; }, true);
        if (overlaps.count === 0) {
          v.node.move(newbnds.position);
        }
      }
    });
  //   window.console.log('' + performance.now()-starttime + ' ms - positioned only-child nodes to be under the marriage label node');
  // window.console.log('finished - commit nodes');
  };

  GenogramLayout.prototype.findParentsMarriageLabelNode = function(node) {
    var it = node.findNodesInto();
    while (it.next()) {
      var n = it.value;
      if (n.isLinkLabel) return n;
    }
    return null;
  };





  function replaceDiagram(family=null) {
    myDiagram.zoomslider.remove();
    myDiagram.div = null;
    myDiagram = null;
    init(family, firsttime=false);
  }
  // end GenogramLayout class

  function repositionSlider() {
    myDiagram.zoomslider.remove();
    myDiagram.zoomslider = new ZoomSlider(myDiagram, {
        //   alignment: go.Spot.BottomRight, alignmentFocus: go.Spot.BottomRight,
          alignment: go.Spot.TopRight, alignmentFocus: go.Spot.TopRight, 
          size: 150, buttonSize: 30, orientation: 'horizontal'
        });    
  }
