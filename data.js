marriagesInfo = [
    {sA: 38, sB: -33, info: "Samuel's first marriage. married 1935."},
    {sA: 38, sB: 39, info: "Samuel's second marriage"},
    {sA: 38, sB: 46, info: "Samuel's third marriage"},
    {sA: "47b", sB: "47ba", info: "Ethel's first marriage"},
    {sA: "47b", sB: "47bb", info: "Ethel's second marriage"},
    {sA: 6, sB: 7, info: "m. Aug 28 1994"},
    {sA: -5, sB: -6, info: "m 1845"},
    {sA: 36, sB: 47, info: "Max and Yetta moved to US before 1904; lived in Canada and Brooklyn at some point. separated at some point before 1940"},
    {sA: -6, sB: -7, info: "\"Louis and Sara married in Philadelphia 1910?\" -FF" },
    { sA: "-36bb", sB: "-36bbs", info: "Either Lillian was born in 1935, or they married then" },
    { sA: -29, sB: -30, info: "Came here in 1906.\n\"According to family lore, Esther and Joseph were married at 16 and left their homes and families to come to America, we think they boarded a ship in England but don't know how they got there. Other members of their family were reported to have gone to Chicago and South Africa.\" -Fran Finkel" },
    {sA: -1, sB: -28, info: "married on March 11 1936"},
    {sA: -34, sB: -35, info: "married and came to the US in 1906"},
    { sA: -51, sB: -54, info: "Their marriage caused some conflict in her family because he was protestant and she catholic.\n\nWent to a cottage in Indiana in the summers in the (19)50s or so" },
    { sA: -52, sB: -53, info: "Their marriage was arranged, - set up by Catherine's mother. They moved to the US at some point after marrying." },
    { sA: -49, sB: -50, info: "Married on January 25, 1740, in Billerica, MA. Both were 24 years old." },
    { sA: "-61", sB: "-61s", info: "Married in 1712 in Billerica, MA" },
    { sA: -45, sB: -46, info: "Married in 1795" },
    { sA: "-62", sB: "-63", info: "Married in 1669 in Billerica, MA. Had about 10 other children" },
    { sA: "-61sp1p1", sB: "-61sp1p2", info: "Married in 1649 in Woburb, MA. Phebe was only about 17. They had about 11 children (a few died as toddlers)" },
    { sA: "-61sp1p1p1", sB: "-61sp1p1p2", info: "Married probably around 1622" },
    { sA: "-61sp1p1p1p1", sB: "-61sp1p1p1p2", info: "Had several other children, starting around 1586; Jane and Sylvester married probably in 1590 (she was only 18); definitely sometime before 1621\nSupposedly had a daughter Temperance Baldwin who was born in Nassau NY (then called \"Bahamas\") and a son John who died in CT, USA" },
];
 
 



// key needs to be different number for each person
// n = name (must be in double quotes)
// s (sex/gender) is either "M" or "F"
// p1 is parent1 (should be that person's key)
// p2 is parent2
// ux is spouse's key
// n: name, s: gender, p1: parent1, p2: parent2, ux: spouse, info: information





// FINKEL-PETERSONS

var FinkelPetersons = [

    { key: 5, n: "Ellie", s: "F", p1: 6, p2: 7, info: "b. 1999 in Chicago. Studies in New York" },
    { key: 6, n: "Sue Peterson", s: "F", p1: 28, p2: 29, ux: 7, info: "Lives in Illinois, works at Northwestern Hospital" },
    { key: 7, n: "Edward Finkel", s: "M", p1: 22, p2: 23, ux: 6, info: "Born 1967, Philadelphia PA. Lives in Illinois" },
    { key: 8, n: "Maddie", s: "F", p1: 6, p2: 7, info: "Born 2002 in Chicago. Lives in Illinois" },
    { key: 9, n: "Jake", s: "M", p1: 6, p2: 7, info: "Born 2006 in Chicago. Lives in Illinois" },
    { key: "7a", n: "", s: "P", p1: 6, p2: 7, info: "Name: Luna. Species: Dog. Breed: Golden Doodle\nName: Midnight. Species: House Cat\nName: Tigris. Species: House Cat." },
];

// PATYK-FINKELS

var PatykFinkels = [

    { key: 1, n: "Leo Patyk-Finkel", s: "M", p1: 2, p2: 3, info: "Born 2007, Gainesville FL. Lives in Vermont" },
    { key: 2, n: "Lynn", s: "F", p1: 16, p2: 19, ux: 3, info: "Born 1968, Elm Grove WI. Lives in Vermont, works at Dartmouth" },
    { key: 3, n: "Stuart Finkel", s: "M", p1: 22, p2: 23,ux: 2, info: "Born 1970, Philadelphia PA. Lives in Vermont, works at Dartmouth" },
    { key: 4, n: "Max", s: "M", p1: 2, p2: 3, info: "Born 2000, Palo Alto CA. Studies in Colorado" },
    { key: "3a", n: "Chloe", s: "P", p1: 2, p2: 3, info: "Species: Dog. Breed: Golden Doodle" },

];

// PATYKS 


var Patyks = [

    // Anders

    { key: 10, n: "Addie", s: "F", p1: 11, p2: 12, info: "Lives in Wisconsin" },
    { key: 11, n: "Laura", s: "F", p1: 16, p2: 19, ux: 12, info: "Live in Wisconsin" },
    { key: 12, n: "Jay Anders", s: "M", ux: 11, info: "Lives in Wisconsin" },
    { key: 13, n: "Braden", s: "M", p1: 11, p2: 12, info: "Lives in  Wisconsin" },
    { key: 14, n: "Drew", s: "M", p1: 11, p2: 12, info: "Lives in Wisconsin" },

    // Lisa(Patyk)
    { key: 15, n: "Lisa", s: "F", p1: 16, p2: 19, info: "Lives in Wisconsin" },

    // Czarnecki Family

    {key: 16, n: "Gloria Czarnecki", s: "F", p1: 17, p2: 18, ux: 19 },
    {key: 54, n: "Diane", s: "F", p1: 17, p2: 18 },
    {key: 57, n: "Lois", s: "F", p1: 17, p2: 18 },
    {key: 58, n: "Susan", s: "F", p1: 17, p2: 18, ux: "58a" },
    {key: "58a", n: "Gary", s: "M", ux: 58 },
        {key: "58b", n: "Shannon", s: "F", p1: 58, p2: "58a" },
    {key: "58c", n: "Joe", s: "M", p1: 58, p2: "58a" },
    {key: 17, n: "Stella Smerlinsky", s: "F", ux: 18 },
    {key: 18, n: "Julian", s: "M", ux: 17 },

    // Patyk Family

    {key: 19, n: "Gary", s: "M", p1: 20, p2: 21, ux: 16 },
    {key: 59, n: "Gregory", s: "M", p1: 20, p2: 21, ux: "59a" },
        {key: "59a", n: "Donna LeDoux", s: "F", ux: 59 }, 
        {key: "59b", n: "Sean", s: "M", p1: 59, p2: "59a", ux: "59ba" },
        {key: "59ba", n: "Jessica", s: "F", ux: "59b" }, 
        {key: "59bb", n: "Abagail", s: "F", p1: "59b", p2: "59ba" },
    {key: 20, n: "Jean", s: "F", p1: 55, p2: 56, ux: 21 },
    {key: 21, n: "Gilbert", s: "M", ux: 20 },
    {key: 55, n: "Joseph Kapzhak", s: "M", ux: 56 },
    {key: 56, n: "Angelina Hauke", s: "F", ux: 55 },

];

// FINKELS

