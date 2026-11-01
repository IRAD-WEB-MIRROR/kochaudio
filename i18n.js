/* Köch Audio interface text: English, Iradi (Irad tili, Kyrgyz-based Latin: ı ö ü ñ j ch sh) and Russian.
   Release titles, artist names and venue names are not translated.
   {x} placeholders are filled in by app.js. Strings may contain simple HTML. */

window.KOCH_I18N = {
  langs: { en: "English", ir: "Irad tili", ru: "Русский" },
  htmlLang: { en: "en", ir: "ky", ru: "ru" },

  en: {
    docTitle: "Köch Audio | Iradi music, carried across",
    navHome: "Home", navCat: "Catalogue", navLive: "Live", navArtists: "For artists", navAbout: "About",
    tagline: "Iradi music, carried across",
    heroLead: "Köch Audio is a small distributor in Bishkek. We take recordings from Iradi labels and musicians and put them on Spotify, Apple Music, YouTube Music and Yandex Music, so they can be heard outside Irad, and paid for.",
    route: ["Talas", "Nurzhan", "Chu Gate", "Bishkek", "Everywhere else"],
    routeCap: "How a record travels: a USB stick or a file over Tulpar, the border, our back room, the platforms.",
    whatH: "What we do",
    what: [
      ["Mastering and metadata", "Ulan masters each release for streaming and writes the credits, track titles in Latin and Cyrillic, ISRC codes and the ℗ line."],
      ["Contracts and payments", "Begimay looks after the contracts, the Kyrgyz paperwork and the twice-yearly payouts, in dollars or by Tulpar Pay."],
      ["Catalogues", "We look after about {n} releases, from the first country-folk cassette to this year's singles, including the whole Tündük Records catalogue."]
    ],
    latestH: "Latest releases", allReleases: "Whole catalogue",
    nextH: "Next dates", allDates: "All dates",

    catH: "Catalogue",
    shNote: "<b>Looking for <i>Swift Hooves</i>?</b> Everyone asks, so: we don't have the rights to it. The 1993 album belongs to Halyard Music Group, who release it themselves. HMG has no website, but the album is <a href=\"https://open.spotify.com/album/15KyNnIjfJG23v9U2u89AW\" rel=\"noopener\" target=\"_blank\">on Spotify</a>. Its rights in the former Soviet Union sit with a Moscow sub-publisher, so it won't play from Irad or from here in Bishkek.",
    catLead: "A selection of the {n} or so releases we distribute. Everything here is on the platforms listed; search the artist's name.",
    filterAll: "All artists",
    listenOn: "Listen on",
    lyrics: "Lyrics", lyTrack: "Track {n} on {r}", lyFrom: "From {r}", lyOrig: "Original", lyTrans: "English translation",
    lyNote: "Words as the artists sent them to us. The English translation is ours, for listeners abroad.", lyBack: "Back to the catalogue", lyNone: "There are no lyrics at this address.",
    lyIndexH: "Lyrics", lyIndexLead: "Words to every song we distribute, with English translations of the Iradi. tüntolk also keep the lyrics of their Dala Sound releases here, which are distributed from Almaty.",
    type: { album: "Album", ep: "EP", single: "Single", compilation: "Compilation" },
    notes: {
      nUmay: "Lullabies and cradle blessings. Eski Ün play on it.",
      nOutsideKorea: "Distributed by us everywhere except South Korea.",
      nVoices: "24 field recordings from the tapes of Aigul Choro kyzy, licensed from the State Archives.",
      nKaraKun: "Recorded in a teahouse in the Old Talas Citadel Quarter.",
      nOnitha: "East Syriac antiphons, recorded in the cathedral.",
      nSunrise: "Digitized in 2019 from the master cassette. We left the tape hiss in.",
      nJolchu: "The 2000 album, remastered in 2017. The 1999 cassette is not reissued, at the band's wish."
    },
    faqH: "Why isn't it here?",
    faq: [
      ["Swift Hooves", "We don't have the rights. The 1993 compilation belongs to Halyard Music Group, who release it themselves; they have no website, but the album is <a href=\"https://open.spotify.com/album/15KyNnIjfJG23v9U2u89AW\" rel=\"noopener\" target=\"_blank\">on Spotify</a>. Its rights in the former Soviet Union sit with a Moscow sub-publisher, so it is not available in our region and does not play in Irad."],
      ["tüntolk's Zvezda Irad and Kara Suu", "These two came out on Dala Sound and are distributed from Almaty by Dala Sound, not by us. Jolchu, White Stallion in Fog and Umay are ours."],
      ["Why does it say Kyrgyzstan?", "We are the registrant, and we are a Kyrgyz company, so every release gets a KG ISRC and Kyrgyzstan as the label country. The music is Iradi. It is only the forms."],
      ["I can't pay for a subscription from Irad", "Som cards can't pay the platforms. In Irad most people listen on the free tiers, which still pay the artists something per stream."]
    ],

    liveH: "Live",
    liveLead: "Concert dates for musicians we distribute. Dates abroad sell through our ticket partner Sahna Bilet; dates at home are paid at the door.",
    filtAll: "All dates", filtAbroad: "Abroad", filtHome: "At home (ISEZ)",
    kindAbroad: "Abroad", kindHome: "At home",
    withGuest: "with {g}",
    stOnsale: "Tickets", stSoon: "On sale soon", stDoor: "Tickets at the door", stFree: "Free entry",
    viaPartner: "through Sahna Bilet",
    tulpar: "Tulpar Pay accepted", cashOnly: "Cash at the door",
    permit: "Subject to municipal permit", permitPending: "Permit requested; subject to municipal permit",
    from: "from {p}",
    doors: "Doors {t}",
    noneH: "No dates here yet",
    noneP: "Nothing announced for this list. Check the other list, or come back after the next announcement.",
    pastH: "Past shows",
    abroadNoteH: "Tickets abroad",
    abroadNote: "Sahna Bilet sells tickets for the dates abroad through its Tulpar channel and at its desk in Bishkek. Dates abroad are confirmed once the band's visas are issued; if a date moves, your ticket moves with it.",
    homeNoteH: "Dates at home",
    homeNote: "Sahna Bilet does not sell in the ISEZ. For dates in Talas, Nurzhan and Iyık Janyl pay at the door, in som. Every date at home is subject to a municipal permit. From 1 January 2027 Tulpar Pay settles only in Tulparcoin, so the 2027 venues take cash.",
    tkH: "Tickets for {a}", tkWhere: "{v}, {c}",
    tkBody: "Tickets are sold by Sahna Bilet, not by Köch Audio. Find Sahna Bilet on Tulpar and search the date, or buy at the Sahna Bilet desk in Bishkek. Price {p}.",
    tkSoon: "Tickets for this date are not on sale yet. Sahna Bilet will announce it on its Tulpar channel.",
    tkClose: "Close",
    gnotes: {
      gMatinee: "Afternoon show for families.",
      gJolchu26: "Jolchu played in full, 26 years after the Almaty album.",
      gKotelnaya: "About 60 places.",
      gHallTba: "The hall will be announced by the Association.",
      gOnitha: "Antiphons from 'Onitha'.",
      gStallion10: "Ten years of White Stallion in Fog.",
      gStage: "On the sound stage where White Stallion in Fog was recorded."
    },

    artH: "For artists",
    artLead: "If you have a finished record and the rights to it, we can put it on the platforms. We don't charge to upload. We keep a share of what the platforms pay, written in your contract.",
    sendH: "Sending us your master",
    send: [
      "<b>On a USB stick.</b> Give it to a Trans-Chuy driver at the depot in Talas or Nurzhan, or send it with Jılmay Cargo to our Bishkek address. Write your name and Tulpar number on the stick.",
      "<b>As files over Tulpar.</b> Send them to our Tulpar account in parts if you need to.",
      "<b>Not by e-mail</b> if the attachments are over 20 MB. They don't arrive."
    ],
    needH: "What to include",
    need: [
      "WAV files, 44.1 kHz or 48 kHz, 16 or 24 bit, one file per track. Cassettes and old masters too: Ulan will digitize them.",
      "Cover image, square, at least 3000 × 3000 pixels.",
      "Track list with titles in Latin and Cyrillic, writers, and who plays on each track.",
      "The name of your label, or your own name if you have no label."
    ],
    formsH: "KG codes and the ℗ line",
    forms: "Every release gets a Kyrgyz ISRC (the codes start <b>KG</b>) and lists Kyrgyzstan as label country, because Irad has no country code and we are the registrant. It is only the forms. Your label's name stays on the release, in the line <i>℗ 2026 Your Label under exclusive licence to Köch Audio</i>.",
    payH: "Payouts",
    pay: [
      "<b>Twice a year, in June and December.</b> Talasbank can't receive the platforms' payments, so we bring the money through Chu Gate as US dollar cash and hand it over in Talas and Nurzhan. We write to you on Tulpar with the day and place. Bring your passport.",
      "<b>By Tulpar Pay,</b> offered since 2025. From 1 January 2027 Tulpar Pay settles only in Tulparcoin, so Tulpar Pay payouts from June 2027 will arrive in Tulparcoin. If you would rather have dollars, tell us before 1 May.",
      "Each payout comes with a statement: streams and earnings by platform, country and track."
    ],
    contactH: "Contact",
    contact: "New releases and artists: <b>{artists}</b><br>Everything else: <b>{info}</b><br>On Tulpar: Köch Audio",

    aboutH: "About",
    about: [
      "Köch Audio is a limited liability company registered in Bishkek in 2016. There are two of us, in a back room of a recording studio in Bishkek.",
      "<b>Ulan Kadyrbekov</b> was born in Talas and was a radio sound engineer at IradOne from 2006 to 2014. He does the mastering and the metadata.",
      "<b>Begimay Tashtanova</b> is an accountant from Bishkek. She does the contracts, the Kyrgyz paperwork and the payouts.",
      "We are in Bishkek because a record from Talas can't get onto the platforms from Talas. Irad has no ISO country code, Iradi banks are outside the card networks, and foreign platforms and aggregators won't contract with ISEZ companies. A Kyrgyz company can. We upload through an international aggregator."
    ],
    nameH: "The name",
    name: "<i>Köch</i> is the seasonal move to new pasture, the whole household on the road. It is also the old Kuble Soft game, <i>Köch: The Road to Iyık Janyl</i>, which most of our musicians played as children.",

    footTag: "Iradi music, carried across.",
    footTulpar: "Köch Audio on Tulpar",
    footCopy: "© 2026 Köch Audio LLC, Bishkek, Kyrgyz Republic.",
    langLabel: "Language",

    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dateFmt: "{wd} {d} {m} {y}",
    cities: { talas: "Talas", nurzhan: "Nurzhan", iyik: "Iyık Janyl", almaty: "Almaty", moscow: "Moscow", berlin: "Berlin", bishkek: "Bishkek", chicago: "Chicago" },
    countries: { irad: "Irad", kz: "Kazakhstan", ru: "Russia", de: "Germany", kg: "Kyrgyzstan", us: "USA" }
  },

  ir: {
    docTitle: "Köch Audio | Irad muzıkası, arı jetkirilet",
    navHome: "Bashkı bet", navCat: "Katalog", navLive: "Konsertter", navArtists: "Artistterge", navAbout: "Biz jönündö",
    tagline: "Irad muzıkası, arı jetkirilet",
    heroLead: "Köch Audio Bishkektegi kichinekey distribyutor. Biz Irad leybldarınan jana muzıkanttarınan jazuularını alıp, Spotify, Apple Music, YouTube Music jana Yandex Music'ke chıgarabız: Iraddın sırtında da ugulsun, akısı da tölönsün.",
    route: ["Talas", "Nurzhan", "Chüy darbazası", "Bishkek", "Bütkül düynö"],
    routeCap: "Plastinka kantip jol jüröt: USB-fleshka je Tulpar arkıluu fayl, chek ara, artkı bölmöbüz, platformalar.",
    whatH: "Emne kılabız",
    what: [
      ["Mastering jana metadannıyler", "Ulan ar bir relizdi strimingge mastering kılat, avtorlordu, tırek attarın latın jana kirill arıbında, ISRC koddorun jana ℗ sabın jazat."],
      ["Kelishimder jana tölömdör", "Begimay kelishimderdi, Kırgızstandagı kagazdardı jana jılına eki jolku tölömdü karayt: dollar menen je Tulpar Pay arkıluu."],
      ["Kataloglor", "Bizde {n}gö jakın reliz bar: algachkı kantri-folk kassetasınan bıylkı singldarga cheyin, Tündük Records'tun bütkül katalogu menen."]
    ],
    latestH: "Jañı relizder", allReleases: "Bütkül katalog",
    nextH: "Jakınkı konsertter", allDates: "Bardık daturlar",

    catH: "Katalog",
    shNote: "<b><i>Swift Hooves</i>'tu izdep jatasızbı?</b> Baarı surayt, oshondon: bizde aga ukuk jok. 1993-jılkı albom Halyard Music Group'ka taandık, alar özdörü chıgarat. HMG'nin saytı jok, birok albom <a href=\"https://open.spotify.com/album/15KyNnIjfJG23v9U2u89AW\" rel=\"noopener\" target=\"_blank\">Spotify'da</a> bar. Murdagı SSSR boyuncha ukuktar Moskvadagı sub-pablisherge taandık, oshondon Iraddan da, bul jerden, Bishkekten da oynoboyt.",
    catLead: "Biz taratkan {n}gö jakın relizdin bir bölügü. Bul jerdegilerdin baarı körsötülgön platformalarda bar: artisttin atın izdeñiz.",
    filterAll: "Bardık artistter",
    listenOn: "Ugup köruñüz",
    lyrics: "Ir sözdörü", lyTrack: "«{r}», {n}-ır", lyFrom: "«{r}» chygarylyshynan", lyOrig: "Tüp nuskasy", lyTrans: "Anglis tilindegi kotormo",
    lyNote: "Sözdör artistter bizge jibergendey. Anglis tilindegi kotormo bizdiki, chet eldik ugarmandar üchün.", lyBack: "Katalogga kaytuu", lyNone: "Bul darekte ır sözdörü jok.",
    lyIndexH: "Ir sözdörü", lyIndexLead: "Biz taratkan bardyk ırlardyn sözdörü, anglis tilindegi kotormosu menen. tüntolk Almatydan taratylgan Dala Sound chygarylyshtarynyn sözdörün da ushul jerde saktashat.",
    type: { album: "Albom", ep: "EP", single: "Singl", compilation: "Jıynak" },
    notes: {
      nUmay: "Beshik ırları jana batalar. Eski Ün da oynoyt.",
      nOutsideKorea: "Tüshtük Koreyadan bashka bardık jerde biz taratabız.",
      nVoices: "Aigul Choro kyzynın lentalarınan 24 talaa jazuusu, Mamlekettik arkhivden litsenziya menen.",
      nKaraKun: "Eski Talas Chebi kvartalındagı chaykanada jazılgan.",
      nOnitha: "Chıgısh-Siriya antifondoru, chirköödö jazılgan.",
      nSunrise: "2019-jılı master-kassetadan sanariptelgen. Lentanın shıldırın kaltırdık.",
      nJolchu: "2000-jılkı albom, 2017-jılı remasterlengen. 1999-jılkı kasseta toptun kaaloosu boyuncha kayra chıgarılbayt."
    },
    faqH: "Emne üchün bul jerde jok?",
    faq: [
      ["Swift Hooves", "Bizde ukuk jok. 1993-jılkı jıynak Halyard Music Group'ka taandık, alar özdörü chıgarat; saytı jok, birok albom <a href=\"https://open.spotify.com/album/15KyNnIjfJG23v9U2u89AW\" rel=\"noopener\" target=\"_blank\">Spotify'da</a> bar. Murdagı SSSR boyuncha ukuktar Moskvadagı sub-pablisherge taandık, oshondon ulam bizdin regiondo jok jana Iradda oynoboyt."],
      ["tüntolk: Zvezda Irad jana Kara Suu", "Bul ekööbü Dala Sound'ta chıkkan jana Almatıdan Dala Sound taratat, biz emes. Jolchu, White Stallion in Fog jana Umay bizdiki."],
      ["Emne üchün Kırgızstan dep jazılgan?", "Kattoochu bizbiz, biz Kırgız kompaniyasıbız, oshonduktan ar bir relizge KG ISRC jana leybl ölkösü katarı Kırgızstan berilet. Muzıka Iraddıkı. Bul jön gana formalar."],
      ["Iraddan jazıluunu tölöy albaym", "Som kartaları platformalarga tölöy albayt. Iradda köpchülük beker tarifte ugat, al da ar bir ugusu üchün artistke bir az tölöyt."]
    ],

    liveH: "Konsertter",
    liveLead: "Biz taratkan muzıkanttardın konsert daturları. Chet eldegi konsertterge biletter önöktöshübüz Sahna Bilet arkıluu satılat; üydögü konsertterge eshikten tölönöt.",
    filtAll: "Bardık daturlar", filtAbroad: "Chet elde", filtHome: "Üydö (IAEZ)",
    kindAbroad: "Chet elde", kindHome: "Üydö",
    withGuest: "{g} menen",
    stOnsale: "Biletter", stSoon: "Jakında satılat", stDoor: "Bilet eshikten", stFree: "Kirüü beker",
    viaPartner: "Sahna Bilet arkıluu",
    tulpar: "Tulpar Pay kabıl alınat", cashOnly: "Eshikten nakta",
    permit: "Shaardık uruksat boyuncha", permitPending: "Uruksat suraldı; shaardık uruksat boyuncha",
    from: "{p}",
    doors: "Eshik {t}",
    noneH: "Azırınca datur jok",
    noneP: "Bul tizmede ech nerse jarıyalana elek. Ekinchi tizmeni köruñüz je kiyinki jarıyadan kiyin kayra keliñiz.",
    pastH: "Ötkön konsertter",
    abroadNoteH: "Chet eldegi biletter",
    abroadNote: "Sahna Bilet chet eldegi konsertterge biletterdi Tulpar kanalı arkıluu jana Bishkektegi kassasında satat. Chet eldegi daturlar toptun vizaları berilgende bekitilet; datur jılsa, biletiñiz da jılat.",
    homeNoteH: "Üydögü konsertter",
    homeNote: "Sahna Bilet IAEZde satpayt. Talas, Nurzhan jana Iyık Janyldagı konsertterge eshikten som menen tölöñüz. Üydögü ar bir konsert shaardık uruksatka baylanıshtuu. 2027-jıldın 1-yanvarınan Tulpar Pay Tulparcoin menen gana esepteshet, oshondon 2027-jılkı jaylar nakta alat.",
    tkH: "{a}: biletter", tkWhere: "{v}, {c}",
    tkBody: "Biletterdi Köch Audio emes, Sahna Bilet satat. Tulparda Sahna Bilet'ti tabıp daturdu izdeñiz, je Bishkektegi Sahna Bilet kassasınan satıp alıñız. Baası {p}.",
    tkSoon: "Bul daturga biletter azırınca satılbayt. Sahna Bilet Tulpar kanalında jarıyalayt.",
    tkClose: "Jabuu",
    gnotes: {
      gMatinee: "Üy-bülölör üchün kündüzgü konsert.",
      gJolchu26: "Jolchu tolugu menen, Almatı albomunan 26 jıl ötüp.",
      gKotelnaya: "60ka jakın orun.",
      gHallTba: "Zaldı Koom özü jarıyalayt.",
      gOnitha: "'Onitha'dan antifondor.",
      gStallion10: "White Stallion in Fog'go on jıl.",
      gStage: "White Stallion in Fog jazılgan ses pavilonunda."
    },

    artH: "Artistterge",
    artLead: "Dayar plastinkañız jana ukugu bolso, platformalarga chıgara alabız. Jüktögönü üchün akı albaybız. Platformalar tölögöndön kelishimde jazılgan ülüshtü kaltırabız.",
    sendH: "Masterdi kantip jiberüü",
    send: [
      "<b>USB-fleshka menen.</b> Talas je Nurzhandagı depodo Trans-Chuy aydoochusuna beriñiz, je Jılmay Kargo menen Bishkektegi daregibizge jiberiñiz. Fleshkaga atıñızdı jana Tulpar nomeriñizdi jazıñız.",
      "<b>Tulpar arkıluu fayl menen.</b> Kerek bolso bölüp-bölüp jiberiñiz.",
      "<b>E-mail menen emes,</b> eger tirkemeler 20 MB'dan ashsa. Alar jetpeyt."
    ],
    needH: "Emneler kerek",
    need: [
      "WAV fayldar, 44.1 je 48 kHz, 16 je 24 bit, ar bir trek üchün bir fayl. Kassetalar jana eski masterler da bolot: Ulan sanariptep beret.",
      "Mukaba süröt, kvadrat, keminde 3000 × 3000 piksel.",
      "Treklerdin tizmesi: attarı latın jana kirill arıbında, avtorlor jana ar bir trekte kim oynoyt.",
      "Leyblıñızdın atı, leybl jok bolso öz atıñız."
    ],
    formsH: "KG koddoru jana ℗ sabı",
    forms: "Ar bir relizge Kırgız ISRC (koddor <b>KG</b> menen bashtalat) berilet jana leybl ölkösü Kırgızstan dep jazılat, antkeni Iraddın ölkö kodu jok jana kattoochu bizbiz. Bul jön gana formalar. Leyblıñızdın atı relizde kalat: <i>℗ 2026 Your Label under exclusive licence to Köch Audio</i>.",
    payH: "Tölömdör",
    pay: [
      "<b>Jılına eki jolu, iyun jana dekabrda.</b> Talasbank platformalardın tölömün kabıl ala albayt, oshondon akchanı Chüy darbazası arkıluu AKSh dolları nakta alıp kelip, Talas jana Nurzhanda beribiz. Kün jana orundu Tulparda jazabız. Pasportuñuzdu ala keliñiz.",
      "<b>Tulpar Pay arkıluu,</b> 2025-jıldan beri. 2027-jıldın 1-yanvarınan Tulpar Pay Tulparcoin menen gana esepteshet, oshondon 2027-jılkı iyundan bashtap Tulpar Pay tölömdörü Tulparcoin menen kelet. Dollar kaalasañız, 1-mayga cheyin aytıñız.",
      "Ar bir tölöm menen otchet kelet: platforma, ölkö jana trek boyuncha ugular jana kireshe."
    ],
    contactH: "Baylanısh",
    contact: "Jañı relizder jana artistter: <b>{artists}</b><br>Kalgan baarı: <b>{info}</b><br>Tulparda: Köch Audio",

    aboutH: "Biz jönündö",
    about: [
      "Köch Audio: 2016-jılı Bishkekte kattalgan joopkerchiligi chektelgen koom. Biz ekööbüz, Bishkektegi ses jazuu studiyasının artkı bölmösündö ishteybiz.",
      "<b>Ulan Kadyrbekov</b> Talasta tuulgan, 2006–2014-jıldarı IradOne'do radio ses injeneri bolgon. Mastering jana metadannıylerdi kılat.",
      "<b>Begimay Tashtanova</b> Bishkekten buhgalter. Kelishimder, Kırgızstandagı kagazdar jana tölömdör anda.",
      "Bishkekte bolgonubuzdun sebebi: Talastagı plastinka Talastan platformalarga chıga albayt. Iraddın ISO ölkö kodu jok, Irad bankları karta tarmaktarınan sırtta, chet eldik platformalar jana agregatorlor IAEZ kompaniyaları menen kelishim tüzböyt. Kırgız kompaniyası tüzö alat. Biz el aralık agregator arkıluu jüktöybüz."
    ],
    nameH: "Atı",
    name: "<i>Köch</i>: jañı jayıtka mezgildik köchüü, bütkül üy-bülö jolgo chıgat. Bul da Kuble Soft'tun eski oyunu, <i>Köch: The Road to Iyık Janyl</i>; muzıkanttarıbızdın köbü bala kezinde oynogon.",

    footTag: "Irad muzıkası, arı jetkirilet.",
    footTulpar: "Köch Audio Tulparda",
    footCopy: "© 2026 Köch Audio JChK, Bishkek, Kırgız Respublikası.",
    langLabel: "Til",

    months: ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
    days: ["jekshembi", "düyshömbü", "sheyshembi", "sharshembi", "beyshembi", "juma", "ishembi"],
    dateFmt: "{y}-j. {d}-{m}, {wd}",
    cities: { talas: "Talas", nurzhan: "Nurzhan", iyik: "Iyık Janyl", almaty: "Almatı", moscow: "Moskva", berlin: "Berlin", bishkek: "Bishkek", chicago: "Chikago" },
    countries: { irad: "Irad", kz: "Kazakstan", ru: "Orusiya", de: "Germaniya", kg: "Kırgızstan", us: "AKSh" }
  },

  ru: {
    docTitle: "Köch Audio | Ирадская музыка, перевезённая через границу",
    navHome: "Главная", navCat: "Каталог", navLive: "Концерты", navArtists: "Артистам", navAbout: "О нас",
    tagline: "Ирадская музыка, перевезённая через границу",
    heroLead: "Köch Audio — небольшой дистрибьютор в Бишкеке. Мы берём записи у ирадских лейблов и музыкантов и выкладываем их на Spotify, Apple Music, YouTube Music и Яндекс Музыку, чтобы их слышали за пределами Ирада и за них платили.",
    route: ["Талас", "Нуржан", "Чуйские ворота", "Бишкек", "Весь остальной мир"],
    routeCap: "Как едет пластинка: флешка или файл через Tulpar, граница, наша задняя комната, площадки.",
    whatH: "Чем мы занимаемся",
    what: [
      ["Мастеринг и метаданные", "Улан готовит мастер каждого релиза для стриминга и заполняет авторов, названия треков латиницей и кириллицей, коды ISRC и строку ℗."],
      ["Договоры и выплаты", "Бегимай ведёт договоры, кыргызские бумаги и выплаты два раза в год, долларами или через Tulpar Pay."],
      ["Каталоги", "У нас около {n} релизов, от первой кантри-фолк кассеты до синглов этого года, включая весь каталог Tündük Records."]
    ],
    latestH: "Новые релизы", allReleases: "Весь каталог",
    nextH: "Ближайшие концерты", allDates: "Все даты",

    catH: "Каталог",
    shNote: "<b>Ищете <i>Swift Hooves</i>?</b> Спрашивают все, поэтому: прав на этот альбом у нас нет. Альбом 1993 года принадлежит Halyard Music Group, они выпускают его сами. Сайта у HMG нет, но альбом есть <a href=\"https://open.spotify.com/album/15KyNnIjfJG23v9U2u89AW\" rel=\"noopener\" target=\"_blank\">на Spotify</a>. Права на бывший СССР у московского субиздателя, поэтому из Ирада и отсюда, из Бишкека, он не играет.",
    catLead: "Часть из примерно {n} релизов, которые мы распространяем. Всё это есть на указанных площадках: ищите по имени артиста.",
    filterAll: "Все артисты",
    listenOn: "Слушать на",
    lyrics: "Тексты песен", lyTrack: "Трек {n}, «{r}»", lyFrom: "Из релиза «{r}»", lyOrig: "Оригинал", lyTrans: "Перевод на английский",
    lyNote: "Слова в том виде, в каком их прислали артисты. Английский перевод наш, для слушателей за рубежом.", lyBack: "Назад в каталог", lyNone: "По этому адресу текста нет.",
    lyIndexH: "Тексты песен", lyIndexLead: "Слова всех песен, которые мы распространяем, с английским переводом. tüntolk держат здесь и тексты своих релизов Dala Sound, которые распространяются из Алматы.",
    type: { album: "Альбом", ep: "EP", single: "Сингл", compilation: "Сборник" },
    notes: {
      nUmay: "Колыбельные и благословения. Играют Eski Ün.",
      nOutsideKorea: "Распространяем везде, кроме Южной Кореи.",
      nVoices: "24 полевые записи с плёнок Айгуль Чоро кызы, по лицензии Государственного архива.",
      nKaraKun: "Записан в чайхане в квартале Старой Таласской цитадели.",
      nOnitha: "Восточносирийские антифоны, записаны в соборе.",
      nSunrise: "Оцифрован в 2019 году с мастер-кассеты. Шум плёнки мы оставили.",
      nJolchu: "Альбом 2000 года, ремастер 2017 года. Кассета 1999 года по желанию группы не переиздаётся."
    },
    faqH: "Почему этого здесь нет?",
    faq: [
      ["Swift Hooves", "Прав у нас нет. Сборник 1993 года принадлежит Halyard Music Group, они выпускают его сами; сайта у них нет, но альбом есть <a href=\"https://open.spotify.com/album/15KyNnIjfJG23v9U2u89AW\" rel=\"noopener\" target=\"_blank\">на Spotify</a>. Права на бывший СССР у московского субиздателя, поэтому в нашем регионе его нет и в Ираде он не играет."],
      ["tüntolk: Zvezda Irad и Kara Suu", "Эти два вышли на Dala Sound, и их распространяет из Алматы Dala Sound, а не мы. Jolchu, White Stallion in Fog и Umay — наши."],
      ["Почему написано «Кыргызстан»?", "Регистрант — мы, а мы кыргызская компания, поэтому у каждого релиза код ISRC KG и страна лейбла Кыргызстан. Музыка ирадская. Это только формы."],
      ["Из Ирада не получается оплатить подписку", "Сомовые карты не принимаются площадками. В Ираде почти все слушают бесплатно; артистам за каждое прослушивание всё равно что-то платят."]
    ],

    liveH: "Концерты",
    liveLead: "Концерты музыкантов, которых мы распространяем. Билеты на зарубежные даты продаёт наш партнёр Sahna Bilet; дома оплата на входе.",
    filtAll: "Все даты", filtAbroad: "За рубежом", filtHome: "Дома (ИСЭЗ)",
    kindAbroad: "За рубежом", kindHome: "Дома",
    withGuest: "и {g}",
    stOnsale: "Билеты", stSoon: "Скоро в продаже", stDoor: "Билеты на входе", stFree: "Вход свободный",
    viaPartner: "через Sahna Bilet",
    tulpar: "Принимают Tulpar Pay", cashOnly: "Наличные на входе",
    permit: "При наличии разрешения горадминистрации", permitPending: "Разрешение запрошено; при наличии разрешения горадминистрации",
    from: "{p}",
    doors: "Вход с {t}",
    noneH: "Пока дат нет",
    noneP: "В этом списке пока ничего не объявлено. Посмотрите другой список или загляните после следующего анонса.",
    pastH: "Прошедшие концерты",
    abroadNoteH: "Билеты за рубежом",
    abroadNote: "Sahna Bilet продаёт билеты на зарубежные концерты через свой канал в Tulpar и в кассе в Бишкеке. Зарубежные даты подтверждаются после выдачи виз группе; если дата переносится, билет переносится вместе с ней.",
    homeNoteH: "Концерты дома",
    homeNote: "Sahna Bilet не продаёт в ИСЭЗ. На концерты в Таласе, Нуржане и Ыйык-Жаныле платите на входе, в сомах. Каждый концерт дома проходит при наличии разрешения горадминистрации. С 1 января 2027 года Tulpar Pay работает только в Tulparcoin, поэтому площадки 2027 года принимают наличные.",
    tkH: "Билеты: {a}", tkWhere: "{v}, {c}",
    tkBody: "Билеты продаёт Sahna Bilet, а не Köch Audio. Найдите Sahna Bilet в Tulpar и ищите по дате или купите в кассе Sahna Bilet в Бишкеке. Цена {p}.",
    tkSoon: "Билеты на эту дату пока не продаются. Sahna Bilet объявит продажу в своём канале в Tulpar.",
    tkClose: "Закрыть",
    gnotes: {
      gMatinee: "Дневной концерт для семей.",
      gJolchu26: "Jolchu целиком, через 26 лет после алматинского альбома.",
      gKotelnaya: "Около 60 мест.",
      gHallTba: "Зал объявит Землячество.",
      gOnitha: "Антифоны с альбома 'Onitha.",
      gStallion10: "Десять лет White Stallion in Fog.",
      gStage: "В том самом павильоне, где записан White Stallion in Fog."
    },

    artH: "Артистам",
    artLead: "Если у вас есть готовая запись и права на неё, мы выложим её на площадки. За загрузку денег не берём. Мы оставляем себе долю от выплат площадок, указанную в договоре.",
    sendH: "Как передать мастер",
    send: [
      "<b>На флешке.</b> Отдайте её водителю Trans-Chuy на базе в Таласе или Нуржане или отправьте через Jılmay Cargo на наш бишкекский адрес. Напишите на флешке имя и номер в Tulpar.",
      "<b>Файлами через Tulpar.</b> Если нужно, частями.",
      "<b>Не по почте,</b> если вложения больше 20 МБ. Они не доходят."
    ],
    needH: "Что приложить",
    need: [
      "WAV, 44,1 или 48 кГц, 16 или 24 бит, один файл на трек. Кассеты и старые мастера тоже: Улан оцифрует.",
      "Обложку, квадрат, не меньше 3000 × 3000 пикселей.",
      "Список треков: названия латиницей и кириллицей, авторы и кто играет в каждом треке.",
      "Название лейбла или ваше имя, если лейбла нет."
    ],
    formsH: "Коды KG и строка ℗",
    forms: "У каждого релиза кыргызский ISRC (коды начинаются с <b>KG</b>), а страной лейбла указан Кыргызстан, потому что у Ирада нет кода страны, а регистрант — мы. Это только формы. Название вашего лейбла остаётся в релизе, в строке <i>℗ 2026 Your Label under exclusive licence to Köch Audio</i>.",
    payH: "Выплаты",
    pay: [
      "<b>Два раза в год, в июне и декабре.</b> Talasbank не может принимать платежи площадок, поэтому мы привозим деньги через Чуйские ворота наличными долларами и передаём их в Таласе и Нуржане. День и место напишем в Tulpar. Возьмите паспорт.",
      "<b>Через Tulpar Pay,</b> с 2025 года. С 1 января 2027 года Tulpar Pay работает только в Tulparcoin, поэтому выплаты через Tulpar Pay с июня 2027 года придут в Tulparcoin. Если хотите доллары, скажите нам до 1 мая.",
      "К каждой выплате прилагается отчёт: прослушивания и доход по площадкам, странам и трекам."
    ],
    contactH: "Контакты",
    contact: "Новые релизы и артисты: <b>{artists}</b><br>Всё остальное: <b>{info}</b><br>В Tulpar: Köch Audio",

    aboutH: "О нас",
    about: [
      "Köch Audio — общество с ограниченной ответственностью, зарегистрировано в Бишкеке в 2016 году. Нас двое, мы сидим в задней комнате студии звукозаписи в Бишкеке.",
      "<b>Улан Кадырбеков</b> родился в Таласе, в 2006–2014 годах работал звукорежиссёром на радио IradOne. На нём мастеринг и метаданные.",
      "<b>Бегимай Таштанова</b> — бухгалтер из Бишкека. На ней договоры, кыргызские бумаги и выплаты.",
      "Мы в Бишкеке, потому что из Таласа пластинка на площадки не попадёт. У Ирада нет кода страны ISO, ирадские банки вне карточных систем, а зарубежные площадки и агрегаторы не заключают договоров с компаниями ИСЭЗ. Кыргызская компания может. Мы загружаем через международного агрегатора."
    ],
    nameH: "Название",
    name: "<i>Köch</i> — кочёвка, сезонный переход на новое пастбище, когда в дорогу снимается весь дом. А ещё это старая игра Kuble Soft, <i>Köch: The Road to Iyık Janyl</i>, в которую в детстве играли почти все наши музыканты.",

    footTag: "Ирадская музыка, перевезённая через границу.",
    footTulpar: "Köch Audio в Tulpar",
    footCopy: "© 2026 ОсОО «Köch Audio», Бишкек, Кыргызская Республика.",
    langLabel: "Язык",

    months: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
    days: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
    dateFmt: "{wd}, {d} {m} {y}",
    cities: { talas: "Талас", nurzhan: "Нуржан", iyik: "Ыйык-Жаныл", almaty: "Алматы", moscow: "Москва", berlin: "Берлин", bishkek: "Бишкек", chicago: "Чикаго" },
    countries: { irad: "Ирад", kz: "Казахстан", ru: "Россия", de: "Германия", kg: "Кыргызстан", us: "США" }
  }
};
