marriagesInfo = [{sA: 2, sB: 3, info: "married in 1900"}];

// key needs to be different number for each person
// n = name (must be in double quotes)
// s (sex/gender) is either "M" or "F"
// p1 is parent1 (should be that person's key)
// p2 is parent2
// ux is spouse's key
// n: name, s: gender, p1: parent1, p2: parent2, ux: spouse, a: attributes/markers
// FINKEL PETERSONS

var FinkelPetersons = [

{ key: 5, n: "Ellie", s: "F", p1: 6, p2: 7, info: "Lives in New York" },
{ key: 6, n: "Sue Peterson", s: "F", p1: 28, p2: 29, ux: 7, info: "Lives in Illinois, works at Northwestern Hospital" },
{ key: 7, n: "Edward Finkel", s: "M", p1: 22, p2: 23, ux: 6, info: "Lives in Illinois" },
{ key: 8, n: "Maddie", s: "F", p1: 6, p2: 7, info: "Lives in Illinois" },
{ key: 9, n: "Jake", s: "M", p1: 6, p2: 7, info: "Lives in Illinois" },
{ key: "7a", n: "Luna", s: "P", p1: 6, p2: 7, info: "Species: Dog. Breed: Golden Doodle" },
{ key: "7b", n: "Midnight", s: "P", p1: 6, p2: 7, info: "Species: House Cat" },
{ key: "7c", n: "Tigris", s: "P", p1: 6, p2: 7, info: "Species: House Cat" },

];

// PATYK-FINKELS

var PatykFinkels = [

{ key: 1, n: "Leo Patyk-Finkel", s: "M", p1: 2, p2: 3, info: "Lives in Vermont" },
{ key: 2, n: "Lynn", s: "F", p1: 16, p2: 19, ux: 3, info: "Lives in Vermont, works at Dartmouth" },
{ key: 3, n: "Stuart Finkel", s: "M", p1: 22, p2: 23,ux: 2, info: "Lives in Vermont, works at Dartmouth" },
{ key: 4, n: "Max", s: "M", p1: 2, p2: 3, info: "Lives in Colorado" },
{ key: "3a", n: "Chloe", s: "P", p1: 2, p2: 3, info: "Species: Dog. Breed: Golden Doodle" },

];

// PATYKS 


var Patyks = [

// Anders

{ key: 10, n: "Addie", s: "F", p1: 11, p2: 12, info: "Lives in Wisconsin" },
{ key: 11, n: "Laura", s: "F", p1: 16, p2: 19, ux: 12, info: "Live in Wisconsin" },
{ key: 12, n: "Jay Anders", s: "M", ux: 11, info: "Lives in Wisconsin, works at Miller Beerl" },
{ key: 13, n: "Braden", s: "M", p1: 11, p2: 12, info: "Lives in  Wisconsin" },
{ key: 14, n: "Drew", s: "M", p1: 11, p2: 12, info: "Lives in Wisconsin" },

//Lisa(Patyk)
{ key: 15, n: "Lisa", s: "F", p1: 16, p2: 19, info: "Lives in Wisconsin" },

//Czarnecki Family

{key: 16, n: "Gloria Czarnecki" , s: "F", p1: 17, p2: 18, ux: 19 },
{key: 54, n: "Diane", s: "F", p1: 17, p2: 18 },
{key: 57, n: "Lois", s: "F", p1: 17, p2: 18 },
{key: 58, n: "Susan", s: "F", p1: 17, p2: 18, ux: "58a" },
{key: "58a", n: "Gary", s: "M", ux: 58 },
{key: "58b", n: "Shannon", s: "F", p1: 58, p2: "58a" },
{key: "58c", n: "Joe", s: "M", p1: 58, p2: "58a" },
{key: 17, n: "Stella Smerlinsky" , s: "F", ux: 18 },
{key: 18, n: "Julian" , s: "M", ux: 17 },

//Patyk Family

{key: 19, n: "Gary" , s: "M", p1: 20, p2: 21, ux: 16 },
{key: 59, n: "Gregory", s: "M", p1: 20, p2: 21, ux: "59a" },
{key: "59a", n: "", s: "F", ux: 59 }, // anon 
{key: "59b", n: "Sean", s: "M", p1: 59, p2: "59a", ux: "59ba" },
{key: "59ba", n: "", s: "F", ux: "59b" }, // anon
{key: 20, n: "Jean", s: "F", p1: 55, p2: 56, ux: 21 },
{key: 21, n: "Gilbert", s: "M", ux: 20 },
{key: 55, n: "Joesph Kapzhak", s: "M", ux: 56 },
{key: 56, n: "Angelina Hauke", s: "F", ux: 55 },

];