var Finkels = [

    // Finkel (Richman)
    {key: 22, n: "Frances \"Fran\"", s: "F", p1: -1, p2: -28, ux:23, info: "Lives in Pennsylvania. B Dec. 1940" },
    {key: 23, n: "Lawrence \"Larry\" Finkel", s: "M", p1: 38, p2: -33, ux: 22, info: "Born 1936" },



    // Hunn

    { key: 30, n: "Ellen", s: "F", p1: 38, p2: -33, ux: 31 },
    { key: 31, n: "Ken Hunn", s: "M", ux: 30},
    { key: 32, n: "Brian", s: "M", p1: 30, p2: 31, ux: 33 },
    { key: 33, n: "Nicole", s: "F", ux: 32 },
    { key: "32a", n: "Bailey", s: "M", p1: 32, p2: 33 },
    { key: "32b", n: "Jonathan", s: "M", p1: 32, p2: 33 },
    { key: "32c", n: "Ava", s: "F", p1: 32, p2: 33 },
    { key: 34, n: "Eric", s: "M", p1: 30, p2: 31, ux: 35 },
    { key: 35, n: "Penny", s: "F", ux: 34 },
    { key: "37a", n: "Ethan", s: "M", p1: 34, p2: 35 },
    { key: "37b", n: "Lexi", s: "F", p1: 34, p2: 35 },
    { key: 37, n: "Matthew", s: "M", p1: 30, p2: 31, ux: "37s" },
    { key: "37s", n: "Tia", s: "F", ux: 37 },


    // Finkel - TODO ancestry lookup

    { key: 38, n: "Samuel Finkel", s: "M", p1: 47, p2: 36 },
    { key: 39, n: "Cele Shulman", s: "F", ux: 38 },
    { key: 46, n: "Evelyn Kabatznick", s: "F", ux: 38 },
    { key: 47, n: "Max Finkel", s: "M", ux: 36, info: "born March 15, 1883 in \"in a town called Proskurov (since renamed Khmelnytskyi) _near_ the then larger town of Kamianets-Podilskyi,\" Russia (now in Ukraine) - Stuart Finkel.\nlisted as Mickel/Mikhel on the manifest of the Furnessia.\nProbably spoke Yiddish. Probably emigrated because of pogroms.\nWent to Glasgow, Scotland, then to Ellis Island in 1902. Lived in Brooklyn and Montreal, and probably philly.\nmade mattress springs for \"Goodman Bros\"" },



    { key: 36, n: "Yetta", s: "F", ux: 47, info: "Maiden name Horowitz. Probably spoke Yiddish. Probably from (\"shtetl near\") Vilna. Probably migrated because of pogroms.\nMoved to US  before 1904; lived in Brooklyn and Canada at some point." },
    { key: "47a", n: "Solomon?", s: "M", p1: 47, p2: 36 },
    { key: "47b", n: "Ethel", s: "F", p1: 47, p2: 36 },
    { key: "47ba", n: "Lou Brandow", s: "M", ux: "47b" },
    { key: "47bb", n: "David Trusell", s: "M", ux: "47b", info: "owned a resort in Loon Lake, New York" },
    { key: "47bc", n: "Jack", s: "M", p1: "47b", p2: "47bb" },

    // Brody

    { key: 40, n: "Martha", s: "F", p1: 38, p2: 39, ux: 41 }, 
    { key: 41, n: "Arthur Brody", s: "M", ux: 40 },
    { key: 42, n: "Carl", s: "M", p1: 40, p2: 41, ux: 43 },
    { key: 43, n: "Becky", s: "F", ux: 42 },
        { key: "42a", n: "Jill", s: "F", p1: 42, p2: 43 },
        { key: "42b", n: "Robin", s: "F", p1: 42, p2: 43 },
    { key: 44, n: "Alissa", s: "F", p1: 40, p2: 41, ux: "45a" },
    { key: 45, n: "Thomas", s: "M", p1: 44, p2: "45a" },
    { key: "45a", n: "", s: "M", ux: 44 },

    // Slotkin (sub)

    { key: 48, n: "Evelyn", s: "F", p1: -34, p2: -35, ux: 49 },
    { key: 49, n: "Jack Rosen", s: "M", ux: 48 },
        { key: "48a", n: "Stanley", s: "M", p1: 48, p2: 49 },
    { key: 50, n: "Sam", s: "M", p1: -34, p2: -35, ux: 51, info: "Samuel Slotkin. Possible: Born March 1917 in Philadelphia, still residing in Philadelphia; unemployed at age 28." },
    { key: 51, n: "Pauline", s: "F", ux: 50 }, 
        { key: "50a", n: "Barry", s: "M", p1: 50, p2: 51 },
    { key: 52, n: "Marcia", s: "F", p1: -34, p2: -35, ux: 53 },
    { key: 53, n: "Sam Skolnick", s: "M", ux: 52 },
    { key: "52a", n: "Jay", s: "M", p1: 52, p2: 53 },
    { key: "52b", n: "Harriet", s: "F", p1: 52, p2: 53 },



    // Richman family

    { key: -1, n: "Samuel Richman", s: "M", p1: -2, p2: -7, ux: -28, info: "Born April 1911 in Philadelphia. Originally Reichman; legally changed name in 1929.\nHe was an \"upholder\"." },
    { key: -2, n: "Louis Richman", s: "M", p1: -3, p2: -4, ux: -7,
        info: "Louis/Lewis; originally \"Abram Reichman.\"\n"
        // 1920 record (likely him because children names match up) - born c. 1886, Russia. Immigrated in 1904. Own home at 2413 Front Street, mortgaged. By 1920, had submitted naturalization papers, and was working as a seamster. In 1920, he was married to a Cecailia Rechman? Are all his children actually with her, or did she change her name to Sarah? She would have been ~22 on giving birth to the oldest child, Samuel. Louis lived with his wife, children, and brother-in-law Samuel Goodseit (about his age, worked as a shipyard bolter).
        + "Born sometime 1884-1890 (it varies) in Akkerman (Ackamann), Russia. \"Ruddy complexion\". Documents suggest immigration around 1900-1904. \"Came to America on a ship called \"Haverford\" from Bremen, Germany in 1906\" - Fran Finkel\nSpoke Yiddish; probably emigrated because of pogroms.\n" 
        + "Had changed name by 1910. First (perhaps only?) marriage at age 24; elsewhere it says 1912.\n"
        + "By 1920, owned (mortgaged) a home (worth $3000) at 2413 Front Street, Philly and was working as a seamster.\nWas married to a Cecailia Rechman - is this Sarah, or are all Sarah and Louis' children actually from a prior wife of his? Cecailia would have been born ~1890 in Russia, immigrated in 1903, and been ~22 on giving birth to Samuel, the oldest child.\nLouis lived with his wife, children, and brother-in-law Samuel Goodseit (about his age, worked as a shipyard bolter).\n"
        + "According to his wife, he was naturalized on 24 Sep 1929 in Philadelphia.\n"
        // Cecailia Rechman - born ~1890 in Russia; immigrated in 1903. First child ~1912. In 1920, was married to + living with Louis Rechman. Not a citizen.
        // 1930 record (definitely him because children names match up) - born c. 1888, Russia. Immigrated in 1900; naturalized citizen by 1930. Owned a home in Philly worth $3000, and a radio set. Married at 24 years old. Operator in the paper shades industry. Samuel is his oldest child
        + "In 1930, he was an \"operator\" in the paper shades industry. He also owned a radio set, which was apparently notable.\n"
        // Isadore also lived in Philly. Rented a home. Born ~1895 in Russia, immigrated 1910, married ~1914. Worked as a haulage truckman. Naturalized citizen by 1930.
        // Wife Ceclia Richman - born ~1896 in Russia; married ~1913, immigrated 1915. Naturalized citizen by 1930.
        // 1940 record (likely him because children names match up) - born c. 1884, Russia. Own home at 2413 Front Street (same place as in 1935), worth $1800. Worked 50 hours a week as a clerk at an auction house, income 240. Daughter Goldie and her husband Herman Ellis still live with Louis.
        + "In 1940, he worked 50 hours a week as a clerk at Eastern Auction house, income $240 (per what?). His daughter Goldie and her husband Herman Ellis still lived with Louis.\n"
        // 1942 record - born 1894 in Ackaman Russia, month and day unknown; worked at Eastern Auction House. "Ruddy complexion". 
        + "In 1942, he still worked that same job, and lived in the same house from 1920."
    },
    { key: -7, n: "Sara(h)", s: "F", p1: -8, p2: -9, ux: -2,
        info: "Sura Etel Richman, anglicized to Sarah Ethel.\n"
        + "Born sometime 1885-1891 - it varies. Her father's name is given as Samuel, her mother's as Hannah. "
        + "She \"probably spoke Yiddish; probably emigrated 1900-1908 because of pogroms\". "
        // 1930 record - born c. 1890, renting a home worth $3000. Immigrated 1905. Both of their first marriages were ~1912. Not a citizen as of 1930.
        + "Documents suggest she immigrated sometime 1902-1905. As Sura Goodseit, she boarded the SS Breslau in Bremen Germany, and arrived in NYC on Oct 5, 1902.\n"
        + "Married Louis ~1912. Elsewhere it says they married on May 20, 1910 in Philadelphia. She then lived with him and their children at the Front Street residence.\n"
        // 1940 record - born c. 1885. Naturalized sometime 1930-1940. 
        // 1940 naturalization. Born 17 Dec 1887 in Slutz, Russia. Sura Etel Richman, anglicized to Sarah Ethel. Sura Goodseit boarded the SS Breslau in Bremen Germany, and arrived in NYC on Oct 5, 1902. Married May 20, 1910 in Philly.
        // Nat - Filled out naturalization paperwork in 25 Mar 1940. Her witnisses were housewives Minnie Nathan and Johanna Feld, presumably friends of hers.
        + "She filled out her naturalization paperwork on 25 Mar 1940. Her witnisses were housewives Minnie Nathan and Johanna Feld, presumably friends of hers.\n"
        // Sam born April 1911; Goldie born Sep 1912; Jean born Jul 1915; Isadore born Jul 1917; Martin born Feb 1920. All born in Philly
        // Sarah Richman died 18 Jun 1953. Born in Russia ~1891. Mother's name is given as Hannah (unclear if given or maiden name). Father's name Samuel. Lived in the Richman residence on Front Street, so it's definitely her.
        // Died in Philly; it's implied that her husband was still alive. Her son Samuel delivered the death notice. Died of presumed \"hypertension/cardiovascular disease\". Buried in Har Nebo cemetary.
        + "She died probably 18 Jun 1953 in Philadelphia; it's implied that her husband was still alive. Her son Samuel delivered the death notice. She died of presumed \"hypertension/cardiovascular disease\" and was buried in Har Nebo cemetary."
        // NVM. Different Sarah Minnie Richman died 1959, buried in Har Nebo, born c. 1889.
        // NVM. someone namad Sarah Richman died 1954, buried near Philly (in Mt. Moriah cemetary, which somewhat unusually allowed Jews), was born c. 1876 - so probably different person
    },
    { key: -3, n: "Isadore Reichman", s: "M", ux: -4, info: "Ize (Rochman?)\n\"born in 1845 in Ochumunn, Russia. He married in 1865 and died in 1890 and was a jeweler\" - fran" },
    // { key: -4, n: "Dora (Sablinsky)", s: "M", p1: -5, p2: -6, ux: -3, info: "(Sabilinsky?)\nhad entered US by 1910 census; believed to have been \"the only individual from that generation on either side of the Finkel-Richman family\" to come to North America - Stuart Finkel" },
    { key: -4, n: "Dora (Sablinsky)", s: "M", p1: -5, p2: -6, ux: -3, info: "(Sabilinsky?)\nBorn 1853; immigrated to Philadelphia, USA in 1907, after her husband's death; rented a place with son Louis (an \"odd job expressman\" ie involved in cargo packing/delivery) and a few other children. They also lived with a Russian Jewish boarder, Benjamin Edelberg (worked in mineral water industry) (in 1910). Looks like everyone in their neighborhood was a Jew from Russia or thereabouts.\nDora had 10 children, 7 still living by 1910. Was literate. Believed to have been \"the only individual from that generation on either side of the Finkel-Richman family\" to come to North America - Stuart Finkel" },
    { key: -5, n: "Goldie Kriv", s: "F", ux: -6, info: "1830-1895; probably born Ochumunn, Russia" },
    { key: -6, n: "Mushie Sablinsky", s: "M", ux: -5, info: "born 1829 - Ochumann, Russia" },

    { key: -8, n: "Ethel", s: "F", ux: -9, info: "(Anna Gvintz)\n1859-1899" },
    { key: -9, n: "Shumel Goodseit", s: "M", ux: -8, info: "(Gutzeit)\n1855-1893\na teacher; might have lived in Odessa, Russia" },
    { key: -10, n: "Goldie", s: "F", p1: -2, p2: -7, ux: -14, info: "Born September 1912 in Philadelphia" },
    { key: -14, n: "Herman Ellisand", s: "M", ux: -10 },
        { key: "-10a", n: "Harvey", s: "M", p1: -10, p2: -14, ux: "-10as" },
        { key: "-10as", n: "Harriet", s: "F", ux: "-10a" },
        { key: "-10aa", n: "Miranda", s: "F", p1: "-10a", p2: "-10as" },
        { key: "-10ab", n: "Heather", s: "F", p1: "-10a", p2: "-10as" },
        { key: "-10b", n: "Irvin", s: "M", p1: -10, p2: -14 },
    { key: -11, n: "Jean", s: "F", p1: -2, p2: -7, ux: -17, info: "Jenny; born July 1915 in Philadelphia" },
        { key: -17, n: "Donald Schurr", s: "M", ux: -11 },
        { key: "-11a", n: "Arnold", s: "M", p1: -11, p2: -17 },
        { key: "-11b", n: "Steve", s: "M", p1: -11, p2: -17 },
    { key: -12, n: "Isadore", s: "M", p1: -2, p2: -7, ux: "-12c", info: "Born July 1917, or \"c. 1918\", in Philadelphia. In 1940, Isadore Jr. worked as a navy yard junior messenger." },
        // isadore jr worked as a navy yard junior messenger in 1940, age 22.
        { key: "-12c", n: "Sylvia", s: "F", ux: -12 },
        { key: "-12a", n: "Steven", s: "M", p1: -12, p2: "-12c" },
        { key: "-12b", n: "Devorah", s: "F", p1: -12, p2: "-12c", ux: "-12bs" },
            { key: "-12bs", n: "Paul", s: "M", ux: "-12b" },
            { key: "-12ba", n: "Amy", s: "F", p1: "-12b", p2: "-12bs" },
            { key: "-12bb", n: "Ari", s: "M", p1: "-12b", p2: "-12bs", ux: "-12bbs" },
            { key: "-12bbs", n: "Sara", s: "F", ux: "-12bb" },
            { key: "-12ba", n: "Sloan(e?)", s: "F", p1: "-12bb", p2: "-12bbs" },
        { key: -13, n: "Martin", s: "M", p1: -2, p2: -7, ux: "-13c", info: "Born February 1920 in Philadelphia." },
        { key: "-13c", n: "Mildren", s: "F", ux: -13 },
        { key: "-13a", n: "Andy", s: "M", p1: -13, p2: "-13c", ux: "-13as" },
            { key: "-13as", n: "Peggy", s: "F", ux: "-13a" },
        { key: "-13b", n: "Sharon", s: "F", p1: -13, p2: "-13c", info: "\"Cousin Sharon\"" },

    { key: -18, n: "Israel", s: "M", p1: -3, p2: -4, ux: "-18s", info: "had entered US by 1910 census" },
    { key: "-18s", n: "Anna", s: "F", ux: -18 },
    { key: -19, n: "Izzie", s: "M", p1: -3, p2: -4, ux: "-19s", info: "If I have the right person - Isadore was born ~1895 in Russia, immigrated 1910, married ~1914. By 1930 he rented a home in Philadelphia, was a naturalized citizen, and worked as a haulage truckman." },
    { key: "-19s", n: "Cele", s: "X", ux: -19 },
    { key: "-19a", n: "Goldie, Herb, Victor", s: "X", p1: -19, p2: "-19s", info: "Victor born c. 1916, Goldie born c. 1919, Herbert born c. 1924. All born in PA." },
    { key: -20, n: "Charles", s: "M", p1: -3, p2: -4, ux: "-20s", info: "Charles Richman, originally Yankel Reichman. Came on the Haverford with (brother) Louis. Had changed name by 1910." },
    { key: "-20s", n: "Sara", s: "F", ux: -20 },
    { key: -21, n: "Minsa", s: "F", p1: -3, p2: -4, ux: "-21s" },
    { key: "-21s", n: "Bruce Potack", s: "M", ux: -21 },
    { key: "-21a", n: "(about 6 children)", s: "X", p1: -19, p2: "-19s" },
    { key: -22, n: "Rose; Fruda", s: "F", p1: -3, p2: -4, info: "(Russia) [not sure what that means]" },
    { key: -23, n: "?", s: "X", p1: -3, p2: -4, info: "\"Family lore says there were two other sisters who married officers in the Russian army and went to China.\" -F.F." },

    { key: -24, n: "Reba", s: "F", p1: -8, p2: -9, ux: "-24s", info: "came to america after sara" },
    { key: "-24s", n: "Dave", s: "M", ux: -24 },
    { key: -25, n: "2 other boys", s: "X", p1: -8, p2: -9, info: "one of whom might have returned to Russia" },
    { key: -26, n: "Sam", s: "M", p1: -8, p2: -9, ux: "-26s" },
    { key: "-26s", n: "Beatrice", s: "F", ux: -26 },
    { key: "-26b", n: "Hank; Cele; possibly two others", s: "X", p1: -26, p2: "-26s" },

    { key: -27, n: "Charles", s: "M", p1: -8, p2: -9 },




    // Shur family

    { key: "?1a", n: "", s: "X", ux: "?1b" }, // anon
    { key: "?1b", n: "", s: "X", ux: "?1a" },	 // anon
    { key: -31, n: "Nathan", s: "M", p1: "?1a", p2: "?1b", ux: "-31s" },
    { key: "-31s", n: "", s: "F", ux: -31 }, // anon
        { key: "-31b", n: "Jake", s: "M", p1: -31, p2: "-31s" },
    { key: -32, n: "Harry", s: "M",  p1: "?1a", p2: "?1b" },
    { key: -29, n: "Joseph Shur", s: "M", p1: "?1a", p2: "?1b", ux: -30,
        info: "Joseph Mordechai Shur. b 10/25/1883 in Chveidan (Kvedarna) Lithuania (in the Pale). Probably spoke Yiddish; emigrated in 1906 because of pogroms.\nMarried in 1907.\n"
        + "In one place, the native language of him and his wife is listed as \"Hebrew\" (which could be Yiddish); later it's listed as \"Lettish\", the language of Latvia. Had 8th-grade-level education; was literate.\n"
        + "Naturalized in Chester County, maybe on March 24, 1917; elsewhere listed as 1919. "
        + "Described as tall and slender, with black hair and brown eyes. In 1918 (not marked as naturalized), lived with his wife at 217 East Market Street, West Chester.\n" 
        + "By 1920, owned a home worth $4000 and worked as a shoemaker (owned his own shop). He owned a radio, which was apparently notable.\n"
        + "In 1923, lived at 137 East Market Street.\n"
        + "In 1940, lived at same address; worked 15 hours a week as business owner in secondhand shoes, and had income from \"external sources\".\n"
        + "Died in Philadelphia on Dec 27 1966; residence was still in West Chester; had moved to 138 West Market Street. Death was reported by daughter Rose Olin, who didn't know his birth year or parents' names. Joseph died of heart failure related to diabetes. Buried in Mount Sharon cemetary, a Jewish cemetary - see https://www.findagrave.com/memorial/69089449/joseph-shur"
    },
    // nA Jewish Esther Shur (b. ~1884) came from Russia to Philadelphia (via Liverpool, England) on \"the Westernland\", arriving on 15 July 1906; but I don't think our Esther had changed her surname yet. And she was joining a husband \"Nathan\" so nvm.
    { key: -30, n: "Esther (Shibel)", s: "F", ux: -29, info: "1883-1975. Born in Lithuania (in the Pale). Probably spoke Yiddish; emigrated in 1906 because of pogroms. Did not attend school, but was literate. Married in 1907. Naturalized in 1919. Died June 15 1975; buried with husband." },
    { key: -28, n: "Pearl Shur", s: "F", p1: -29, p2: -30, ux: -1, info: "Born 1913-1914 in PA. Grew up at 137 East Market Street in Westchester PA. Her parents were listed as coming from Russia, then Lithuania. She graduated high school in 1930, then worked for a few years as a bookkeeper. Married by a rabbi to Sam Richman on 15 Mar 1936, still in Westchester PA; she worked as a clerk and he an upholder. Pearl appears to have died 9 Oct 1988 in Philadelphia.\nBonus: Photo at https://imgur.com/a/vjDT7yW" },
    { key: "-28a", n: "Harry", s: "M", p1: -29, p2: -30, ux: "-28as", info: "Born ~1911. At 19, worked as a clerk at \"Gas Co\". At 29, lived at home and worked as a census taker." },
    { key: "-28as", n: "Rose", s: "F", ux: "-28a" },
    { key: "-28aa", n: "Sharon & Stanley", s: "X", p1: "-28a", p2: "-28as" },
    { key: "-28b", n: "Rose", s: "F", p1: -29, p2: -30, ux: "-28bs", info: "Born ~1908. At 22, worked as a shoe saleswoman (possibly in her father's shop)." },
    { key: "-28bs", n: "Harry Olin", s: "M", ux: "-28b" },
    { key: "-28ba", n: "Marilyn", s: "F", p1: "-28b", p2: "-28bs", ux: "-28bas" },
        { key: "-28bas", n: "Richard", s: "M", ux: "-28ba" },
    { key: "-28bb", n: "Alan", s: "M", p1: "-28b", p2: "-28bs" },
        { key: "-28bbs", n: "Connie", s: "F", ux: "-28bb" },
    { key: "-28bc", n: "Gerry", s: "F", p1: "-28b", p2: "-28bs" },
        { key: "-28bcs", n: "Ken", s: "M", ux: "-28bc" },
        { key: "-28bca", n: "Adam", s: "M", p1: "-28bc", p2: "-28bcs" },
        { key: "-28bcb", n: "Jonathan", s: "M", p1: "-28bc", p2: "-28bcs" },
    { key: "-28c", n: "Fanny", s: "F", p1: -29, p2: -30, ux: "-28cs", info: "Born ~1916. At 24, lived at home and worked as a \"new worker\" (?) - had been unemployed for a year." },
    { key: "-28cs", n: "Ben Jones", s: "M", ux: "-28c" },
    { key: "-28cc", n: "Donald", s: "M", p1: "-28c", p2: "-28cs" },
    { key: "-28d", n: "Edith", s: "F", p1: -29, p2: -30, ux: "-28ds", info: "Born ~1923" },
    { key: "-28ds", n: "Victor Powell", s: "M", ux: "-28d" },
    { key: "-28da", n: "Nina", s: "F", p1: "-28d", p2: "-28ds" },
    { key: "-28db", n: "Eric", s: "M", p1: "-28d", p2: "-28ds" },




    // Slotkin family - TODO transcribe

    { key: "?2a", n: "", s: "X", ux: "?2b", info: "Zlotkin family immigrated from Vitebsk in 1906" },
    { key: "?2b", n: "", s: "X", ux: "?2a", info: "Zlotkin family immigrated from Vitebsk in 1906" },
    { key: -33, n: "Edythe (Slotkin)", s: "F", p1: -34, p2: -35, ux: 38, info: "Born March 7 1913 in Philadelphia. Before her death, she lived at 1225 Magee Ave, Philadelphia. Worked as an office clerk. Died at age 42 on Oct 4 1955 in Philadelphia, at Hahnemann University Hospital, from \"hernia; chronic glomerulosclerosis\". She was buried at Har Nebo cemetary. She was survived by her husband Samuel." },
    // David Slotkin. B. ~1881. Married ~1905. Immigrated 1909. Yiddish speaker. Literate; 8th-grade-level education. In 1910, worked as a \"fastner\" for houses; renting a place in Philadelphia. In 1940, owned a home at 425 Snyder Ave, Philadelphia; was a naturalized citizen; worked as a building plasterer. 
    // Died 16 May 1953. Lived at 425 Snyder Ave, Philadelphia.
    { key: -34, n: "David Slotkin", s: "M", p1: "?2a", p2: "?2b", ux: -35, info: "Originally Zlotkin; had changed by 1920. Probably spoke Yiddish and emigrated from Vitebsk because of pogroms. Married and came to the US in 1906." },
    // Lea Slotkin. B. ~1881. Married ~1905. Immigrated 1909. Yiddish speaker. Literate; 6th-grade-level education. In 1960, was a naturalized citizen; housewife; claimed to be 2 years younger than husband; 
    // Esther Slotkin. Born ~1906 in Russia; immigrated 1907.
    // Samuel Slotkin. Born ~1917 in PA; completed high school. Worked as a pawn shop clerk in 1940. 
    // Marcia Skolnick. Born ~1912 in PA; completed high school. In 1940, was a housewife; lived with her husband and son with her parents, in the parents' home. 
    // SIL Samuel Skolnick. Born ~1907 in Russia. Naturalized citizen. Completed 2 years of college. Worked full-time as a pharmacist at a drug store.
    // Grandson - Jay Morton Skolnick. Born ~1939 in PA. 
    { key: -35, n: "Leah Pearlstein", s: "F", ux: -34, info: "\"probably born in Vitebsk. Probably spoke Yiddish and emigrated from Vitebsk because of pogroms. married and came here in 1906\" - fran" },
    // Max Slotkin - Born April 15 1877 in Russia. Black hair, gray eyes. Married at age 25, ~1902. Immigrated in 1907. In 1918 he was working as a tailor. He was naturalized some time 1918-1930. In 1930 he owned a nice home on S. Duke Street in Lancaster, PA, and owned a clothing store. Their daughters Celia and Esther lived with them. Celia worked as a clerk in his clothing store; he may have had other employees. He appears to have died 3 Oct 1959 in Lancaster.
    { key: "-36a", n: "Max", s: "M", p1: "?2a", p2: "?2b", ux: "-36as", info: "Born April 15 1877 in Russia. Black hair, gray eyes. Married at age 25, ~1902. Immigrated in 1907. In 1918 he was working as a tailor. He was naturalized some time 1918-1930. In 1930 he owned a nice home on S. Duke Street in Lancaster, PA, and owned a clothing store. Their daughters Celia and Esther lived with them. Celia worked as a clerk in his clothing store; he may have had other employees. He appears to have died 3 Oct 1959 in Lancaster." },
    { key: "-36as", n: "Frieda", s: "F", ux: "-36a", info: "Born ~1879 in Russia. Immigrated in 1908 with Celia, and possibly other older children. Naturalized by 1930." },
    { key: "-36ab", n: "Herman, Sam, Sol, Celia, Ester", s: "X", p1: "-36a", p2: "-36as", info: "Celia: born ~1907 in Russia, Esther: born ~1911 in PA. Esther attended school, Celia did not." },
    { key: "-36b", n: "Cy", s: "M", p1: "?2a", p2: "?2b", ux: "-36bs" },
        { key: "-36bs", n: "", s: "F", ux: "-36b" }, // anon
    { key: "-36bb", n: "Lillian", s: "F", p1: "-36b", p2: "-36bs", ux: "-36bbs", info: "Either Lillian was born in 1935, or they married then" },
        { key: "-36bbs", n: "Dr. Rambock", s: "M", ux: "-36bb" },
        { key: "-36bbb", n: "Valerie", s: "F", p1: "-36bb", p2: "-36bbs" },
        { key: "-36bbc", n: "Stephanie", s: "F", p1: "-36bb", p2: "-36bbs" },
    { key: "-36bc", n: "Bennet", s: "M", p1: "-36b", p2: "-36bs" },




];



