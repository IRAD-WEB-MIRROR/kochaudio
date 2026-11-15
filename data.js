/* Köch Audio site data.
   releases: the catalogue shown on the site (a selection; the full catalogue is on the platforms).
   gigs: concert dates. kind "abroad" = tickets through Sahna Bilet; kind "home" = ISEZ dates, at the door.
   Dates are local to the venue, YYYY-MM-DD; time is doors/start "HH:MM".
   Gigs whose date is before today move to "Past shows" automatically.
   city/country are keys translated in i18n.js (cities/countries blocks); venues are written as the venue writes them. */

window.KOCH = {
  email: "kochaudio.online",         /* contact addresses are <name>@<this> */
  releasesTotal: 400,


  /* Album pages (#/release/<slug>). Track lists as the platforms show them; a length is given only once a recording is out ("" until then).
     Releases without a track list here show only their details and platform links.
     cover: covers/<slug>.jpg when we have the artwork. */
  tracks: {
    "Karakush|Biyikte": [["Biyikte","Up High",""],["Kolkap","The Glove",""],["Örük Gülü","Apricot Blossom",""],["Küzgü","Mirror",""],["Aryk","The Ditch",""],["Shyrdak","",""],["Eki Tilde","In Two Languages",""],["Kartochka","Photocard",""],["Balapan","Eaglet",""]],
    "tüntolk|Jolchu": [["Chöl Shamaly","Desert Wind","3:21"],["Kazan","The Cauldron","3:51"],["Umay","","2:31"],["Kökjal","Grey Mane","4:01"],["Jolchu","Wayfarer","3:17"],["Kara Burkut","Black Eagle","2:41"],["Morkhan, Karañgy Ee","Morkhan the Dark Lord","3:23"],["Tañ","Dawn (instrumental)","2:10"]],
    "tüntolk|Zvezda Irad": [["Jyldyzdardy Kes","Cut the Stars","3:25"],["Zvezda Irad","Star of Irad","3:04"],["Jorgo","Ambler","3:07"],["Tündük","Crown Ring","3:50"],["Jyldyzdardy Kes (Almaty Night Mix)","","4:32"]],
    "tüntolk|Kara Suu": [["Kara Suu","Black Water","4:08"],["Kökjal Kaitty","Grey Mane Has Returned","3:30"],["Temir Jol","Railway","3:37"],["Kotelnaya","Boiler Room","2:44"],["Muz","Ice","2:47"],["Kara Jel","Black Wind","2:16"],["Ak Kush","White Bird","2:47"],["Allo, Ene?","Hello, Mother?","3:16"],["Tañ Atkancha","Until Dawn","3:08"]],
    "tüntolk|White Stallion in Fog": [["Tumandagy Ak At","White Stallion in Fog",""],["Üyüm, Jürögüm, Janım","My Home My Heart My Soul",""],["Temir Torlor","Iron Nets",""],["Moiynkum","",""],["Kaitysh","Return",""],["Altyn Kazyk","The Golden Stake",""],["Jaña Talas","New Talas",""],["Uktaba","Don't Sleep",""],["Kara Jash","Black Tears",""],["Ak Jol","White Road",""]],
    "tüntolk|Umay": [["Umay Ene","Mother Umay",""],["Beshik","Cradle",""],["Kök Asman","Blue Sky",""],["Burkut","Golden Eagle",""],["Kızyl Jip","Red Thread",""],["Ak Süt","White Milk",""],["Jer Ene","Mother Earth",""],["Tün Ötöt","The Night Passes",""]],
    "Karakush|Ak Börü": [["Ak Börü","White Wolf","3:15"],["Kekilik","Partridge","3:42"],["Ilbirs","Snow Leopard","2:19"],["Uchuu (2021 version)","Flight","3:11"],["Kök Tülkü","Blue Fox","2:04"],["Ak Börü (instrumental)","","3:16"]],
    "4Muuz|Zhylky Love": [["Shyñgyr-Shyñgyr","","2:59"],["Muuzdu Kötör!","","3:43"],["Zhylky Love","","3:27"],["Trot!","","3:04"],["4Muuz","","2:22"],["Boorsok Girl","","2:37"],["Kaynene","","2:46"],["Ulak Party","","3:01"],["Okudu","","2:15"],["Shyñgyr-Shyñgyr (Toi Remix)","","3:27",1],["Muuzdu Kötör! (Rock Remix)","","3:41",1]],
    "4Muuz|Toi Paket": [["Chachyla","",""],["Tamada","",""],["Konvert","The Envelope",""],["Videooperator","",""],["Komuz Disco","",""],["Arkar","Argali",""],["Marshrutka","",""],["Toiuña Chakyrdyñ","You Invited Me to Your Wedding",""],["Aksakaldar Bii","The Elders Dance",""],["Mandarin","","",1]],
    "Eski Ün|Kara Kün": [["Jashoo Tüshü","Dream of Living",""],["Kara Kün","Black Day",""],["Chaykhana","Teahouse",""],["Jalgyz Jol","Lonely Road",""],["Ezan, Koñguroo","Call and Bell",""],["Keñsuu","",""],["Kaityp Kelebiz","We Will Return",""],["Dream of Living","English version","",1]],
    "Kök Bel|Talas Sunrise": [["Talas Sunrise","",""],["Talas Üchün Chap","",""],["Kök-Bel Ashuusu","",""],["Jesir Aty","",""],["Peydey","",""],["Bir, Eki, Üch","",""],["Ak Boz At","",""],["Talaadagy Jyldyz","",""],["Suu Kezegi","",""]],
    "Karakush|Uya": [["Uya","The Nest",""],["Ak Börü","White Wolf",""],["Jeyren","Gazelle",""],["Childe","Dog Days",""],["Ilbirs","Snow Leopard",""],["Kekilik","Partridge",""],["Ekranda","On the Screen",""],["Chuseok","",""],["Kök Tülkü","Blue Fox",""],["Uchuu (2021 version)","Flight",""]],
    "Altynai Torobek kyzy|Altynai": [["Birinchi Kün","First Day",""],["Menin Kezegim","My Turn",""],["Tepedegi Shaar","The City on the Hill",""],["Eje","Miss",""],["Birinchi Katar","Front Row",""],["Tyt","Mulberry",""],["Telefonuñdu Koy","Put Your Phone Down",""],["Kalpak","The Hat",""],["Akyryn","Quietly",""]],
    "Altynai Torobek kyzy|Ekööbüz": [["Ekööbüz","The Two of Us",""],["Koluñdu Ber","Give Me Your Hand",""],["Ayva","Quince",""],["Dagy Besh Münöt","Five More Minutes",""],["Syr","Secret",""],["Jakshy Bol","Be Well",""],["Kara Jygach","The Elm Row",""],["Karyganda","When We're Old",""]],
    "Altynai Torobek kyzy|Jaz Kelet": [["Jaz Kelet","Spring Is Coming",""],["Kyzgaldak","Wild Tulip",""],["Kol Chatyr","Umbrella",""],["Taraza","The Scale",""],["Tazalyk","Spring Cleaning",""],["Gül Murabba","Rose Jam",""],["Velosiped","Bicycle",""],["Süyünchü","Good News",""],["Terezeni Ach","Open the Window",""]],
    "Altynai Torobek kyzy|Jymjyrt": [["Jymjyrt","Hush",""],["Terezeden","From the Window",""],["Jyiyrma Besh","Twenty-Five",""],["Suu Ene","Godmother",""],["Bir Kishilik","For One",""],["Üch Yr","Three Songs",""],["Kuduk","The Well",""],["Men Ushundaymyn","This Is How I Am",""],["Akyryn (2026)","Quietly",""]],
    "Taka|Mercer's": [["Mercer's","",""],["Taka","Horseshoe",""],["Kertik","The Notch",""],["Tünkü Smena","Night Shift",""],["Kochkor","The Ram",""],["Ak Köynök","The White Dress",""],["Loteri","The Lottery",""],["Yuhanna Jangagy","",""],["Toi Two-Step","",""],["On Jeti Jyl","Seventeen Years",""],["Ride for Talas","",""]],
    "Sonny Mambet|Sonny: Twenty Years": [["Gate Café","",""],["Kyzyl Ötük","Red Boots",""],["Call Me Sonny","",""],["Kim Surady","Requested By",""],["Jeerde","The Chestnut",""],["Talas, Tennessee","",""],["Jayloo Waltz","",""],["Fourth of July","",""],["Ak Köynök","The White Dress",""],["Kok-Bel Ashuusu","",""],["Two Flags","",""],["Kyz Uzatuu","Giving Away a Daughter",""],["English Lesson","",""],["Music Row","",""],["Home","",""],["Bir Tuu","One Flag",""]],
    "Ürkör|Aylanma": [["Shakek","The Ring",""],["Kara Aylanma","",""],["Tetiri","Counter-Clockwise",""],["Törtünchü","The Fourth",""],["Bilek","The Wrist",""],["Taman","The Sole",""],["Jeti","Seven",""],["Üzüldü","It Broke",""]],
    "Ivan Kho|Kho": [["Ogni Kobozeva","Lights of Kobozev",""],["Devushka s elevatora","The Girl from the Grain Elevator",""],["Talas Valsy","Talas Waltz",""],["Kerbez","Graceful",""],["Zdravstvuy, stroyka","Hello, Building Site",""],["Komuzchu Bala","The Komuz Boy",""],["Pervyi sneg","First Snow",""],["Pis'mo iz armii","A Letter from the Army",""],["Jailoodo","On the Summer Pasture",""],["Vokzal'nye chasy","The Station Clock",""],["Ak Altyn","White Gold",""],["Gorod na Chu","City on the Chu",""],["Jüzüm Terimi","The Grape Harvest",""],["Akyrky Koñguroo","The Last Bell",""],["Ne speshi, pochtal'on","Don't Hurry, Postman",""],["Chaban","The Shepherd",""],["Filarmoniyanyn Aldynda","In Front of the Philharmonic",""],["Tantsploshchadka","The Dance Floor",""],["Ene Tilim","My Mother Tongue",""],["Moskva–Talas","",""],["Suusamyr","",""],["Dva goda","Two Years",""],["Lift ne rabotaet","The Lift Is Broken",""],["Shofyor","The Driver",""],["Risovoe pole","The Rice Field",""],["Toi Bashtaldy","The Feast Has Begun",""],["Bulak","The Spring",""],["Posledniy avtobus","The Last Bus",""],["Körüshkönchö","Until We Meet",""],["Ne zovi","Don't Call",""],["Odin","Alone",""],["Kobozev, Kobozev","",""],["Ata Jurt","Fatherland",""],["Arirang","",""],["Jañy Kün","New Day",""],["Staryi mikrofon","The Old Microphone",""],["Kerbez (farewell concert)","",""],["Akyrky Koñguroo (farewell concert)","",""],["Spasibo","Thank You",""],["Ogni Kobozeva (farewell concert)","",""]],
    "Gulzada Joldosh kyzy|Ak Tilek": [["Ak Tilek","Good Wishes",""],["Dastorkon","The Table",""],["Irad Kyzdary","Daughters of Irad",""],["Balaty","The Fir Tree",""],["On Eki","Twelve",""],["Saat Jürüp Jatat","The Clock Is Running",""],["Jalgyz Ün","One Voice",""],["Kaira Kel","Come Again",""],["Alysta","Far Apart",""],["Salamatchylyk","Good Health",""],["Toguzdun chömüchü","The Nine O'Clock Ladle",""],["Jüz Jash","A Hundred Years",""],["Tynchtyk","Calm",""],["Nebereler","Grandchildren",""],["Sahna","The Stage",""]],
    "Cathedral Choir of St. Janyl, Iyık Janyl|'Onitha": [["Lakhu Mara","To You, Lord",""],["'Onitha d-Ramsha","Antiphon of the evening",""],["'Onitha d-Basaliqe","Royal antiphon",""],["Qaddisha Alaha","Holy God",""],["Toguzda","At Nine",""],["'Onitha d-Sahde","Antiphon of the martyrs",""],["'Onitha d-Mart Janyl","Antiphon of St. Janyl",""],["'Onitha d-Mar Nahrai","Antiphon of St. Nahrai",""],["'Onitha d-Lelya","Antiphon of the night",""],["'Onitha d-Qanke","Antiphon of the sanctuary",""],["'Onitha d-Raze","Antiphon of the Mysteries",""],["'Onitha d-Sapra","Antiphon of the morning",""]],
    "Marta Adilet kyzy|Koshoktor": [["Atake","Father",""],["Kyz Uzatuu","The Bride's Farewell",""],["Korgon Koshogu","Lament for the Forts",""],["Koychu Abdisho","Abdisho the Shepherd",""],["Jesirdin Koshogu","The Widow's Lament",""],["Ee Jok At","The Riderless Horse",""],["Janyl Enege","To Mother Janyl",""],["Agama","To My Brother",""],["Achytky","The Leaven",""],["Koshokchunun Koshogu","The Lament-Singer's Lament",""]],
    "Various performers|Voices of the Talas Alatau": [["Horse-driving song (ırda)","Suusamyr, 1962",""],["Rider's song before the long race","Suusamyr, 1968",""],["Horseback song, woman's version","Keñ-Suu valley, 1986",""],["Calls and whistles to sheep and dogs","Keñ-Suu valley, 1966",""],["Night calls at lambing","Western Karakol valley, 1978",""],["Mare-milking song","Chatkal, 1964",""],["Janyl Baatyr: the birth of Janyl","Kara-Buura, 1964",""],["Janyl Baatyr: the crossing of the river","Kara-Buura, 1969",""],["Janyl Baatyr: Janyl's farewell","Talas valley, 1980",""],["Komuz tune \"Kerbez\"","Talas valley, 1963",""],["Komuz tune \"Kekilik\"","Chatkal, 1972",""],["Kyl-kyak tune \"Too Suusu\"","Western Karakol valley, 1966",""],["Cradle song","Talas valley, 1967",""],["Children's counting-out rhyme","Toguz-Bulak, 1970",""],["Bride's farewell lament","Kara-Buura, 1973",""],["Lament for a husband","Chatkal, 1965",""],["Lament","Cholpon Kasym kyzy, Suusamyr, 1983",""],["An elder's blessing","Chatkal, 1984",""],["Felt-rolling song","Suusamyr, 1974",""],["Threshing song","Talas valley, 1975",""],["Wedding ring dance: big drum and shawm","Talas valley, 1982",""],["Work song, three voices","Chatkal, 1971",""],["Song of longing with kyl-kyak","Bürküt-Uya, 1977",""],["Komuz tune \"Köch\"","Suusamyr, 1989",""]],
    "Kök Bel|Darbaza": [["Darbaza","The Gate",""],["Torgoy","The Crested Lark",""],["Eerchi","The Saddler",""],["Rotator","",""],["Randy","",""],["Kaida Jürdüñ?","Where Have You Been?",""],["Jylkychynyn Yry","The Horse-Herder's Song",""],["Kertikter","Notches",""],["Chöp Chabyk","Haymaking",""],["Kenje","The Youngest Son",""]],
    "Kök Bel|Eki Kysh": [["Eki Kysh","Two Winters",""],["Kyrk Kishi","Forty People",""],["UAZ","",""],["Chatyrdagy Kurut","Kurut on the Roof",""],["Korukchu","The Range Warden",""],["Bal Aary","The Honeybee",""],["New Faces","",""],["Tursun Aba","Old Man Tursun",""],["Bata","The Blessing",""]],
    "Kara Jel|Sem Nochei": [["Ponedelnik","Monday",""],["Vtornik","Tuesday",""],["Sreda","Wednesday",""],["Chetverg","Thursday",""],["Pyatnitsa","Friday",""],["Subbota","Saturday",""],["Voskresenye","Sunday",""]],
    "Umay-9|Buu": [["Buu","Steam",""],["Kysym","Pressure",""],["Tamchy","A Drop",""],["Dat","Rust",""],["Dem","Breath",""],["Toguz","Nine",""]],
    "Begai|Aynek": [["Aynek","Glass",""],["Translation","",""],["Greenhouse","",""],["Synyk","The Shard",""],["Subtitles","",""]],
    "Tumoro-Tumoro|Pass Day": [["Okey-Dok","",""],["Pass Day","",""],["Money Jok","",""],["Mister, Cigarette Bar?","",""],["Tumoro-Tumoro","",""],["Radio Night","",""],["Cardboard","",""],["You Tomorrow Me Come","",""]],
    "The Kapar Family|Chatkaldan": [["Chatkaldan","From Chatkal",""],["Üch Ün","Three Voices",""],["Jogorku Jailoo","The High Pasture",""],["Koichu","The Shepherd",""],["Muzdak Suuda","In the Cold Water",""],["Mattaydyn Küüsü","Mattay's Tune",""],["Konok","The Guest",""],["Körüshkönchö","Until We Meet",""]],
    "Promzona|Tsekh No. 4": [["Prokhodnaya","The Gatehouse",""],["Tsekh No. 4","Workshop No. 4",""],["Obed","Lunch Break",""],["Doska Pochyota","The Board of Honour",""],["Talony","Coupons",""],["Stengazeta","The Wall Newspaper",""],["Kobozev–Leningrad","",""],["Subbotnik","",""]],
    "Toktobolot Mamyt uulu|Eki Miñ Toi": [["Toi Bashtaldy","The Feast Has Begun",""],["Kelin Keldi","The Bride Has Come",""],["Avtobekette","At the Bus Station",""],["Kuda, Kudagy","",""],["Jeñe","Sister-in-Law",""],["Kyrk Jash","Forty Years Old",""],["Jañy Üy","The New House",""],["Kara-Buura","",""],["Sintezator","The Synthesizer",""],["Dagy Bir Jolu","One More Time",""]]
  },
  /* releases shown in parts: "artist|release" -> [[first track number, subtitle], ...]; the page puts a "Part n" heading before that track */
  parts: {
    "Ivan Kho|Kho": [[1,"1972–1976"],[11,"1976–1980"],[21,"1981–1987"],[31,"1988–1993"]],
    "Various performers|Voices of the Talas Alatau": [[1,"On horseback"],[7,"The epic and the komuz"],[13,"The house, from cradle to grave"],[19,"Work and feast"]]
  },
  /* singles that are also on an album: the catalogue lists only the album, and the album page marks the track
     with the single's own release date. "artist|single": "album" */
  onAlbum: {
    "Altynai Torobek kyzy|Ekööbüz": "Ekööbüz",
    "Karakush|Jeyren": "Uya", "Karakush|Ekranda": "Uya", "Karakush|Uchuu": "Ak Börü",
    "Eski Ün|Dream of Living": "Kara Kün", "Gulzada Joldosh kyzy|Toguzdun chömüchü": "Ak Tilek",
    "4Muuz|Shyñgyr-Shyñgyr": "Zhylky Love", "4Muuz|Muuzdu Kötör!": "Zhylky Love",
    "4Muuz|Arkar": "Toi Paket", "4Muuz|Marshrutka": "Toi Paket", "4Muuz|Mandarin": "Toi Paket", "4Muuz|Komuz Disco": "Toi Paket"
  },
  /* 20-second listening previews: "artist|release" -> folder in previews/, one clip per track (01.mp3, 02.mp3, ...) */
  previews: { "tüntolk|Jolchu": "jolchu", "tüntolk|Zvezda Irad": "zvezda-irad", "tüntolk|Kara Suu": "kara-suu",
    "Karakush|Ak Börü": "ak-boru", "4Muuz|Zhylky Love": "zhylky-love" },
  covers: ["jolchu","zvezda-irad","kara-suu","umay","ak-boru","zhylky-love","kara-kun","white-stallion-in-fog","talas-sunrise","ak-tilek","altynai","aylanma","darbaza","eki-kysh","ekoobuz","kho","koshoktor","mercer-s","onitha","sonny-twenty-years","voices-of-the-talas-alatau","toi-paket","uya","jaz-kelet","jymjyrt","sem-nochei","buu","aynek","pass-day","chatkaldan","tsekh-no-4","eki-min-toi","biyikte"],

  platforms: ["Spotify", "Apple Music", "YouTube Music", "Yandex Music"],

  /* news: newest first. date is YYYY, YYYY-MM or YYYY-MM-DD; text in i18n "news" by key; rel = "artist|title" of a release, else href */
  news: [
    { date: "2026-11", key: "nwTuntolkNov", href: "#/live" },
    { date: "2026-09-18", key: "nwJymjyrt", rel: "Altynai Torobek kyzy|Jymjyrt" },
    { date: "2026-08", key: "nwOkna", href: "#/catalogue" },
    { date: "2026-06", key: "nwMercers", rel: "Taka|Mercer's" },
    { date: "2026-04", key: "nwToiPaket", rel: "4Muuz|Toi Paket" },
    { date: "2026", key: "nwDala", href: "#/catalogue" },
    { date: "2025-12", key: "nwAwards", href: "#/catalogue" },
    { date: "2025-05", key: "nwAylanma", rel: "Ürkör|Aylanma" },
    { date: "2025", key: "nwTunduk", href: "#/catalogue" },
    { date: "2025", key: "nwTulparPay", href: "#/about" }
  ],

  /* Credits on album pages: "artist|release" -> [[role, value], ...]. Roles are keys of credits.roles in i18n.js; a value starting with "@" is a key of credits.txt. Only what is on record; releases without an entry show no block. */
  credits: {
    "tüntolk|Jolchu": [["voice","Mira Temirova"],["synths","Askar Daniyarov, Mira Temirova"],["producer","Askar Daniyarov"],["recorded","@boiler14"],["finished","@dalaYerlan"]],
    "tüntolk|Zvezda Irad": [["voice","Mira Temirova"],["synths","Askar Daniyarov, Mira Temirova"],["producer","Askar Daniyarov"],["recorded","@boiler14"],["finished","@dalaYerlan"]],
    "tüntolk|Kara Suu": [["voice","Mira Temirova"],["synths","Askar Daniyarov, Mira Temirova"],["producer","Askar Daniyarov, Yerlan Abenov"],["recorded","@dalaBoiler"]],
    "tüntolk|White Stallion in Fog": [["voice","Mira Temirova"],["synths","Askar Daniyarov, Mira Temirova"],["producer","Askar Daniyarov"],["recorded","@talasfilm"]],
    "tüntolk|Umay": [["voice","Mira Temirova"],["synths","Askar Daniyarov, Mira Temirova"],["with","Eski Ün"],["producer","Askar Daniyarov"],["recorded","@talasfilm"]],
    "Karakush|Ak Börü": [["vocals","Aruuke Temir kyzy, Meerim Sultan kyzy, Kamila Nurlan"],["rap","Saltanat Abdrakhmanova, Kamila Nurlan"],["producer","Erlan “Kök” Sydykov"],["coproducer","@danaTracks"],["recorded","@kokAy"]],
    "Karakush|Uya": [["vocals","Aruuke Temir kyzy, Meerim Sultan kyzy, Kamila Nurlan"],["rap","Saltanat Abdrakhmanova, Kamila Nurlan"],["producer","Erlan “Kök” Sydykov"],["coproducer","Dana Pak"]],
    "4Muuz|Zhylky Love": [["vocals","Nurbek Asanov, Ermek Toktosun uulu, Aibek Ismailov, Timur Bakyt uulu"],["guitar","Rysbek Abdrai uulu"],["producer","Marat Joldoshev"],["recorded","@jyldyz"]],
    "4Muuz|Toi Paket": [["vocals","Nurbek Asanov, Ermek Toktosun uulu, Aibek Ismailov, Timur Bakyt uulu"],["with","@bekbolot"],["producer","Marat Joldoshev"]],
    "Eski Ün|Kara Kün": [["vocals","Gulmira Asanova"],["komuz","Aibek Choro"],["choor","Nurlan Abdykadyrov"],["frame","Saltanat Ismailova"],["producer","Ruslan Ten"],["recorded","@teahouse"]],
    "Kök Bel|Talas Sunrise": [["vocals","Bakyt Sooronbaev, Dale Mercer"],["guitar","Bakyt Sooronbaev"],["banjo","Talant Asan"],["fiddle","Dale Mercer"],["komuz","Erkin Mamyrov"],["kylkyak","Erkin Mamyrov"],["producer","Joldoshbek Kasymbekov"],["recorded","@radio3"],["transfer","@masterTape"]],
    "Kök Bel|Darbaza": [["vocals","Bakyt Sooronbaev"],["guitar","Bakyt Sooronbaev"],["banjo","Talant Asan"],["komuz","Erkin Mamyrov"],["kylkyak","Erkin Mamyrov"]],
    "Kök Bel|Eki Kysh": [["vocals","Bakyt Sooronbaev"],["guitar","Bakyt Sooronbaev"],["banjo","Talant Asan"],["komuz","Erkin Mamyrov"],["kylkyak","Erkin Mamyrov"]],
    "Gulzada Joldosh kyzy|Ak Tilek": [["vocals","Gulzada Joldosh kyzy"],["guitar","Rysbek Abdrai uulu"],["compiled","Köch Audio"],["source","@galaSingles"]],
    "Marta Adilet kyzy|Koshoktor": [["vocals","Marta Adilet kyzy"],["recorded","@bishkek2017"]],
    "Taka|Mercer's": [["vocals","Syrgak Esen uulu"]],
    "Ürkör|Aylanma": [["performer","Asylbek Saparbek uulu"],["machines","@drumMachine"]],
    "Sonny Mambet|Sonny: Twenty Years": [["vocals","Sanjar Mambet uulu (Sonny Mambet)"],["bandleader","Rysbek Abdrai uulu"],["compiled","Köch Audio"]],
    "Ivan Kho|Kho": [["vocals","Ivan Kho"],["with","@viaKerbez"],["source","@radioTapes"],["compiled","Köch Audio"]],
    "Various performers|Voices of the Talas Alatau": [["field","Aigul Choro kyzy"],["source","@archives"]],
    "Toktobolot Mamyt uulu|Eki Miñ Toi": [["vocals","Toktobolot Mamyt uulu"],["keyboards","Toktobolot Mamyt uulu"],["source","@busCassettes"],["compiled","Köch Audio"]],
    "Begai|Aynek": [["vocals","Begaiym Nurjigit kyzy"]],
    "Kara Jel|Sem Nochei": [["vocals","Valery Lysenko"],["synths","Vitaly Kogai"]],
    "Umay-9|Buu": [["vocals","Gulzat Tilebaldy kyzy"],["machines","Ruslan Ten"],["tapes","Zarina Yusupova"],["recorded","@house9"]],
    "Tumoro-Tumoro|Pass Day": [["rap","Azat Kamchy, Ruslan Saparbek uulu, Pyotr Cha"]],
    "The Kapar Family|Chatkaldan": [["vocals","Orozbek Kapar uulu, his two daughters and his son"],["guitar","Mattay Orozbek uulu"]],
    "Promzona|Tsekh No. 4": [["vocals","Kirill Golubev"],["guitar","Leonid Popov"]]
  },

  /* artist pages (#/artist/<slug>): name as in releases and gigs; photo = artists/<slug>.jpg (cropped from a cover
     that shows the act), otherwise the köch tile; also = other spellings used in gigs. Text in i18n.js `art`. */
  artists: [
    { name: "tüntolk", slug: "tuntolk" },
    { name: "Karakush", slug: "karakush", photo: true },
    { name: "4Muuz", slug: "4muuz", photo: true },
    { name: "Altynai Torobek kyzy", slug: "altynai-torobek-kyzy", photo: true },
    { name: "Gulzada Joldosh kyzy", slug: "gulzada-joldosh-kyzy", photo: true },
    { name: "Eski Ün", slug: "eski-un" },
    { name: "Kök Bel", slug: "kok-bel", photo: true },
    { name: "Taka", slug: "taka" },
    { name: "Ürkör", slug: "urkor" },
    { name: "Lena Mirnaya", slug: "lena-mirnaya" },
    { name: "Sonny Mambet", slug: "sonny-mambet", photo: true },
    { name: "Ivan Kho", slug: "ivan-kho", photo: true },
    { name: "Toktobolot Mamyt uulu", slug: "toktobolot-mamyt-uulu", photo: true },
    { name: "Marta Adilet kyzy", slug: "marta-adilet-kyzy", photo: true },
    { name: "Cathedral Choir of St. Janyl, Iyık Janyl", slug: "cathedral-choir-of-st-janyl", also: ["Cathedral Choir of St. Janyl"] },
    { name: "Begai", slug: "begai", photo: true },
    { name: "Kara Jel", slug: "kara-jel" },
    { name: "Umay-9", slug: "umay-9" },
    { name: "Tumoro-Tumoro", slug: "tumoro-tumoro", photo: true },
    { name: "The Kapar Family", slug: "the-kapar-family", photo: true },
    { name: "Promzona", slug: "promzona" }
  ],

  releases: [
    { artist: "Karakush", title: "Biyikte", year: 2027, due: "2027-spring", announce: "2027-02-01", type: "album", label: "Kök Ay Media", p: 2027, noteKey: "nBiyikte" },
    { artist: "Altynai Torobek kyzy", title: "Jymjyrt", year: 2026, date: "2026-09-18", type: "album", label: "Star Road Music", p: 2026, noteKey: "nJymjyrt" },
    { artist: "Lena Mirnaya", title: "Okna", year: 2026, date: "2026-08-01", type: "single", label: "Lena Mirnaya", p: 2026, noteKey: "nOkna" },
    { artist: "Taka", title: "Mercer's", year: 2026, date: "2026-06-01", type: "album", label: "Taka", p: 2026, noteKey: "nMercers" },
    { artist: "Ürkör", title: "Aylanma", year: 2025, date: "2025-05-09", type: "album", label: "Ürkör", p: 2025, noteKey: "nAylanma" },
    { artist: "Gulzada Joldosh kyzy", title: "Ak Tilek", year: 2016, date: "2016-12-16", type: "compilation", label: "Gulzada Joldosh kyzy", p: 2016, noteKey: "nAkTilek" },
    { artist: "Altynai Torobek kyzy", title: "Jaz Kelet", year: 2023, date: "2023-03-25", type: "album", label: "Star Road Music", p: 2023, noteKey: "nJazKelet" },
    { artist: "Karakush", title: "Uya", year: 2021, date: "2021-09-24", type: "album", label: "Kök Ay Media", p: 2021, noteKey: "nUya" },
    { artist: "Marta Adilet kyzy", title: "Koshoktor", year: 2017, date: "2017-07-21", type: "album", label: "Marta Adilet kyzy", p: 2017, noteKey: "nKoshoktor" },
    { artist: "Altynai Torobek kyzy", title: "Ekööbüz", year: 2021, date: "2021-10-08", type: "album", label: "Star Road Music", p: 2021, noteKey: "nEkoobuz" },
    { artist: "Altynai Torobek kyzy", title: "Ekööbüz", year: 2021, date: "2021-06-04", type: "single", label: "Star Road Music", p: 2021 },
    { artist: "Altynai Torobek kyzy", title: "Altynai", year: 2020, date: "2020-02-21", type: "album", label: "Star Road Music", p: 2020, noteKey: "nAltynai" },
    { artist: "Ivan Kho", title: "Kho", year: 2019, date: "2019-10-25", type: "compilation", label: "IradOne", p: 2019, noteKey: "nKho" },
    { artist: "Sonny Mambet", title: "Sonny: Twenty Years", year: 2018, date: "2018-07-06", type: "compilation", label: "Sonny Mambet", p: 2018, noteKey: "nSonny" },
    { artist: "tüntolk", title: "Umay", year: 2022, date: "2022-10-07", type: "album", label: "Tündük Records", p: 2022, noteKey: "nUmay" },
    { artist: "Karakush", title: "Passenger Seat", year: 2023, date: "2023-07-14", type: "single", label: "Kök Ay Media", p: 2023, noteKey: "nPassenger" },
    { artist: "4Muuz", title: "Toi Paket", year: 2026, date: "2026-04-17", type: "album", label: "Star Road Music", p: 2026, noteKey: "nToiPaket" },
    { artist: "4Muuz", title: "Komuz Disco", year: 2025, date: "2025-03-07", type: "single", label: "Star Road Music", p: 2025 },
    { artist: "4Muuz", title: "Mandarin", year: 2024, date: "2024-12-28", type: "single", label: "Star Road Music", p: 2024 },
    { artist: "4Muuz", title: "Marshrutka", year: 2023, date: "2023-06-09", type: "single", label: "Star Road Music", p: 2023 },
    { artist: "4Muuz", title: "Arkar", year: 2022, date: "2022-10-01", type: "single", label: "Star Road Music", p: 2022 },
    { artist: "4Muuz", title: "Zhylky Love", year: 2022, date: "2022-05-01", type: "album", label: "Star Road Music", p: 2022, noteKey: "nZhylky" },
    { artist: "Various performers", title: "Voices of the Talas Alatau", year: 2024, date: "2024-10-11", type: "compilation", label: "State Archives of Irad", p: 2024, noteKey: "nVoices" },
    { artist: "Karakush", title: "Betkap", year: 2022, date: "2022-06-24", type: "single", label: "Kök Ay Media", p: 2022, noteKey: "nBetkap" },
    { artist: "Eski Ün", title: "Kara Kün", year: 2019, date: "2019-04-26", type: "album", label: "Tündük Records", p: 2019, noteKey: "nKaraKun" },
    { artist: "Eski Ün", title: "Dream of Living", year: 2019, date: "2019-03-01", type: "single", label: "Tündük Records", p: 2019 },
    { artist: "Gulzada Joldosh kyzy", title: "Toguzdun chömüchü", year: 2021, date: "2021-03-17", type: "single", label: "Gulzada Joldosh kyzy", p: 2021 },
    { artist: "Karakush", title: "Ak Börü", year: 2021, date: "2021-02-19", type: "ep", label: "Kök Ay Media", p: 2021, noteKey: "nAkBoru" },
    { artist: "Cathedral Choir of St. Janyl, Iyık Janyl", title: "'Onitha", year: 2020, date: "2020-05-29", type: "album", label: "Church of St. Janyl", p: 2020, noteKey: "nOnitha" },
    { artist: "Kök Bel", title: "Talas Sunrise", year: 1995, type: "album", label: "Ak Jol Records", p: 1995, noteKey: "nSunrise" },
    { artist: "Kök Bel", title: "Darbaza", year: 1998, type: "album", label: "Ak Jol Records", p: 1998, noteKey: "nDarbaza" },
    { artist: "Kök Bel", title: "Eki Kysh", year: 2002, date: "2002-05-17", type: "album", label: "Ak Jol Records", p: 2002, noteKey: "nEkiKysh" },
    { artist: "Karakush", title: "Ekranda", year: 2020, date: "2020-05-15", type: "single", label: "Kök Ay Media", p: 2020, noteKey: "nOutsideKorea" },
    { artist: "Karakush", title: "Jeyren", year: 2019, date: "2019-06-14", type: "single", label: "Kök Ay Media", p: 2019, noteKey: "nOutsideKorea" },
    { artist: "4Muuz", title: "Muuzdu Kötör!", year: 2018, date: "2018-03-01", type: "single", label: "Star Road Music", p: 2018 },
    { artist: "Karakush", title: "Uchuu", year: 2018, date: "2018-10-12", type: "single", label: "Kök Ay Media", p: 2018, noteKey: "nOutsideKorea" },
    { artist: "4Muuz", title: "Shyñgyr-Shyñgyr", year: 2017, date: "2017-10-01", type: "single", label: "Star Road Music", p: 2017 },
    { artist: "Toktobolot Mamyt uulu", title: "Eki Miñ Toi", year: 2022, date: "2022-09-02", type: "compilation", label: "Toktobolot Mamyt uulu", p: 2022, noteKey: "nEkiMinToi" },
    { artist: "Begai", title: "Aynek", year: 2024, date: "2024-03-22", type: "ep", label: "Begai", p: 2024, noteKey: "nAynek" },
    { artist: "Kara Jel", title: "Sem Nochei", year: 2003, date: "2003-02-14", type: "album", label: "Kara Jel", p: 2003, noteKey: "nSemNochei" },
    { artist: "Umay-9", title: "Buu", year: 2001, date: "2001-10-12", type: "album", label: "Umay-9", p: 2001, noteKey: "nBuu" },
    { artist: "Tumoro-Tumoro", title: "Pass Day", year: 1999, type: "album", label: "Tumoro-Tumoro", p: 1999, noteKey: "nPassDay" },
    { artist: "The Kapar Family", title: "Chatkaldan", year: 1996, type: "album", label: "Ak Jol Records", p: 1996, noteKey: "nChatkaldan" },
    { artist: "Promzona", title: "Tsekh No. 4", year: 1989, type: "album", label: "Promzona", p: 1989, noteKey: "nTsekh" },
    { artist: "tüntolk", title: "Kara Suu", year: 2004, date: "2004-11-12", type: "album", label: "Dala Sound", p: 2004, noteKey: "nKaraSuu" },
    { artist: "tüntolk", title: "Zvezda Irad", year: 2002, date: "2002-04-13", type: "ep", label: "Dala Sound", p: 2002, noteKey: "nZvezda" },
    { artist: "tüntolk", title: "White Stallion in Fog", alt: "Tumandagy Ak At", year: 2017, date: "2017-03-21", type: "album", label: "Tündük Records", p: 2017, noteKey: "nWhite" },
    { artist: "tüntolk", title: "Jolchu", year: 2000, date: "2000-11-17", type: "album", label: "Tündük Records", p: 2017, noteKey: "nJolchu",
      links: {
        "Spotify": "https://open.spotify.com/album/3ZQN63iqNCCuUrhaNGlqCb",
        "Apple Music": "https://music.apple.com/album/jolchu/6824429029",
        "YouTube Music": "https://music.youtube.com/playlist?list=OLAK5uy_kbLAnf8vnG9tpkNaY4DgXdTjvgmUVbPQ8"
      } }
  ],

  gigs: [
    /* ---- autumn 2026 ---- */
    { id: "eu-talas-1106", date: "2026-11-06", time: "19:00", artist: "Eski Ün", city: "talas", country: "irad", venue: "Chaikhana Bakyt, Bazar-i Kalan", kind: "home", status: "door", price: "150 som", tulpar: true },
    { id: "am-nurzhan-1114", date: "2026-11-14", time: "14:00", artist: "4Muuz", city: "nurzhan", country: "irad", venue: "Toikana Bereke, Navbahor", kind: "home", status: "door", price: "200 som", tulpar: true, noteKey: "gMatinee" },
    { id: "tt-almaty-1117", date: "2026-11-17", time: "20:00", artist: "tüntolk", city: "almaty", country: "kz", venue: "Zhylu Club", kind: "abroad", status: "onsale", price: "9,000 ₸", noteKey: "gJolchu26" },
    { id: "kb-talas-1120", date: "2026-11-20", time: "20:00", artist: "Kök Bel", city: "talas", country: "irad", venue: "Club Doran", kind: "home", status: "door", price: "300 som", tulpar: true },
    { id: "tt-moscow-1121", date: "2026-11-21", time: "22:00", artist: "tüntolk", city: "moscow", country: "ru", venue: "Teplotsentral (Kholodnaya Volna night)", kind: "abroad", status: "onsale", price: "2,200 ₽" },
    { id: "tt-berlin-1128", date: "2026-11-28", time: "22:00", artist: "tüntolk", city: "berlin", country: "de", venue: "Schwarzer Ofen, Neukölln (minimal synth night)", kind: "abroad", status: "onsale", price: "18 €" },
    { id: "eu-bishkek-1205", date: "2026-12-05", time: "19:00", artist: "Eski Ün", city: "bishkek", country: "kg", venue: "Ak Kuu teahouse", kind: "abroad", status: "onsale", price: "800 KGS" },
    { id: "tt-nurzhan-1212", date: "2026-12-12", time: "20:00", artist: "tüntolk", guest: "Eski Ün", city: "nurzhan", country: "irad", venue: "Kotelnaya, Dastgoh", kind: "home", status: "door", price: "250 som", tulpar: true, permit: "pending", noteKey: "gKotelnaya" },
    { id: "am-moscow-1227", date: "2026-12-27", time: "16:00", artist: "4Muuz", city: "moscow", country: "ru", venue: "Irad Fellow-Countrymen's Association New Year concert", kind: "abroad", status: "soon", noteKey: "gHallTba" },
    /* ---- winter 2027 ---- */
    { id: "ch-iyik-0109", date: "2027-01-09", time: "18:00", artist: "Cathedral Choir of St. Janyl", city: "iyik", country: "irad", venue: "Irad Palace of Art, concert hall", kind: "home", status: "door", price: "150 som", noteKey: "gOnitha" },
    { id: "kk-almaty-0206", date: "2027-02-06", time: "18:00", artist: "Karakush", city: "almaty", country: "kz", venue: "Sputnik Hall (Seollal concert)", kind: "abroad", status: "soon" },
    { id: "tt-bishkek-0320", date: "2027-03-20", time: "20:00", artist: "tüntolk", city: "bishkek", country: "kg", venue: "Kök Tash club", kind: "abroad", status: "soon", noteKey: "gStallion10" },
    /* ---- spring 2027 ---- */
    { id: "tt-talas-0410", date: "2027-04-10", time: "21:00", artist: "tüntolk", city: "talas", country: "irad", venue: "Talasfilm Studios, Stage 2", kind: "home", status: "door", price: "300 som", permit: "pending", noteKey: "gStage" },
    { id: "kk-talas-0411", date: "2027-04-11", time: "17:00", artist: "Karakush", city: "talas", country: "irad", venue: "Irad State Hippodrome, open-air stage", kind: "home", status: "door", price: "400 som" },
    { id: "kb-chicago-0417", date: "2027-04-17", time: "19:00", artist: "Kök Bel", city: "chicago", country: "us", venue: "Iradi American Association spring dance", kind: "abroad", status: "soon", price: "$25" },
    { id: "eu-berlin-0424", date: "2027-04-24", time: "20:00", artist: "Eski Ün", city: "berlin", country: "de", venue: "Kapelle am Ufer, Kreuzberg", kind: "abroad", status: "soon" },

    /* ---- past ---- */
    { id: "eu-nurzhan-1010", date: "2026-10-10", artist: "Eski Ün", city: "nurzhan", country: "irad", venue: "Kotelnaya, Dastgoh", kind: "home" },
    { id: "kb-talas-0919", date: "2026-09-19", artist: "Kök Bel", city: "talas", country: "irad", venue: "Club Doran", kind: "home" },
    { id: "eu-almaty-0606", date: "2026-06-06", artist: "Eski Ün", city: "almaty", country: "kz", venue: "Zhylu Club", kind: "abroad" },
    { id: "tt-almaty-0418", date: "2026-04-18", artist: "tüntolk", city: "almaty", country: "kz", venue: "Zhylu Club", kind: "abroad" },
    { id: "am-moscow-1228", date: "2025-12-28", artist: "4Muuz", city: "moscow", country: "ru", venue: "Irad Fellow-Countrymen's Association New Year concert", kind: "abroad" },
    { id: "tt-bishkek-251115", date: "2025-11-15", artist: "tüntolk", city: "bishkek", country: "kg", venue: "Kök Tash club", kind: "abroad" },
    { id: "kb-talas-250927", date: "2025-09-27", artist: "Kök Bel", city: "talas", country: "irad", venue: "Club Doran", kind: "home" },
    { id: "kb-chicago-250524", date: "2025-05-24", artist: "Kök Bel", city: "chicago", country: "us", venue: "Iradi American Association spring dance", kind: "abroad" },
    { id: "kk-almaty-250208", date: "2025-02-08", artist: "Karakush", city: "almaty", country: "kz", venue: "Sputnik Hall (Seollal concert)", kind: "abroad" },
    { id: "am-moscow-241228", date: "2024-12-28", artist: "4Muuz", city: "moscow", country: "ru", venue: "Irad Fellow-Countrymen's Association New Year concert", kind: "abroad" },
    { id: "eu-almaty-241109", date: "2024-11-09", artist: "Eski Ün", city: "almaty", country: "kz", venue: "Zhylu Club", kind: "abroad" },
    { id: "tt-berlin-240420", date: "2024-04-20", artist: "tüntolk", city: "berlin", country: "de", venue: "Kapelle am Ufer, Kreuzberg", kind: "abroad" },
    { id: "eu-bishkek-230916", date: "2023-09-16", artist: "Eski Ün", city: "bishkek", country: "kg", venue: "Ak Kuu teahouse", kind: "abroad" },
    { id: "am-nurzhan-230513", date: "2023-05-13", artist: "4Muuz", city: "nurzhan", country: "irad", venue: "Toikana Bereke, Navbahor", kind: "home" },
    { id: "tt-moscow-221203", date: "2022-12-03", artist: "tüntolk", city: "moscow", country: "ru", venue: "Teplotsentral", kind: "abroad" },
    { id: "tt-almaty-221119", date: "2022-11-19", artist: "tüntolk", city: "almaty", country: "kz", venue: "Zhylu Club", kind: "abroad" },
    { id: "tt-talas-221014", date: "2022-10-14", artist: "tüntolk", city: "talas", country: "irad", venue: "Club Doran", kind: "home" },
    { id: "ch-iyik-220604", date: "2022-06-04", artist: "Cathedral Choir of St. Janyl", city: "iyik", country: "irad", venue: "Irad Palace of Art, concert hall", kind: "home" },
    { id: "tt-berlin-190921", date: "2019-09-21", artist: "tüntolk", city: "berlin", country: "de", venue: "Schwarzer Ofen, Neukölln", kind: "abroad" },
    { id: "kb-chicago-190413", date: "2019-04-13", artist: "Kök Bel", city: "chicago", country: "us", venue: "Iradi American Association spring dance", kind: "abroad" },
    { id: "kb-talas-180519", date: "2018-05-19", artist: "Kök Bel", city: "talas", country: "irad", venue: "Club Doran", kind: "home" },
    { id: "tt-moscow-171014", date: "2017-10-14", artist: "tüntolk", city: "moscow", country: "ru", venue: "Teplotsentral", kind: "abroad" },
    { id: "tt-almaty-170408", date: "2017-04-08", artist: "tüntolk", city: "almaty", country: "kz", venue: "Zhylu Club", kind: "abroad" },
    { id: "tt-bishkek-170325", date: "2017-03-25", artist: "tüntolk", city: "bishkek", country: "kg", venue: "Kök Tash club", kind: "abroad" }
  ]
};

/* Forthcoming releases carry announce: "YYYY-MM-DD" and stay out of the data until that day (Bishkek time). */
(function () {
  var today = new Date(Date.now() + 6 * 3600e3).toISOString().slice(0, 10), K = window.KOCH;
  K.releases = K.releases.filter(function (r) { return !r.announce || r.announce <= today; });
})();
