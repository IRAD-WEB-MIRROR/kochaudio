/* Köch Audio site data.
   releases: the catalogue shown on the site (a selection; the full catalogue is on the platforms).
   gigs: concert dates. kind "abroad" = tickets through Sahna Bilet; kind "home" = ISEZ dates, at the door.
   Dates are local to the venue, YYYY-MM-DD; time is doors/start "HH:MM".
   Gigs whose date is before today move to "Past shows" automatically.
   city/country are keys translated in i18n.js (cities/countries blocks); venues are written as the venue writes them. */

window.KOCH = {
  email: "kochaudio.online",         /* contact addresses are <name>@<this> */
  releasesTotal: 400,


  /* Album pages (#/release/<slug>). Track lists and lengths as the platforms show them.
     Releases without a track list here show only their details and platform links.
     cover: covers/<slug>.jpg when we have the artwork. */
  tracks: {
    "tüntolk|Jolchu": [["Chöl Shamaly","Desert Wind","3:21"],["Kazan","The Cauldron","3:51"],["Umay","","2:31"],["Kökjal","Grey Mane","4:01"],["Jolchu","Wayfarer","3:17"],["Kara Burkut","Black Eagle","2:41"],["Morkhan, Karañgy Ee","Morkhan the Dark Lord","3:23"],["Tañ","Dawn (instrumental)","2:10"]],
    "tüntolk|Zvezda Irad": [["Jyldyzdardy Kes","Cut the Stars","6:12"],["Zvezda Irad","Star of Irad","4:48"],["Jorgo","Ambler","5:20"],["Tündük","Crown Ring","7:01"],["Jyldyzdardy Kes (Almaty Night Mix)","","8:30"]],
    "tüntolk|Kara Suu": [["Kara Suu","Black Water","4:08"],["Kökjal Kaitty","Grey Mane Has Returned","3:31"],["Temir Jol","Railway","3:37"],["Kotelnaya","Boiler Room","2:44"],["Muz","Ice","2:47"],["Kara Jel","Black Wind","2:16"],["Ak Kush","White Bird","2:47"],["Allo, Ene?","Hello, Mother?","3:16"],["Tañ Atkancha","Until Dawn","3:08"]],
    "tüntolk|White Stallion in Fog": [["Tumandagy Ak At","White Stallion in Fog","5:41"],["Üyüm, Jürögüm, Janım","My Home My Heart My Soul","4:03"],["Temir Torlor","Iron Nets","5:28"],["Moiynkum","","6:12"],["Kaitysh","Return","4:47"],["Altyn Kazyk","The Golden Stake","5:05"],["Jaña Talas","New Talas","3:56"],["Uktaba","Don't Sleep","4:34"],["Kara Jash","Black Tears","5:19"],["Ak Jol","White Road","6:50"]],
    "tüntolk|Umay": [["Umay Ene","Mother Umay","6:02"],["Beshik","Cradle","4:15"],["Kök Asman","Blue Sky","5:33"],["Burkut","Golden Eagle","4:48"],["Kızyl Jip","Red Thread","5:10"],["Ak Süt","White Milk","3:57"],["Jer Ene","Mother Earth","6:21"],["Tün Ötöt","The Night Passes","7:14"]],
    "Karakush|Ak Börü": [["Ak Börü","White Wolf","3:24"],["Kekilik","Partridge","3:12"],["Ilbirs","Snow Leopard","3:38"],["Uchuu (2021 version)","Flight","3:29"],["Kök Tülkü","Blue Fox","3:05"],["Ak Börü (instrumental)","","3:24"]],
    "4Muuz|Zhylky Love": [["Shyñgyr-Shyñgyr","","2:58"],["Muuzdu Kötör!","","3:11"],["Zhylky Love","","3:46"],["Trot!","","3:02"],["4Muuz","","2:49"],["Boorsok Girl","","3:15"],["Kaynene","","3:33"],["Ulak Party","","2:57"],["Okudu","","4:10"],["Shyñgyr-Shyñgyr (Toi Remix)","","4:21",1],["Muuzdu Kötör! (Rock Remix)","","3:52",1]],
    "4Muuz|Toi Paket": [["Chachyla","",""],["Tamada","",""],["Videooperator","",""],["Aksakaldar Bii","",""]],
    "Eski Ün|Kara Kün": [["Jashoo Tüshü","Dream of Living","5:46"],["Kara Kün","Black Day","6:30"],["Chaykhana","Teahouse","4:12"],["Jalgyz Jol","Lonely Road","5:05"],["Ezan, Koñguroo","Call and Bell","4:44"],["Keñsuu","","6:58"],["Kaityp Kelebiz","We Will Return","5:21"],["Dream of Living","English version","5:40",1]],
    "Kök Bel|Talas Sunrise": [["Talas Sunrise","","3:42"],["Talas Üchün Chap","","3:55"],["Kök-Bel Ashuusu","","4:26"],["Jesir Aty","","5:12"],["Peydey","","2:51"],["Bir, Eki, Üch","","3:37"],["Ak Boz At","","4:04"],["Talaadagy Jyldyz","","3:29"],["Suu Kezegi","","4:48"]]
  },
  /* singles that are also on an album: the catalogue lists only the album. "artist|single": "album" */
  onAlbum: {
    "Altynai Torobek kyzy|Ekööbüz": "Ekööbüz",
    "Karakush|Jeyren": "Uya", "Karakush|Ekranda": "Uya", "Karakush|Uchuu": "Ak Börü",
    "Eski Ün|Dream of Living": "Kara Kün",
    "4Muuz|Shyñgyr-Shyñgyr": "Zhylky Love", "4Muuz|Muuzdu Kötör!": "Zhylky Love"
  },
  covers: ["jolchu","zvezda-irad","kara-suu","umay","ak-boru","zhylky-love","kara-kun","white-stallion-in-fog","talas-sunrise"],

  platforms: ["Spotify", "Apple Music", "YouTube Music", "Yandex Music"],

  releases: [
    { artist: "Altynai Torobek kyzy", title: "Jymjyrt", year: 2026, date: "2026-09-18", type: "album", label: "Star Road Music", p: 2026 },
    { artist: "Lena Mirnaya", title: "Okna", year: 2026, date: "2026-08-01", type: "single", label: "Lena Mirnaya", p: 2026 },
    { artist: "Taka", title: "Mercer's", year: 2026, date: "2026-06-01", type: "album", label: "Taka", p: 2026, noteKey: "nMercers" },
    { artist: "Ürkör", title: "Aylanma", year: 2026, date: "2026-05-01", type: "album", label: "Ürkör", p: 2026 },
    { artist: "Gulzada Joldosh kyzy", title: "Ak Tilek", year: 2026, type: "compilation", label: "Gulzada Joldosh kyzy", p: 2026, noteKey: "nAkTilek" },
    { artist: "Altynai Torobek kyzy", title: "Jaz Kelet", year: 2023, type: "album", label: "Star Road Music", p: 2023 },
    { artist: "Karakush", title: "Uya", year: 2021, date: "2021-09-24", type: "album", label: "Kök Ay Media", p: 2021, noteKey: "nUya" },
    { artist: "Marta Adilet kyzy", title: "Koshoktor", year: 2021, type: "album", label: "Marta Adilet kyzy", p: 2021, noteKey: "nKoshoktor" },
    { artist: "Altynai Torobek kyzy", title: "Ekööbüz", year: 2021, type: "album", label: "Star Road Music", p: 2021, noteKey: "nEkoobuz" },
    { artist: "Altynai Torobek kyzy", title: "Ekööbüz", year: 2021, type: "single", label: "Star Road Music", p: 2021 },
    { artist: "Altynai Torobek kyzy", title: "Altynai", year: 2020, type: "album", label: "Star Road Music", p: 2020 },
    { artist: "Ivan Kho", title: "Kho", year: 2019, type: "compilation", label: "IradOne", p: 2019, noteKey: "nKho" },
    { artist: "Sonny Mambet", title: "Sonny: Twenty Years", year: 2018, type: "compilation", label: "Sonny Mambet", p: 2018, noteKey: "nSonny" },
    { artist: "tüntolk", title: "Umay", year: 2022, date: "2022-10-07", type: "album", label: "Tündük Records", p: 2022, noteKey: "nUmay" },
    { artist: "Karakush", title: "Passenger Seat", year: 2023, type: "single", label: "Kök Ay Media", p: 2023, noteKey: "nOutsideKorea" },
    { artist: "4Muuz", title: "Toi Paket", year: 2026, type: "ep", label: "Star Road Music", p: 2026 },
    { artist: "4Muuz", title: "Komuz Disco", year: 2025, type: "single", label: "Star Road Music", p: 2025 },
    { artist: "4Muuz", title: "Mandarin", year: 2024, type: "single", label: "Star Road Music", p: 2024 },
    { artist: "4Muuz", title: "Marshrutka", year: 2023, type: "single", label: "Star Road Music", p: 2023 },
    { artist: "4Muuz", title: "Arkar", year: 2022, date: "2022-10-01", type: "single", label: "Star Road Music", p: 2022 },
    { artist: "4Muuz", title: "Zhylky Love", year: 2022, date: "2022-05-01", type: "album", label: "Star Road Music", p: 2022, noteKey: "nZhylky" },
    { artist: "Various performers", title: "Voices of the Talas Alatau", year: 2022, type: "compilation", label: "State Archives of Irad", p: 2022, noteKey: "nVoices" },
    { artist: "Karakush", title: "Betkap", year: 2022, type: "single", label: "Kök Ay Media", p: 2022, noteKey: "nOutsideKorea" },
    { artist: "Eski Ün", title: "Kara Kün", year: 2021, date: "2021-04-30", type: "album", label: "Tündük Records", p: 2021, noteKey: "nKaraKun" },
    { artist: "Eski Ün", title: "Dream of Living", year: 2021, type: "single", label: "Tündük Records", p: 2021 },
    { artist: "Karakush", title: "Ak Börü", year: 2021, date: "2021-02-19", type: "ep", label: "Kök Ay Media", p: 2021, noteKey: "nOutsideKorea" },
    { artist: "Cathedral Choir of St. Janyl, Iyık Janyl", title: "'Onitha", year: 2020, type: "album", label: "Church of St. Janyl", p: 2020, noteKey: "nOnitha" },
    { artist: "Kök Bel", title: "Talas Sunrise", year: 1995, type: "album", label: "Ak Jol Records", p: 1995, noteKey: "nSunrise" },
    { artist: "Kök Bel", title: "Darbaza", year: 1998, type: "album", label: "Ak Jol Records", p: 1998 },
    { artist: "Kök Bel", title: "Eki Kysh", year: 2002, type: "album", label: "Ak Jol Records", p: 2002 },
    { artist: "Karakush", title: "Ekranda", year: 2020, type: "single", label: "Kök Ay Media", p: 2020, noteKey: "nOutsideKorea" },
    { artist: "Karakush", title: "Jeyren", year: 2019, type: "single", label: "Kök Ay Media", p: 2019, noteKey: "nOutsideKorea" },
    { artist: "4Muuz", title: "Muuzdu Kötör!", year: 2018, date: "2018-03-01", type: "single", label: "Star Road Music", p: 2018 },
    { artist: "Karakush", title: "Uchuu", year: 2018, type: "single", label: "Kök Ay Media", p: 2018, noteKey: "nOutsideKorea" },
    { artist: "4Muuz", title: "Shyñgyr-Shyñgyr", year: 2017, date: "2017-10-01", type: "single", label: "Star Road Music", p: 2017 },
    { artist: "tüntolk", title: "Kara Suu", year: 2004, type: "album", label: "Dala Sound", p: 2004 },
    { artist: "tüntolk", title: "Zvezda Irad", year: 2002, date: "2002-04-13", type: "ep", label: "Dala Sound", p: 2002 },
    { artist: "tüntolk", title: "White Stallion in Fog", alt: "Tumandagy Ak At", year: 2017, date: "2017-03-21", type: "album", label: "Tündük Records", p: 2017 },
    { artist: "tüntolk", title: "Jolchu", year: 2017, type: "album", label: "Tündük Records", p: 2017, noteKey: "nJolchu",
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