// FINKELS

var Finkels = [

//Finkel(Richman)
{key: 22, n: "Frances \"Fran\"", s: "F", p1: -1, p2: -28, ux:23, info: "Lives in Pennsylvania" },
{key: 23, n: "Lawrence \"Larry\" Finkel", s: "M", p1: 38, p2: -33, ux: 22 },



//Hunn

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


//Finkel

{ key: 38, n: "Samuel Finkel", s: "M", p1: 47, p2: 36 },
{ key: 39, n: "Cele Shulman", s: "F", ux: 38 },
{ key: 46, n: "Evelyn Kabatznick", s: "F", ux: 38 },
{ key: 47, n: "Max Finkel", s: "M", ux: 36, info: "Arrived from A russia town to Glasgow Sctoland to Ellis Island in 1902, born in Kamyantes Podlis'kyy, Russia(Now in Ukraine), lived in Brooklyn and Montrea" },
{ key: 36, n: "Yetta", s: "F", ux: 47, info: "Maiden name Horowitz" },
{ key: "47a", n: "Solomon?", s: "M", p1: 47, p2: 36 },
{ key: "47b", n: "Ethel", s: "F", p1: 47, p2: 36 },
{ key: "47ba", n: "Lou Brandow", s: "M", ux: "47b" },
{ key: "47bb", n: "David Trusell", s: "M", ux: "47b" },
{ key: "47bc", n: "Jack", s: "M", p1: "47b", p2: "47bb" },

//Brody

{ key: 40, n: "Martha", s: "F", p1: 38, p2: 39, ux: 41 }, 
{ key: 41, n: "Arthur Brody", s: "M", ux: 40 },
{ key: 42, n: "Carl", s: "M", p1: 40, p2: 41, ux: 43 },
{ key: 43, n: "Becky", s: "F", ux: 42 },
{ key: "42a", n: "Jill", s: "F", p1: 42, p2: 43 },
{ key: "42b", n: "Robin", s: "F", p1: 42, p2: 43 },
{ key: 44, n: "Elissa", s: "F", p1: 40, p2: 41, ux: "45a" },
{ key: 45, n: "Thomas", s: "M", p1: 44, p2: "45a" },
{key: "45a", n: "(Divorced)", s: "M", ux: 44 },

//Slotkin(sub)

{ key: 48, n: "Evelyn", s: "F", p1: -34, p2: -35, ux: 49 },
{ key: 49, n: "Jack Rosen", s: "M", ux: 48 },
{ key: "48a", n: "Stanley", s: "M", p1: 48, p2: 49 },
{ key: 50, n: "Sam", s: "M", p1: -34, p2: -35, ux: 51 },
{ key: 51, n: "Pauline", s: "F", ux: 50 }, 
{ key: "50a", n: "Barry", s: "M", p1: 50, p2: 51 },
{ key: 52, n: "Marcia", s: "F", p1: -34, p2: -35, ux: 53 },
{ key: 53, n: "Sam Skolnick", s: "M", ux: 52 },
{ key: "52a", n: "Jay", s: "M", p1: 52, p2: 53 },
{ key: "52b", n: "Harriet", s: "F", p1: 52, p2: 53 },



//Richman family

{ key: -1, n: "Samuel Richman", s: "M", p1: -2, p2: -7, ux: -28, info: "he was an 'upholder'" },
// W Pearl shur. married on March 11 1936
{ key: -2, n: "Louis", s: "M", p1: -3, p2: -4, ux: -7, info: "Louis Richman" },
{ key: -7, n: "Sara(h)", s: "F", p1: -8, p2: -9, ux: -2 },
// ‘Louis and Sara married in Philadelphia 1910?’ -FF
{ key: -3, n: "Isadore Rochman", s: "M", ux: -4, info: "Ize; ‘born in 1845 in Ochumunn, Russia. He married in 1865 and died in 1890 and was a jeweler’ - fran" },
{ key: -4, n: "Dora (nee Sabilinsky)", s: "M", p1: -5, p2: -6, ux: -3 },
{ key: -5, n: "Goldie Kriv", s: "F", ux: -6, info: "1830-1895; probably born Ochumunn, Russia" },
{ key: -6, n: "Mushie Sabilinsky", s: "M", ux: -5 },
// m 1845
{ key: -8, n: "Ethel", s: "F", ux: -9, info: "(Anna Gvintz)(1859-1899)" },
{ key: -9, n: "Shumel Goodseit", s: "M", ux: -8, info: "(Gutzeit)(1855-1893) a teacher, might have lived in Odessa, Russia" },
{ key: -10, n: "Goldie", s: "F", p1: -2, p2: -7, ux: -14 },
{ key: -14, n: "Herman Ellisand", s: "M", ux: -10 },
{ key: "-10a", n: "Harvey", s: "M", p1: -10, p2: -14 },
{ key: "-10b", n: "Ivan", s: "M", p1: -10, p2: -14 },
{ key: -11, n: "Jean", s: "F", p1: -2, p2: -7, ux: -17 },
{ key: -17, n: "Donald Schurr", s: "M", ux: -11 },
{ key: "-11a", n: "Arnold", s: "M", p1: -11, p2: -17 },
{ key: "-11b", n: "Steve", s: "M", p1: -11, p2: -17 },
{ key: -12, n: "Isadore", s: "M", p1: -2, p2: -7, ux: "-12c" },
{ key: "-12c", n: "Sylvia", s: "F", ux: -12 },
{ key: "-12a", n: "Steven", s: "M", p1: -12, p2: "-12c" },
{ key: "-12b", n: "Devorah", s: "F", p1: -12, p2: "-12c" },
{ key: -13, n: "Martin", s: "M", p1: -2, p2: -7, ux: "-13c" },
{ key: "-13c", n: "Mildren", s: "F", ux: -13 },
{ key: "-13a", n: "Andy", s: "M", p1: -13, p2: "-13c" },
{ key: "-13b", n: "Sharon", s: "F", p1: -13, p2: "-13c", info: "'Cousin Sharon'" },

{ key: -18, n: "Israel", s: "M", p1: -3, p2: -4, ux: "-18s" },
{ key: "-18s", n: "Anna", s: "F", ux: -18 },
{ key: -19, n: "Izzie", s: "X", p1: -3, p2: -4, ux: "-19s" },
{ key: "-19s", n: "Cele", s: "X", ux: -19 },
{ key: "-19a", n: "Goldie, Herb, Victor", s: "X", p1: -19, p2: "-19s" },
{ key: -20, n: "Charles", s: "M", p1: -3, p2: -4, ux: "-20s" },
{ key: "-20s", n: "Sara", s: "F", ux: -20 },
{ key: -21, n: "Minsa", s: "F", p1: -3, p2: -4, ux: "-21s" },
{ key: "-21s", n: "Bruce Potack", s: "M", ux: -21 },
{ key: "-21a", n: "(about 6 children)", s: "X", p1: -19, p2: "-19s" },
{ key: -22, n: "Rose; Fruda", s: "F", p1: -3, p2: -4, info: "(Russia) [not sure what that means]" },
{ key: -23, n: "?", s: "X", p1: -3, p2: -4, info: "'Family lore says there were two other sisters who married officers in the Russian army and went to China.' -F.F." },

{ key: -24, n: "Reba", s: "F", p1: -8, p2: -9, ux: "-24s", info: "came to america after sara" },
{ key: "-24s", n: "Dave", s: "M", ux: -24 },
{ key: -25, n: "2 other boys", s: "X", p1: -8, p2: -9, info: "one of whom might have returned to russia" },
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
{ key: -29, n: "Joseph Shur", s: "M", p1: "?1a", p2: "?1b", ux: -30, info: "\"According to family lore, Esther and Joseph were married at 16 and left their homes and families to come to America, we think they boarded a ship in England but don't know how they got there.other members of their family were reported to have gone to Chicago and South Africa .\" -Fran Finkel" },
{ key: -30, n: "Esther", s: "F", ux: -29, info: "\"According to family lore, Esther and Joseph were married at 16 and left their homes and families to come to America, we think they boarded a ship in England but don't know how they got there.other members of their family were reported to have gone to Chicago and South Africa .\" -Fran Finkel" },
// there is some marriage info for joseph and esther
{ key: -28, n: "Pearl Shur", s: "F", p1: -29, p2: -30, ux: -1, info: "she was a clerk" },
{ key: "-28a", n: "Harry", s: "M", p1: -29, p2: -30, ux: "-28as" },
{ key: "-28as", n: "Rose", s: "F", ux: "-28a" },
{ key: "-28aa", n: "Sharon & Stanley", s: "X", p1: "-28a", p2: "-28as" },
{ key: "-28b", n: "Rose", s: "F", p1: -29, p2: -30, ux: "-28bs" },
{ key: "-28bs", n: "Harry Olin", s: "M", ux: "-28b" },
{ key: "-28ba", n: "Marilyn, Alan, Gerry", s: "X", p1: "-28b", p2: "-28bs" },
{ key: "-28c", n: "Fanny", s: "F", p1: -29, p2: -30, ux: "-28cs" },
{ key: "-28cs", n: "Ben Jones", s: "M", ux: "-28c" },
{ key: "-28cc", n: "Donald", s: "M", p1: "-28c", p2: "-28cs" },
{ key: "-28d", n: "Edith", s: "F", p1: -29, p2: -30, ux: "-28ds" },
{ key: "-28ds", n: "Victor Powell", s: "M", ux: "-28d" },
{ key: "-28da", n: "Nina", s: "F", p1: "-28d", p2: "-28ds" },
{ key: "-28db", n: "Eric", s: "M", p1: "-28d", p2: "-28ds" },




// Slotkin family

// Slotkin family immigrated from Vitebsk in 1906
{ key: "?2a", n: "?", s: "X", ux: "?2b", info: "Slotkin family immigrated from Vitebsk in 1906" },
{ key: "?2b", n: "?", s: "X", ux: "?2a", info: "Slotkin family immigrated from Vitebsk in 1906" },
{ key: -33, n: "Edythe Slotkin", s: "F", p1: -34, p2: -35, ux: 38, info: "married 1935" },
// Edythe married 1935
{ key: -34, n: "David Slotkin", s: "M", p1: "?2a", p2: "?2b", ux: -35 },
{ key: -35, n: "Leah Pearlstein", s: "F", ux: -34, info: "'probably born in Vitebsk, married and came here in 1906' - fran" },
// david and leah "married and came here in 1906" - fran
{ key: "-36a", n: "Max", s: "M", p1: "?2a", p2: "?2b", ux: "-36as" },
{ key: "-36as", n: "Frieda", s: "F", ux: "-36a" },
{ key: "-36ab", n: "Herman, Sam, Sol, Celia, Ester", s: "X", p1: "-36a", p2: "-36as" },
{ key: "-36b", n: "Cy", s: "M", p1: "?2a", p2: "?2b", ux: "-36bs" },
{ key: "-36bs", n: "", s: "F", ux: "-36b" }, // anon
{ key: "-36bb", n: "Lillian", s: "F", p1: "-36b", p2: "-36bs", ux: "-36bbs" },
{ key: "-36bbs", n: "Bennet", s: "M", ux: "-36bb" },
{ key: "-36bbb", n: "Valerie", s: "F", p1: "-36bb", p2: "-36bbs" },
{ key: "-36bbc", n: "Stephanie", s: "F", p1: "-36bb", p2: "-36bbs" },
{ key: "-36bc", n: "Bennet", s: "M", p1: "-36b", p2: "-36bs" },




];




