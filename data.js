/* Köch Audio site data.
   releases: the catalogue shown on the site (a selection; the full catalogue is on the platforms).
   gigs: concert dates. kind "abroad" = tickets through Sahna Bilet; kind "home" = ISEZ dates, at the door.
   Dates are local to the venue, YYYY-MM-DD; time is doors/start "HH:MM".
   Gigs whose date is before today move to "Past shows" automatically.
   city/country are keys translated in i18n.js (cities/countries blocks); venues are written as the venue writes them. */

window.KOCH = {
  email: "kochaudio.online",         /* contact addresses are <name>@<this> */
  releasesTotal: 400,

  platforms: ["Spotify", "Apple Music", "YouTube Music", "Yandex Music"],

  releases: [
    { artist: "tüntolk", title: "Umay", year: 2022, date: "2022-10-07", type: "album", label: "Tündük Records", p: 2022, noteKey: "nUmay" },
    { artist: "Karakush", title: "Talas Moon", year: 2023, type: "single", label: "Kök Ay Media", p: 2023, noteKey: "nOutsideKorea" },
    { artist: "Altyn Muuz", title: "Zhylky Love", year: 2022, date: "2022-05-14", type: "album", label: "Star Road Music", p: 2022 },
    { artist: "Various performers", title: "Voices of the Talas Alatau", year: 2022, type: "compilation", label: "State Archives of Irad", p: 2022, noteKey: "nVoices" },
    { artist: "Karakush", title: "Morkhan Tünü", year: 2022, type: "single", label: "Kök Ay Media", p: 2022, noteKey: "nOutsideKorea" },
    { artist: "Eski Ün", title: "Kara Kün", year: 2021, date: "2021-04-30", type: "album", label: "Tündük Records", p: 2021, noteKey: "nKaraKun" },
    { artist: "Eski Ün", title: "Dream of Living", year: 2021, type: "single", label: "Tündük Records", p: 2021 },
    { artist: "Karakush", title: "Ak Börü", year: 2021, date: "2021-02-19", type: "ep", label: "Kök Ay Media", p: 2021, noteKey: "nOutsideKorea" },
    { artist: "Altyn Muuz", title: "Morkhan Baby", year: 2021, type: "single", label: "Star Road Music", p: 2021 },
    { artist: "Altyn Muuz", title: "Kymyz Kymyz", year: 2020, type: "single", label: "Star Road Music", p: 2020 },
    { artist: "Cathedral Choir of St. Janyl, Iyık Janyl", title: "'Onitha", year: 2020, type: "album", label: "Church of St. Janyl", p: 2020, noteKey: "nOnitha" },
    { artist: "Kök Bel", title: "Talas Sunrise", year: 1995, type: "album", label: "Ak Jol Records", p: 1995, noteKey: "nSunrise" },
    { artist: "Kök Bel", title: "Ak Jol", year: 1998, type: "album", label: "Ak Jol Records", p: 1998 },
    { artist: "Kök Bel", title: "Zhylky Jyly", year: 2002, type: "album", label: "Ak Jol Records", p: 2002 },
    { artist: "Karakush", title: "Umay", year: 2018, type: "single", label: "Kök Ay Media", p: 2018, noteKey: "nOutsideKorea" },
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
    { id: "am-nurzhan-1114", date: "2026-11-14", time: "14:00", artist: "Altyn Muuz", city: "nurzhan", country: "irad", venue: "Toikana Bereke, Navbahor", kind: "home", status: "door", price: "200 som", tulpar: true, noteKey: "gMatinee" },
    { id: "tt-almaty-1117", date: "2026-11-17", time: "20:00", artist: "tüntolk", city: "almaty", country: "kz", venue: "Zhylu Club", kind: "abroad", status: "onsale", price: "9,000 ₸", noteKey: "gJolchu26" },
    { id: "kb-talas-1120", date: "2026-11-20", time: "20:00", artist: "Kök Bel", city: "talas", country: "irad", venue: "Club Doran", kind: "home", status: "door", price: "300 som", tulpar: true },
    { id: "tt-moscow-1121", date: "2026-11-21", time: "22:00", artist: "tüntolk", city: "moscow", country: "ru", venue: "Teplotsentral (Kholodnaya Volna night)", kind: "abroad", status: "onsale", price: "2,200 ₽" },
    { id: "tt-berlin-1128", date: "2026-11-28", time: "22:00", artist: "tüntolk", city: "berlin", country: "de", venue: "Schwarzer Ofen, Neukölln (minimal synth night)", kind: "abroad", status: "onsale", price: "18 €" },
    { id: "eu-bishkek-1205", date: "2026-12-05", time: "19:00", artist: "Eski Ün", city: "bishkek", country: "kg", venue: "Ak Kuu teahouse", kind: "abroad", status: "onsale", price: "800 KGS" },
    { id: "tt-nurzhan-1212", date: "2026-12-12", time: "20:00", artist: "tüntolk", guest: "Eski Ün", city: "nurzhan", country: "irad", venue: "Kotelnaya, Dastgoh", kind: "home", status: "door", price: "250 som", tulpar: true, permit: "pending", noteKey: "gKotelnaya" },
    { id: "am-moscow-1227", date: "2026-12-27", time: "16:00", artist: "Altyn Muuz", city: "moscow", country: "ru", venue: "Irad Fellow-Countrymen's Association New Year concert", kind: "abroad", status: "soon", noteKey: "gHallTba" },
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
    { id: "am-moscow-1228", date: "2025-12-28", artist: "Altyn Muuz", city: "moscow", country: "ru", venue: "Irad Fellow-Countrymen's Association New Year concert", kind: "abroad" }
  ]
};