// PETERSONS

var Petersons = [


    // Manthey

    { key: 24, n: "Emma Manthey", s: "F", p1: 25, p2: 26, info: "Lives in Illinois" },
    { key: 25, n: "Catherine", s: "F", p1: 28, p2: 29, ux: 26, info: "Lives in Illinois" },
    { key: 26, n: "Jim Manthey", s: "M", ux: 25, info: "Lives in Illinois" },

    // Dave Jr. Peterson

    { key: 27, n: "Dave Jr.", s: "M", p1: 28, p2: 29 },

    // Peterson

    { key: 28,  n: "Rosalind", s: "F", p1: -51, p2: -54, ux: 29, info: "or \"sis\". born in Muncie, Indiana in Oct 1939. Lives in Illinois. " },


    { key: 29, n: "Dave Sr.", s: "M", p1: -37, p2: -38, ux: 28, info: "Lived in Illinois" },



    // Peterson/Walker family
    { key: -37, n: "Trellis Peterson", s: "M", p1: "-37p1", p2: "-37p2", ux: -38, info: "Trellis (or Trullis) David Peterson.\nWas from Westmineral, Kansas (b. Aug 6 1912). Moved to IL by age 18.\n\"Supervisor for Silver Cup Bread… Worked for Holsum Bread… Painted the insides of people's homes to support his family\" -R Peterson\nHad a stepbrother Larry in Houston, TX. Very even-tempered. Lived long enough to hold Elisabeth; died Jan 17 2000.\nAround 1940, worked for London Baking Company in Chicago." },
        { key: "-37p1", n: "Charles Peterson", s: "M", p1: "-37p1p1", p2: "-37p1p2", ux: "-37p2", info: "Born 10 Sep 1881 in St Paul, MN. Worked as a coal miner in Ross, Kansas (c. 1910); had a house mortgaged. Had an older child named Manda. In 1920, lived in Davenport Iowa and worked as a laborer for 'Arsenal'; had several boarders. After having a brain tumor for 2 years, died 6 Jan 1921 in Iowa." },
            { key: "-37p1p1", n: "Truls Peterson", s: "M", ux: "-37p1p2", info: "Truls or Truliss. Born 1849 in Sweden. May have been in MN in 1862 through the 70s. In 1870, had 34 acres of \"improved (farmable)\" land, and a relative Bettsie Peterson (sister? wife?) who was 10 years younger. Lived in Orleans, Nebraska in 1880, listed as a \"laborer\"." },
            { key: "-37p1p2", n: "", s: "F", ux: "-37p1p1", info: "Also born in Sweden. A Charles Peterson in MN had a mother named Cary, but she (and unnamed husband) were born in Denmark, not Sweden, so it's probably a different Charles?" }, // anon
        { key: "-37p2", n: "Sarah (Morgan)", s: "F", p1: "-37M-A", p2: "-37M-B", ux: "-37p1", info: "Sarah J. Morgan (went by Sadie). Born 20 May 1874 in IL (possibly in Streator/Streeter); by 1880, was in Pleasant view, Kansas. She attended school; her parents hadn't (but could read/write). In March 1892, about to turn 18 (although she told the judge she was already 18), she married a John Burch in Cherokee, Kansas. Around 1895, she married a Charles Griffin, a house painter from IL; they had a rented dwelling in Kansas and 2+ children (Mary Birch and Paul Griffin; Mary was presumably John Burch's daughter). They were still married in 1905, with additional children Lasy, Pearl, Earl (I think those are the names; it's hard to read). She married Charles Peterson around 1907 (possible Sep 1907 in Lamar, Missouri, if he went by 'Chas'). In 1915, she lived in Kansas with C.P. and several children. In 1920, they lived in Iowa (although spelled Peterson), and some of the Griffin children lived with her in addition to her children with CP. Her husband CP died in 1921, and she married a man named Patrick Mullen at some point thereafter. She died 13 Nov 1946 in Chicago, IL, and was buried in Worth, IL.\n\nOther info says she and Charles Peterson were buried in Kansas together, but the death dates are different than I've seen elsewhere, so it might be different people. This info lists them as living in Kansas until 1948 and dying shortly thereafter; the man is listed as being an engineer." },
            { key: "-37M-A", n: "Phoebe (Kyser)", s: "F", ux: "-37M-B", p1: "-37M-C", p2: "-37M-D", info: "10 June 1843, PA - 5 Dec 1915, Cherokee, KA\nDid not attend school. Possibly a Quaker. Apparently spoke Dutch. By 1910 (age 66), had had 8 children, 5 of whom were still living.\nIn 1910 she seems to claim here parents were both born in Germany; maybe a different Phebe?" },
            { key: "-37M-B", n: "William Morgan", s: "M", ux: "-37M-A", p1: "-37M-E", p2: "-37M-F", info: "18 Aug 1838, East Bethlehem, PA - 20 Feb 1918, Weir, Kansas\nDid not attend school. Married Phobe in June 1862 in Ancone, IL. First child Laura born in IL ~1863. Farmer in Missouri in 1870. Were in Iowa ~1877. Farmer in Cherokee, Kansas in 1880. Unemployed coal miner there in 1900; full homeowner." },
            { key: "-37M-C", n: "Orin Kyser", s: "M", ux: "-37M-D", info: "Orin/Orrin Peter Kyser\nC. 1800 (maybe 1797), NY - 13 Nov 1876, Walnut Grove, KS\nMarried Phebe Ann in 1825, probably in NY. Moved to PA by 1828, then to IL later in life, then eventually to Kansas. Fertile from ages 28-54. In Kansas, at age 88, worked as a farmer, apparently is from PA?" },
            { key: "-37M-D", n: "Phebe (nee Hildreth)", s: "F", ux: "-37M-C", info: "Phebe Ann Kyser\n1810 Salisbury NY - 1880 Kansas\nHer parents were from NH\nAfter her husband's death, she lived with her (also widowed) daughter SA Root in Kansas on a farm" },
            { key: "-37M-E", n: "Andrew Morgan Jr", s: "M", ux: "-37M-F", p1: "-37M-G", p2: "-37M-H", info: "1814 Maryland - 1851 Iowa\nMay have lived in PA in the 1840s \nSomeone pasted a link to an article about an Andrew Morgan dying in a tornada in 1859 near Iowa City - however, both Andrew Morgans that I list died before then." },
            { key: "-37M-F", n: "Mary (Cannor)", s: "F", ux: "-37M-E", info: "Born 1816 in PA. Married in 1845 in VA. Died before 1878, likely in PA\n" },
            { key: "-37M-G", n: "Andrew Morgan Sr", s: "M", ux: "-37M-H", p1: "-37M-K", p2: "-37M-L", info: "14 Aug 1774 Shepherdstown WV - 8 May 1849 Washington PA\nMarried Elizabeth in 1792 in WV or VA (he was 18, she was 17)\nMoved to VA around time of marriage\nMoved to Washington, PA around 1820; lived there until at least 1840In 1836, had (or acquired?) 20 acres of land in PA. \n\nOne of the Andrew's, or a relative, may have worked as a painter in Iowa City in 1856?" },
            { key: "-37M-H", n: "Elizabeth (Kinsell)", s: "F", ux: "-37M-G", p1: "-37M-I", p2: "-37M-J", info: "31 Dec 1775/1776 Berkeley, VA - 1854, Frederickstown, PA\nAttended a Methodist church in PA c. 1829" },
            { key: "-37M-I", n: "George Kinsell", s: "M", ux: "-37M-J", info: "B 1750, VA; in 1794, worked in Philadelphia, PA as a blacksmith" },
            { key: "-37M-J", n: "", s: "F", ux: "-37M-I" }, // anon
            { key: "-37M-K", n: "Captain William Morgan", s: "M", ux: "-37M-L", p1: "-37M-M", p2: "-37M-N", info: "Born 1723, NY\ndied 17 Oct 1788 in Berkeley county, Va (now WV, maybe Shepherdstown)\nFrom Daughters of the American Revolution: \"William Morgan served as a private in the Virginia troops [in American revolution]\" Served 1775-1781 apparently. After Priscilla died, he had a second wife, Drusilla Swearingen (b. 1737). \"Both Richard Morgan and his son Captain William Morgan were included in Edward Braddock's Expedition to Pittsburgh. William retired to Redstone Old Fort (now Brownsville, PA) near the end of his life\" - Deanna \"Dee\" Peterson" },
            { key: "-37M-L", n: "Priscilla (Wells?)", s: "F", ux: "-37M-L", info: "Born 1739 in Philadelphia, PA; Married in July 1754 in Old Swedes Church in philly; Died 1782 in Shepherdstown, VA" },
            { key: "-37M-M", n: "Richard Morgan", s: "M", ux: "-37M-N", p1: "-37M-O", p2: "-37M-P", info: "Born c. 1690, Frederick, Maryland\nMarried in 1711 in Maryland\nLived in Frederick County, VA in 1759, \nDied Nov 1763, Sheperdstown, Berkley, Virginia [sic]\n" },
            { key: "-37M-N", n: "Jane (Taylor)", s: "F", ux: "-37M-M", p1: "-37M-Q", p2: "-37M-R", info: "Born c. 1690, Frederick, Maryland\nMaried in 1711\nDied after 1744, Sheperdstown, Berkeley, WV\nBuried possibly in York, England" },
            { key: "-37M-O", n: "Jacob Morgan", s: "M", ux: "-37M-P", info: "Allegedly born 1670 WV, died 1742" },
            { key: "-37M-P", n: "", s: "F", ux: "-37M-O" }, // anon
            { key: "-37M-Q", n: "John Taylor", s: "M", ux: "-37M-R", info: "Born 1674, Maryland; Died Maryland" },
            { key: "-37M-R", n: "Blanche (Hendryx)", s: "F", ux: "-37M-Q", info: "Supposedly born Maryland, 1677. No sources were given; some random person inputted her on ancestry.com" },
    { key: -38, n: "Lillian Walker", s: "F", p1: -39, p2: -40, ux: -37 },
    { key: -39, n: "Elizabeth Anna Lambert", s: "F", ux: -40, info: "from Canada" },
    { key: -40, n: "Arthur Robert W.", s: "M", p1: -41, p2: -42, ux: -39, info: "born 31 Dec 1877 (1878?); from illinois" },
        { key: "-40x", n: "Addie", s: "F", p1: -41, p2: -42, info: "born 1866ish" },
        { key: "-40y", n: "Alice", s: "F", p1: -41, p2: -42, info: "born 1869ish" },
        { key: "-40z", n: "William", s: "M", p1: -41, p2: -42, info: "born 1877ish" },
    { key: -41, n: "Emma W. (Roberts)", s: "F", ux: -42 },
    { key: -42, n: "Henry Arthur W.", s: "M", p1: -43, p2: -44, ux: -41, info: "16 Apr 1837 to 11 July 1914\nlived for some time in Chicago;" },
    { key: "-42w", n: "George E", s: "M", p1: -43, p2: -44, info: "born ~1841" },
    { key: "-42x", n: "Lydia J", s: "F", p1: -43, p2: -44, info: "born ~1846" },
    { key: "-42y", n: "William H", s: "M", p1: -43, p2: -44, info: "born ~1832" },
    { key: "-42z", n: "Calvin B", s: "M", p1: -43, p2: -44, info: "born ~1830" },
    { key: -43, n: "Ephraim W W", s: "M", p1: -45, p2: -46, ux: -44, info: "25 Feb 1802 (Westmoreland, NH) - 13 Feb 1863 (Windham, VT). something is \"Oanmiston\"? can't read. Married Lydia in 1830." },
    { key: -44, n: "Lydia J (Harris)", s: "F", ux: -43, info: "b. 1810" },
    { key: -45, n: "Betsey (Veazay or Veazie)", s: "F", ux: -46, info: "1775-1825" },
    { key: -46, n: "Abiel Walker", s: "M", p1: -47, p2: -48, ux: -45, info: "B 26 Mar 1768, Andover, Mass\nD 25 July 1838, Westmoreland, NH. " },
    { key: -47, n: "Benjamin Walker III (the soldier)", s: "M", p1: -49, p2: -50, ux: -48, info: "B 6 Oct 1741 Billerica, MA.\nSupposedly married Hannah Buys in NY in 1755 (he was 15??)\nMarried Abial Abbott in 1763 in Andover, MA\nWent to war\nD 15 Aug 1775 Boston jail." },
        { key: "-47x", n: "William", s: "M", p1: -49, p2: -50, info: "b 22 Mar 1742." },
        { key: "-47y", n: "Hannah", s: "F", p1: -49, p2: -50, info: "b 26 Mar 1745" },
        { key: "-47z", n: "Susanna", s: "F", p1: -49, p2: -50, info: "21 Mar 1745 - 22 Dec 1821" },
        { key: "-47z2", n: "Zaccheus, Sampson, Eliakim", s: "X", p1: -49, p2: -50 },
    { key: -48, n: "Abial (Abbott)", s: "F", ux: -47, info: "1745 - 1795, both in MA. Married another man, Samuel Fitch, on 13 Apr 1778 in Chelmsford, MA" },
    { key: -49, n: "Hannah (Frost)", s: "F", ux: -50, info: "25 May 1715 - 12 Sep 1769, both in Billerica, MA. Parents unknown." },
    { key: -50, n: "Benjamin Walker Jr.", s: "M", p1: "-61", p2: "-61s", ux: -49, info: "23 Jan 1716 - Mar 1754, both in Billerica, MA." },
    { key: "-46x", n: "Benjamin Walker IV", s: "M", p1: -47, p2: -48, info: "Born 15 Nov 1763, Andover MA. Died 21 Mar 1793."},
    { key: "-61", n: "Benjamin Walker I", s: "M", p1: "-62", p2: "-63", ux: "-61s", info: "29 Oct 1686 - 2 Aug 1750, both in Billerica, MA.  Had a second wife, Eleanor Chandler, whom he married in 1716 (she was 26).\n\nA man named Benjamin Walker was involved in the French and Indian War (which lasted 1755-62), in the 3rd regiment, 9th company. However, this Benjamin Walker was already dead, but it could have been one of his descendents." },
        { key: "-61s", n: "Susanna (Baldwin)", s: "F", p1: "-61sp1", p2: "-61sp2", ux: "-61", info: "Born 31 Mar 1694, Woburn, MA\nMarried in 1712\nDied 1731 in Billerica, MA" },
        { key: "-61kids", n: "Several other children", s: "X", p1: "-61", p2: "-61s", info: "Susanna (1714-1715), Susanna (b 1719); Ezekiel; Daniel; Abigail; Sarah; Zaccheus; Katherine; David" },
        { key: "-61sp1", n: "Daniel Baldwin", s: "M", p1: "-61sp1p1", p2: "-61sp1p2", ux: "-61sp2", info: "15 Mar 1659 - 24 Jan 1719, both in Woburn MA. Married Hannah in 1685. They had like 12 other children." },
            { key: "-61sp1p1", n: "Henry Baldwin", s: "M", p1: "-61sp1p1p1", p2: "-61sp1p1p2", ux: "-61sp1p2", info: "Born 8 Feb 1623 in Aylesbury, Buckinghamshire, England\nBaptised a year later\nWas in Woburb in 1649, so he had already immigrated\nDied 14 Feb 1698 in Woburn, Middlesex, MA, United States" },
                { key: "-61sp1p1p1", n: "Richard Baldwin", s: "M", p1: "-61sp1p1p1p1", p2: "-61sp1p1p1p2", ux: "-61sp1p1p2", info: "B 1597, Buckinghamshire, England\nDied June 1638" },
                    { key: "-61sp1p1p1p1", n: "Sylvester Baldwin", s: "M", ux: "-61sp1p1p1p2", info: "Born 28 Sep 1560 (!!) in Aston, Clinton, Buckinghamshire, England\nSupposedly had a second wife, Sarah Bryan, who was born in in 1602\nSylvester's parents are unknown\nDied in Buckinghamshire, 16 Feb 1632" },
                    { key: "-61sp1p1p1p2", n: "Jane (Wells)", s: "F", ux: "-61sp1p1p1p1", info: "Burn 1572 in Buckinghamshire, England\nDied 10 Mov 1669 in Milford, CT, USA (age 97)" },
                { key: "-61sp1p1p2", n: "Phillippi (Corbman)", s: "F", p1: "-61sp1p1p2p", p2: "-61sp1p1p2p2", ux: "-61sp1p1p1", info: "1603-1641, Aston Clinton, Buckinghamshire, England\nInformation gets unclear this far back; she appears to have married him 3 times?" },
                    { key: "-61sp1p1p2p", n: "Phillip Corbman", ux: "-61sp1p1p2p2", s: "M", info: "1592-1645, England" },
                    { key: "-61sp1p1p2p2", n: "", ux: "-61sp1p1p2p", s: "F" }, // anon
            { key: "-61sp1p2", n: "Phebe (Richardson)", s: "F", ux: "-61sp1p1", info: "Born and baptised 3 Jun 1632 in Boston, MA\nDied 13 Sep 1716 in Woburn, MA" },
        { key: "-61sp2", n: "Hannah (Richardson)", s: "F", ux: "-61sp1", info: "22 Oct 1667 - 28 Sep 1736, both in Woburn, Middlesex, MA" },
    { key: "-62", n: "Joseph Walker", s: "M", ux: "-63", info: "Born 10 Oct 1645 in Reading, MA\nDied 1 Jul 1729 in Billerica, MA" },
    { key: "-63", n: "Sarah (Wyman)", s: "F", ux: "-62", info: "Born 15 Apr 1650 in Woburn, MA\nDied 26 Jan 1729 in Billerica, MA" },
    { key: "-63c", n: "Elizabeth Walker", s: "F", ux: "-63cs", p1: "-62", p2: "-63", info: "1678-1716 in Billerica, MA" },
    { key: "-63cs", n: "Samuel Fitch", s: "M", ux: "-63c", info: "Born 1673. Settled on 'Winthrop farm' in Billerica/Bedford. Soldier in Indian War, 1706. Town clerk and selectman." },

    { key: "29u", n: "Carol", s: "F", p1: -37, p2: -38 },
    { key: "29v", n: "Janet", s: "F", p1: -37, p2: -38 },
    { key: "29w", n: "Larry", s: "M", p1: -37, p2: -38 },
    { key: "29x", n: "Donald", s: "M", p1: -37, p2: -38 },
    { key: "29y", n: "Charlotte", s: "F", p1: -37, p2: -38 },
    { key: "29z", n: "Deanna", s: "F", p1: -37, p2: -38 },




    // Rosalind Peterson's older relatives
	// Ingerskis
    { key: -51, n: "Rosalie Helen (Ingerski)", s: "F", p1: -52, p2: -53, ux: -54, info: "Born 4 Jun 1908 in IL. Completed two years of high school. Moved to Muncie, IN sometime between 1935 and 1940. Understood Polish (which her mother spoke).\nCatholic. After her marriage, her family \"turned on her\". She got along with Stella, Vic, and Florence.\nLost a set of twins. Died 7 Nov 1993; buried in Missouri with Husband" },
        { key: "-51t", n: "6 others", s: "X", p1: -52, p2: -53, info: "only 4 of whom survived" },
        { key: "-51u", n: "Anna", s: "F", p1: -52, p2: -53, info: "one of the oldest siblings" },
        { key: "-51v", n: "Stella", s: "F", p1: -52, p2: -53, ux: "-51vs", info: "30 years older than sister Rosalie" },
        { key: "-51vs", n: "", s: "M", ux: "-51v" },
        { key: "-51va", n: "\"Whitey\"", s: "M", p1: "-51v", p2: "-51vs", info: "nickname \"Whitey\". Real name unknown.\nServed on some battleship; it sank but he was ok" },
        { key: "-51vb", n: "two daughters", s: "F", p1: "-51v", p2: "-51vs" },
        { key: "-51w", n: "Florence", s: "F", p1: -52, p2: -53 },
        { key: "-51x", n: "Victoria", s: "F", p1: -52, p2: -53, ux:"-51xs" },
        { key: "-51xs", n: "Lou Witry", s: "M", ux: "-51x", info: "Lou fought in WWI, got gassed by the Germans at one point.\nWas a Lt. in the police force" },
        { key: "-51xa", n: "Jean", s: "F", p1: "-51x", p2: "-51xs" },
        { key: "-51xb", n: "Alan", s: "M", p1: "-51x", p2: "-51xs" },
        { key: "-51y", n: "Joe Jr.", s: "M", p1: -52, p2: -53, info: "Jerry, Bob, and a third boy (Joe?)" },
        { key: "-51z", n: "John", s: "M", p1: -52, p2: -53 },
    { key: -52, n: "Catherine (Rutkowski)", s: "F", ux: -53, info: "Sagreski?\nBorn c. 1868. From German Poland (as were her parents); \"someplace like Krakow or Warsaw.\" Spoke Polish and only a little English. Immigrated 1886. (some of?) her children, inc. Rosalie, could understand Polish.\nLived in Minuck/Minonk, IL; naturalized citizen" },
        { key: "-52a", n: "Celia Ingerski", s: "F", p1: -52, p2: -53, info: "Born in Illinois c. 1903. At age 17, was working as a servant (maid) for a private family. Had a few other siblings." },
        { key: "-52b", n: "John Ingerski", s: "M", p1: -52, p2: -53, info: "Born in Illinois c. 1896. At age 24, was working as a coal miner." },
    { key: -53, n: "Joseph Engerski", s: "M", ux: -52, info: "15 Feb 1851 - 27 Jul 1910; probably Catholic\nOriginally from Poland.\n\"majordomo to a Prussian prince (helped pick out his clothes and dress him) before coming to the United States around 1884\" - R Peterson.\nLived in Minuck, IL. \"Died in the coal mines when [daughter Rosalie] was three years old\" (before 1920) - R Peterson" },

    { key: -54, n: "Edward E Prentice", s: "M", p1: -56, p2: -57, info: "Born 29 Nov 1903 in Belfast, Ireland. He and his parents were from \"Northern Ireland\". \"English and moved to Belfast, Ireland. came to the United States around 1889, when [he] was five years old.\" -R Peterson.\nHe completed high school.\nWas Protestant (belonged to church of England).\nWas a meat salesman at GH Hammond Company. Worked for a distributor. Started this line of work around 1922. Income 2000 (I assume annual dollars?) in 1942. Worked 65 hours one week - that may be his norm. By 1942, he was married, a naturalized citizen in Indiana, and a good 5'10. Retired around Sep 1967. Died 30 Jan 1992; buried in Missouri with wife" },
    { key: -55, n: "Alex", s: "X", p1: -56, p2: -57, info: "Had a office job in military during WWII. Lived in Yakima, WA" },
    { key: -56, n: "?", s: "M", ux: -57, info: "Was a streetcar conductor. \"English and moved to Belfast, Ireland. came to the United States around 1889, when [Edward Prentice] was five years old.\" -R Peterson" }, // An Edward Prentice was naturalized in 1884, but I think this man was still in GB?
    { key: -57, n: "Lily Graham", s: "F", ux: -56, info: "\"English and moved to Belfast, Ireland. came to the United States around 1889, when [Edward Prentice] was five years old. died around 1915 from appendicitis.\" -R Peterson" },


    // Rosalind Peterson's siblings' families
    { key: -58, n: "Rosemary", s: "F", p1: -51, p2: -54, ux: "-58s", info: "\"born in Muncie, Indiana in Oct 1939\" -R Peterson.\nLives in Wisconsin" },
        { key: "-58s", n: "", s: "M", ux: -58 }, // anon
        { key: "-58a", n: "Philip", s: "M", p1: -58, p2: "-58s", info: "Lives in Naperville, IL" },
        { key: "-58b", n: "Stephen", s: "M", p1: -58, p2: "-58s", info: "Lives in Wisconsin" },
        { key: "-58c", n: "Eileen", s: "F", p1: -58, p2: "-58s", info: "Lives in Los Angeles" },
    { key: -59, n: "Barbara", s: "F", p1: -51, p2: -54, ux: "-59s", info: "86 as of May 2017. Lives in Spring, Mo." },
        { key: "-59s", n: "Rudy Wolff", s: "M", ux: -59 },
        { key: "-59a", n: "Duane", s: "M", p1: -59, p2: "-59s", info: "Dentist. Went back to Ireland; found a cousin who looks just like Edward Prentice" },
        { key: "-59b", n: "Dale", s: "M", p1: -59, p2: "-59s" },
    { key: -60, n: "Ed", s: "M", p1: -51, p2: -54, ux: "-60s", info: "Ed was in the Air Force, stationed in Bermuda for a while.\n74 as of May 2017; lives in Powell, Mo." },
        { key: "-60s", n: "Beverly Jones", s: "F", ux: -60, info: "Her dad worked on the atom bomb plans.\nShe was a concert pianist, then a teacher. As a teacher, she'd go around the country setting up educational programs for schools" },
        { key: "-60a", n: "Jessica", s: "F", p1: -60, p2: "-60s", info: "Live in Missouri" },
        { key: "-60as", n: "", s: "M", ux: "-60a" }, // anon
        { key: "-60ac", n: "3 kids", s: "X", p1: "-60a", p2: "-60as" },
        { key: "-60b", n: "Amy", s: "F", p1: -60, p2: "-60s", info: "Live in Missouri" },
        { key: "-60bs", n: "", s: "M", ux: "-60b" }, // anon
        { key: "-60bc", n: "2 kids", s: "X", p1: "-60b", p2: "-60bs" },

];

// next available: +60, -64