// PETERSONS

var Petersons = [


//Manthey

{ key: 24, n: "Emma Manthey", s: "F", p1: 25, p2: 26, info: "Lives in Illinois" },
{ key: 25, n: "Catherine", s: "F", p1: 28, p2: 29, ux: 26, info: "Lives in Illinois" },
{ key: 26, n: "Jim Manthey", s: "M", ux: 25, info: "Lives in Illinois" },

//Dave Jr. Peterson

{ key: 27, n: "Dave Jr.", s: "M", p1: 28, p2: 29 },

// Peterson

{ key: 28,  n: "Rosalind", s: "F", p1: -51, p2: -54, ux: 29, info: "or \"sis\". Lives in Illinois" },
{ key: 29, n: "Dave Sr.", s: "M", p1: -37, p2: -38, ux: 28, info: "Lived in Illinois" },





// Peterson/Walker family
{ key: -37, n: "Trellis Peterson", s: "M", ux: -38, info: "'Was from Kansas… Supervisor for Silver Cup Bread… Worked for Holsum Bread… Painted the insides of people's homes to support his family' -R Peterson" },
{ key: -38, n: "Lillian Walker", s: "F", p1: -39, p2: -40, ux: -37 },
{ key: -39, n: "Elizabeth Anna Lambert", s: "F", ux: -40, info: "from Canada" },
{ key: -40, n: "Arthur Robert W.", s: "M", p1: -41, p2: -42, ux: -39, info: "born 31 Dec 1877 (1878?); from illinois" },
{ key: "-40x", n: "Addie", s: "F", p1: -41, p2: -42, info: "born 1866ish" },
{ key: "-40y", n: "Alice", s: "F", p1: -41, p2: -42, info: "born 1869ish" },
{ key: "-40z", n: "William", s: "M", p1: -41, p2: -42, info: "born 1877ish" },
{ key: -41, n: "Emma W. (nee Roberts)", s: "F", ux: -42 },
{ key: -42, n: "Henry Arthur W.", s: "M", p1: -43, p2: -44, ux: -41, info: "16 Apr 1837 to 11 July 1914; lived for some time in Chicago;" },
{ key: "-42w", n: "George E", s: "M", p1: -43, p2: -44, info: "born ~1841" },
{ key: "-42x", n: "Lydia J", s: "F", p1: -43, p2: -44, info: "born ~1846" },
{ key: "-42y", n: "William H", s: "M", p1: -43, p2: -44, info: "born ~1832" },
{ key: "-42z", n: "Calvin B", s: "M", p1: -43, p2: -44, info: "born ~1830" },
{ key: -43, n: "Ephraim W W", s: "M", p1: -45, p2: -46, ux: -44, info: "25 Feb 1802 (NH?) - 13 Feb 1863 (Windham, VT). something is \"Oanmiston\"? can't read" },
{ key: -44, n: "Lydia J (nee Harris)", s: "F", ux: -43, info: "b. 1810" },
{ key: -45, n: "Betsey (nee Veazay)", s: "F", ux: -46, info: "(sp?) b 1775. d ?" },
{ key: -46, n: "Abiel Walker", s: "M", p1: -47, p2: -48, ux: -45, info: "B 1768, Andover, Mass. D 1838, Westmoreland, NH" },
{ key: -47, n: "Benjamin Walker III (the soldier)", s: "M", p1: -49, p2: -50, ux: -48, info: "B 6 Oct 1741 Billerica, MA. D 15 Aug 1775 Boston jail. So much detail: https://goo.gl/UZaHn5" },
{ key: "-47x", n: "William", s: "M", p1: -49, p2: -50, info: "b 22 Mar 1742." },
{ key: "-47y", n: "Hannah", s: "F", p1: -49, p2: -50, info: "b 26 Mar 1745" },
{ key: "-47z", n: "Susanna", s: "F", p1: -49, p2: -50, info: "21 Mar 1745 - 22 Dec 1821" },
{ key: -48, n: "Abiel (nee Abbott)", s: "F", ux: -47, info: "1745 - 1795" },
{ key: -49, n: "Hannah", s: "F", ux: -50 },
{ key: -50, n: "Benjamin Walker Jr.", s: "M", ux: -49, info: "Presumably there was a first Benjamin Walker" },

{ key: "29u", n: "Carol", s: "F", p1: -37, p2: -38 },
{ key: "29v", n: "Janet", s: "F", p1: -37, p2: -38 },
{ key: "29w", n: "Larry", s: "M", p1: -37, p2: -38 },
{ key: "29x", n: "Donald", s: "M", p1: -37, p2: -38 },
{ key: "29y", n: "Charlotte", s: "F", p1: -37, p2: -38 },
{ key: "29z", n: "Deanna", s: "F", p1: -37, p2: -38 },




// Rosalind Peterson's older relatives
// Ingerskis
{ key: -51, n: "Rosalie (Ingerski)", s: "F", p1: -52, p2: -53, ux: -54 },
{ key: "-51t", n: "6 others", s: "X", p1: -52, p2: -53, info: "only 4 of whom survived" },
{ key: "-51u", n: "Anna", s: "F", p1: -52, p2: -53 },
{ key: "-51v", n: "Stella", s: "F", p1: -52, p2: -53 },
{ key: "-51w", n: "Florence", s: "F", p1: -52, p2: -53 },
{ key: "-51x", n: "Victoria", s: "F", p1: -52, p2: -53 },
{ key: "-51y", n: "Joe Jr.", s: "M", p1: -52, p2: -53 },
{ key: "-51z", n: "John", s: "M", p1: -52, p2: -53 },
{ key: -52, n: "Catherine (Rutkowski)", s: "F", ux: -53, info: "Lived in Minuck, IL" },
{ key: -53, n: "Joseph (?)", s: "M", ux: -52, info: "Lived in Minuck, IL" },

{ key: -54, n: "Edward Prentice", s: "M", p1: -56, p2: -57, info: "\"English and moved to Belfast, Ireland. came to the United States around 1889, when [he] was five years old.\" -R Peterson" },
{ key: -55, n: "Alex", s: "X", p1: -56, p2: -57, info: "Lived in Yakima, WA" },
{ key: -56, n: "?", s: "M", ux: -57, info: "was a streetcar conductor. \"English and moved to Belfast, Ireland. came to the United States around 1889, when [Edward Prentice] was five years old.\" -R Peterson" },
{ key: -57, n: "Lily Graham", s: "F", ux: -56, info: "\"English and moved to Belfast, Ireland. came to the United States around 1889, when [Edward Prentice] was five years old. died around 1915 from appendicitis.\" -R Peterson" },


// Rosalind Peterson's siblings' families
{ key: -58, n: "Rosemary", s: "F", p1: -51, p2: -54, ux: "-58s", info: "\"born in Muncie, Indiana on October 25, 1939\" -R Peterson" },
{ key: "-58s", n: "", s: "M", ux: -58 }, // anon
{ key: "-58a", n: "Philip", s: "M", p1: -58, p2: "-58s", info: "Lives in Naperville, IL" },
{ key: "-58b", n: "Stephen", s: "M", p1: -58, p2: "-58s", info: "Lives in Wisconsin" },
{ key: "-58c", n: "Eileen", s: "F", p1: -58, p2: "-58s", info: "Lives in Los Angeles" },
{ key: -59, n: "Barbara", s: "F", p1: -51, p2: -54, ux: "-59s", info: "86 as of May 4 2017" },
{ key: "-59s", n: "Rudy Wolff", s: "M", ux: -59 },
{ key: "-59a", n: "Duane", s: "M", p1: -59, p2: "-59s", info: "Dentist. Went back to Ireland; found a cousin who looks just like Edward Prentice" },
{ key: "-59b", n: "Dale", s: "M", p1: -59, p2: "-59s" },
{ key: -60, n: "Ed", s: "M", p1: -51, p2: -54, ux: "-60s", info: "74 as of May 4 2017; lives in Powell, Mo." },
{ key: "-60s", n: "Beverly Jones", s: "F", ux: -60 },
{ key: "-60a", n: "Jessica", s: "F", p1: -60, p2: "-60s", info: "Live in Missouri" },
{ key: "-60as", n: "", s: "M", ux: "-60a" }, // anon
    { key: "-60ac", n: "3 kids", s: "X", p1: "-60a", p2: "-60as" },
{ key: "-60b", n: "Amy", s: "F", p1: -60, p2: "-60s", info: "Live in Missouri" },
{ key: "-60bs", n: "", s: "M", ux: "-60b" }, // anon
    { key: "-60bc", n: "2 kids", s: "X", p1: "-60b", p2: "-60bs" },




];



// Others 

var OTHERS = [

];

