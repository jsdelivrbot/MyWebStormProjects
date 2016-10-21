/**
 * Created by Sheldon Lee on 8/28/2016.
 */
var YUInstance;
YUI().use('node','event', 'slider', 'autocomplete', 'autocomplete-filters', 'autocomplete-highlighters', function(Y) {
    YUInstance = Y;
    var cities = ["Abbott","Abernathy","Abilene","Ackerly","Addison","Adrian","Agua Dulce","Alamo","Alamo Heights","Albany","Aledo","Alice","Allen","Alpine","Alton","Alvarado","Alvin","Amarillo","Ames","Amherst","Anahuac","Anderson","Andrews","Angleton","Angus","Anna","Anson","Anton","Appleby","Aquilla","Aransas Pass","Archer City","Arcola","Argyle","Arlington","Arp","Asherton","Athens","Atlanta","Aubrey","Aurora","Austin","Austwell","Avery","Azle","Bailey","Baird","Balch Springs","Balcones Heights","Ballinger","Balmorhea","Bandera","Bangs","Bardwell","Barry","Barstow","Bartlett","Bastrop","Bay City","Bayou Vista","Baytown","Beach City","Beasley","Beaumont","Beckville","Bedford","Bedias","Bee Cave","Beeville","Bellaire","Bellevue","Bellmead","Bellville","Belton","Benavides","Benbrook","Benjamin","Bertram","Beverly Hills","Bevil Oaks","Big Lake","Big Spring","Big Wells","Bishop","Blackwell","Blanco","Blossom","Blue Mound","Blue Ridge","Boerne","Bogata","Bonham","Borger","Bovina","Bowie","Brackettville","Brady","Brazoria","Brazos Bend","Brazos Country","Breckenridge","Bremond","Brenham","Briaroaks","Bridge City","Bridgeport","Brookshire","Brookside Village","Browndell","Brownfield","Brownsboro","Brownsville","Brownwood","Bruceville-Eddy","Bryan","Bryson","Buda","Buffalo","Bulverde","Bunker Hill Village","Burkburnett","Burke","Burleson","Burnet","Byers","Cactus","Caddo Mills","Caldwell","Callisburg","Calvert","Cameron","Camp Wood","Campbell","Canadian","Canton","Canyon","Carmine","Carrizo Springs","Carrollton","Carthage","Cashion Community","Castle Hills","Castroville","Cedar Hill","Cedar Park","Celeste","Celina","Center","Centerville","Chandler","Channing","Charlotte","Chico","Childress","Chillicothe","China","Chireno","Cibolo","Cisco","Clarendon","Clarksville","Clarksville City","Claude","Clear Lake Shores","Cleburne","Cleveland","Clifton","Clute","Clyde","Cockrell Hill","Coldspring","Coleman","College Station","Colleyville","Colmesneil","Colorado City","Columbus","Comanche","Combine","Commerce","Conroe","Converse","Cool","Cooper","Coppell","Copperas Cove","Corinth","Corpus Christi","Corsicana","Cottonwood","Cottonwood Shores","Cotulla","Coupland","Cove","Covington","Coyote Flats","Crandall","Crane","Cranfills Gap","Creedmoor","Cresson","Crockett","Crosbyton","Crowell","Crowley","Crystal City","Cuero","Cumby","Cushing","Cut and Shoot","Daingerfield","Daisetta","Dalhart","Dallas","Dalworthington Gardens","Danbury","Dayton","Dayton Lakes","De Leon","Dean","Decatur","DeCordova","Deer Park","DeKalb","Dell City","Del Rio","Denison","Denton","Deport","DeSoto","Devers","Devine","Diboll","Dickens","Dickinson","Dilley","Dimmitt","Donna","Dorchester","Dripping Springs","Driscoll","Dublin","Dumas","Duncanville","Eagle Lake","Eagle Pass","Early","Earth","East Bernard","East Mountain","East Tawakoni","Eastland","Easton","Ector","Edcouch","Eden","Edinburg","Edna","Edom","El Campo","El Cenizo","El Lago","El Paso","Eldorado","Electra","Elgin","Elmendorf","Elsa","Emory","Encinal","Ennis","Escobares","Euless","Eureka","Eustace","Everman","Fair Oaks Ranch","Fairfield","Falfurrias","Falls City","Farmers Branch","Farmersville","Farwell","Fate","Fayetteville","Ferris","Florence","Floresville","Floydada","Follett","Forest Hill","Forney","Forsan","Fort Stockton","Fort Worth","Franklin","Fredericksburg","Freeport","Freer","Friendswood","Friona","Frisco","Fritch","Frost","Fruitvale","Fulshear","Gainesville","Galena Park","Gallatin","Galveston","Ganado","Garden Ridge","Garland","Garrison","Gatesville","George West","Georgetown","Gholson","Giddings","Gilmer","Gladewater","Glenn Heights","Glen Rose","Godley","Goldsmith","Goldthwaite","Goliad","Golinda","Gonzales","Goodlow","Goodrich","Gordon","Goree","Gorman","Graford","Graham","Granbury","Grand Prairie","Grand Saline","Grandview","Granger","Granite Shoals","Granjeno","Grapeland","Grapevine","Greenville","Gregory","Grey Forest","Groesbeck","Groves","Groveton","Gruver","Gun Barrel City","Gunter","Hale Center","Hallettsville","Hallsburg","Hallsville","Haltom City","Hamilton","Hamlin","Hardin","Harker Heights","Harlingen","Hart","Haskell","Haslet","Hawk Cove","Hawkins","Hawley","Hays","Hearne","Heath","Hedley","Hedwig Village","Helotes","Hemphill","Hempstead","Henderson","Henrietta","Hereford","Hewitt","Hico","Hidalgo","Hideaway","Higgins","Highland Haven","Highland Village","Hill Country Village","Hillsboro","Hilshire Village","Hitchcock","Holliday","Hondo","Honey Grove","Hooks","Horizon City","Horseshoe Bay","Houston","Howardwick","Hubbard","Hudson","Hudson Oaks","Hughes Springs","Humble","Hunters Creek Village","Huntington","Huntsville","Hurst","Hutchins","Hutto","Huxley","Idalou","Industry","Ingleside","Ingleside on the Bay","Ingram","Iola","Iowa Park","Iraan","Iredell","Irving","Itasca","Ivanhoe","Jacinto City","Jacksboro","Jacksonville","Jamaica Beach","Jarrell","Jasper","Jayton","Jefferson","Jersey Village","Jewett","Joaquin","Johnson City","Jolly","Jonestown","Josephine","Joshua","Jourdanton","Junction","Justin","Karnes City","Katy","Kaufman","Keene","Keller","Kemah","Kemp","Kempner","Kendleton","Kenedy","Kennard","Kennedale","Kerens","Kermit","Kerrville","Kilgore","Killeen","Kingsbury","Kingsville","Kirby","Kirbyville","Knollwood","Kountze","Kress","Krugerville","Krum","Kyle","La Feria","La Grange","La Grulla","La Joya","La Marque","La Porte","La Vernia","La Villa","La Ward","LaCoste","Lacy-Lakeview","Lago Vista","Lake Bridgeport","Lake Dallas","Lake Jackson","Lake Worth","Lakeport","Lakeway","Lakewood Village","Lamesa","Lampasas","Lancaster","Laredo","Latexo","Lavon","League City","Leakey","Leander","Leary","Leon Valley","Leona","Leonard","Leroy","Levelland","Lewisville","Liberty","Liberty Hill","Lindale","Linden","Lindsay","Lipan","Little Elm","Littlefield","Little River-Academy","Live Oak","Liverpool","Llano","Lockhart","Log Cabin","Lometa","Lone Oak","Lone Star","Longview","Lorena","Lorenzo","Los Fresnos","Los Ybanez","Lott","Lovelady","Lowry Crossing","Lubbock","Lucas","Lueders","Lufkin","Luling","Lumberton","Lyford","Lytle","Madisonville","Magnolia","Malakoff","Manor","Mansfield","Manvel","Marble Falls","Marfa","Marion","Marlin","Marquez","Marshall","Mart","Martindale","Mason","Mathis","Maud","Maypearl","McAllen","McCamey","McGregor","McKinney","McLendon-Chisholm","Meadowlakes","Meadows Place","Melissa","Memphis","Menard","Mercedes","Meridian","Mertzon","Mesquite","Mexia","Miami","Midland","Midlothian","Midway","Milano","Miles","Mineola","Mineral Wells","Mingus","Mission","Missouri City","Mobeetie","Mobile City","Monahans","Mont Belvieu","Montgomery","Moody","Moore Station","Moran","Morgan","Morgan's Point","Morgan's Point Resort","Morton","Mount Calm","Mount Enterprise","Mount Pleasant","Mountain City","Muenster","Muleshoe","Munday","Murchison","Murphy","Mustang Ridge","Nacogdoches","Naples","Nash","Nassau Bay","Natalia","Navasota","Nazareth","Nederland","Needville","Nevada","Newark","New Berlin","New Boston","New Braunfels","Newcastle","New Chapel Hill","New Fairview","New Home","New London","New Summerfield","Newton","New Waverly","Niederwald","Nixon","Nocona","Nolanville","Nome","Noonday","Nordheim","North Cleveland","North Richland Hills","Novice","Oak Leaf","Oak Point","Oak Ridge North","O'Brien","Odem","Odessa","O'Donnell","Oglesby","Old River-Winfree","Olmos Park","Olney","Olton","Omaha","Onalaska","Orange","Orange Grove","Orchard","Ore City","Overton","Ovilla","Oyster Creek","Palacios","Palestine","Palmhurst","Palm Valley","Palmview","Pampa","Panorama Village","Paradise","Paris","Parker","Pasadena","Pattison","Patton Village","Pearland","Pearsall","Pecan Gap","Pecan Hill","Pecos","Pelican Bay","Penitas","Perryton","Petersburg","Petrolia","Petronila","Pflugerville","Pharr","Pilot Point","Pine Forest","Pinehurst","Pineland","Piney Point Village","Pittsburg","Plainview","Plano","Pleasanton","Plum Grove","Point","Point Blank","Point Comfort","Port Aransas","Port Arthur","Port Isabel","Port Lavaca","Port Neches","Portland","Post","Poteet","Poynor","Prairie View","Premont","Presidio","Princeton","Progreso","Progreso Lakes","Quanah","Queen City","Quinlan","Quitaque","Quitman","Ralls","Ranger","Rankin","Ravenna","Raymondville","Red Lick","Red Oak","Redwater","Reklaw","Reno","Reno","Rhome","Rice","Richardson","Richland Hills","Richmond","Richwood","Riesel","Rio Bravo","Rio Grande City","Rio Hondo","Rio Vista","River Oaks","Riverside","Roanoke","Robert Lee","Robinson","Robstown","Roby","Rockdale","Rockport","Rockwall","Rollingwood","Roma","Ropesville","Roscoe","Rose City","Rose Hill Acres","Rosebud","Rosenberg","Ross","Rotan","Round Rock","Rowlett","Roxton","Royse City","Runaway Bay","Rusk","Sabinal","Sachse","Sadler","Saginaw","Saint Jo","San Angelo","San Antonio","San Augustine","San Benito","San Diego","San Elizario","San Juan","San Marcos","San Patricio","San Perlita","San Saba","Sandy Oaks","Sandy Point","Sanger","Sansom Park","Santa Clara","Santa Fe","Savoy","Schertz","Schulenburg","Scotland","Scottsville","Seabrook","Seadrift","Seagoville","Seagraves","Sealy","Seguin","Selma","Seminole","Seven Oaks","Seven Points","Seymour","Shallowater","Shamrock","Shavano Park","Shenandoah","Shepherd","Sherman","Shiner","Shoreacres","Silsbee","Silverton","Simonton","Sinton","Slaton","Smiley","Smithville","Snook","Snyder","Socorro","Somerset","Somerville","Sonora","Sour Lake","South Houston","Southlake","Southmayd","Southside Place","Spearman","Splendora","Spofford","Spring Branch","Spring Valley Village","Springtown","Spur","Stafford","Stamford","Stanton","Staples","Star Harbor","Stephenville","Sterling City","Stinnett","Stockdale","Stratford","Strawn","Sudan","Sugar Land","Sullivan City","Sulphur Springs","Sundown","Sunray","Sunrise Beach Village","Sunset Valley","Sun Valley","Surfside Beach","Sweeny","Sweetwater","Taft","Tahoka","Talco","Tatum","Taylor","Taylor Lake Village","Taylor Landing","Teague","Temple","Terrell","Terrell Hills","Texarkana","Texas City","Texhoma","The Colony","Thorndale","Thrall","Three Rivers","Timpson","Toco","Todd Mission","Tolar","Tom Bean","Tomball","Tool","Trenton","Trinidad","Trinity","Troup","Troy","Tulia","Turkey","Tuscola","Tye","Tyler","Uhland","Uncertain","Union Grove","Union Valley","Universal City","University Park","Uvalde","Valley Mills","Valley View","Van","Van Alstyne","Vega","Vernon","Victoria","Vidor","Von Ormy","Waco","Waelder","Wake Village","Waller","Wallis","Walnut Springs","Warren City","Waskom","Watauga","Waxahachie","Weatherford","Webster","Weimar","Weinert","Weir","Wellington","Wellman","Weslaco","West","Westbrook","West Columbia","West Lake Hills","Weston","Weston Lakes","West Orange","West Tawakoni","West University Place","Westworth Village","Wharton","Wheeler","White Oak","White Settlement","Whitehouse","Whitesboro","Whitewright","Wichita Falls","Willis","Willow Park","Wills Point","Wilmer","Wilson","Wimberley","Windcrest","Winfield","Wink","Winnsboro","Winters","Wixon Valley","Wolfe City","Wolfforth","Woodbranch","Woodcreek","Woodway","Wylie","Yoakum","Yorktown","Zavalla"];
    var slider = new Y.Slider({
        axis        : 'x',
        min         : 50000,
        max         : 500000,
        value       : 50000,
        length      : '600px',
        clickableRail: false,
        after: {
            valueChange: function(e) {
                // e.target.thumb.setAttribute('aria-label', 'Purchase Price ' + e.newVal);
                // Y.one('#purchase-price').set('innerHTML', 'Purchase Price ' + e.newVal);
            }
        }
    });

    slider.THUMB_TEMPLATE = '<span class="{thumbClass}" aria-labelledby="purchase-price" aria-valuetext="" aria-valuemax="" aria-valuemin="" aria-valuenow="" role="slider" tabindex="0"><img src="{thumbShadowUrl}" alt="Slider thumb shadow" class="{thumbShadowClass}"><img src="{thumbImageUrl}" alt="Slider thumb" class="{thumbImageClass}"></span>';

    slider.render('.slider');

    console.log(slider);

    Y.one('#city-in-texas').plug(Y.Plugin.AutoComplete, {
        resultFilters: 'phraseMatch',
        resultHighlighter: 'phraseMatch',
        source: cities,
        minQueryLength: 3/*,
        on: {
            results: function(e) {
                console.log(e);
            }
        }*/
    });
});