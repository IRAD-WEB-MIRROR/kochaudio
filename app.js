(function () {
  "use strict";
  var D = window.KOCH, I18N = window.KOCH_I18N, LY = window.KOCH_LYRICS || [];
  var VENUE_URL = { "Irad Palace of Art, concert hall": "https://palace.korkom.org/" };
  function venue(g) { var u = VENUE_URL[g.venue]; return u ? '<a href="' + u + '">' + esc(g.venue) + "</a>" : esc(g.venue); }
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var LANG = "ir";
  try { var saved = localStorage.getItem("koch_lang"); if (saved && I18N[saved]) LANG = saved; } catch (e) {}
  var qs = new URLSearchParams(location.search).get("lang");
  if (qs && I18N[qs]) LANG = qs;
  var T = function () { return I18N[LANG]; };
  var fill = function (s, o) { return String(s).replace(/\{(\w+)\}/g, function (m, k) { return o[k] != null ? o[k] : m; }); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  /* today's date in Bishkek (UTC+6) as YYYY-MM-DD */
  var now = new Date(Date.now() + 6 * 3600e3);
  var TODAY = now.toISOString().slice(0, 10);

  var mail = function (n) { return n + "@" + D.email; };

  function fmtDate(iso) {
    var p = iso.split("-"), d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
    var t = T();
    return fill(t.dateFmt, { wd: t.days[d.getUTCDay()], d: +p[2], m: t.months[+p[1] - 1], y: p[0] });
  }
  function place(g) { var t = T(); return (t.cities[g.city] || g.city) + ", " + (t.countries[g.country] || g.country); }

  var gigs = D.gigs.slice().sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
  var upcoming = gigs.filter(function (g) { return g.date >= TODAY; });
  var past = gigs.filter(function (g) { return g.date < TODAY; }).reverse();

  var state = { artist: "", kind: "all" };
  try { var k = sessionStorage.getItem("koch_kind"); if (k) state.kind = k; } catch (e) {}


  /* ---------- release pages ---------- */
  var rkey = function (r) { return r.artist + "|" + r.title; };
  var onAlbum = function (r) { return r.type === "single" && D.onAlbum && D.onAlbum[rkey(r)]; };
  var shown = D.releases.filter(function (r) { return !onAlbum(r); });
  function slugify(s) {
    return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i").toLowerCase()
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  var SLUG = {}, BYSLUG = {};
  shown.forEach(function (r) {
    if (r.type === "single") return;
    var s = slugify(r.title);
    if (BYSLUG[s]) s = slugify(r.title + " " + r.artist);
    SLUG[rkey(r)] = s; BYSLUG[s] = r;
  });
  var relHref = function (r) { var s = SLUG[rkey(r)]; return s ? "#/release/" + s : ""; };
  window.KOCH_relHref = relHref;
  function albumFor(artist, title) {
    var a = D.onAlbum && D.onAlbum[artist + "|" + title];
    return a ? D.releases.filter(function (r) { return r.artist === artist && r.title === a && r.type !== "single"; })[0] : null;
  }

  /* ---------- home ---------- */
  function renderHome() {
    var t = T();
    $("#route").innerHTML = t.route.map(function (s, i) {
      var cls = i === 2 ? "gate" : i === t.route.length - 1 ? "end" : "";
      return '<li class="' + cls + '"><span class="pin" aria-hidden="true"></span><span class="lbl">' + esc(s) + "</span></li>";
    }).join("");
    $("#what").innerHTML = t.what.map(function (w) {
      return '<div class="w"><h3>' + esc(w[0]) + "</h3><p>" + esc(fill(w[1], { n: D.releasesTotal })) + "</p></div>";
    }).join("");
    var latest = D.releases.slice().sort(function (a, b) { return (b.date || b.year + "-00") > (a.date || a.year + "-00") ? 1 : -1; }).slice(0, 4);
    $("#latest").innerHTML = latest.map(function (r) {
      return "<li><span class=\"k\">" + r.year + "</span><span><b>" + esc(r.title) + "</b><br><small>" + esc(r.artist) + ", " + esc(t.type[r.type]) + "</small></span></li>";
    }).join("");
    $("#next").innerHTML = upcoming.slice(0, 4).map(function (g) {
      return "<li><span class=\"k\">" + esc(shortDate(g.date)) + "</span><span><b>" + esc(g.artist) + "</b><br><small>" + esc(place(g)) + "</small></span></li>";
    }).join("");
  }
  function shortDate(iso) { var p = iso.split("-"), t = T(); return p[2] + " " + t.months[+p[1] - 1]; }

  /* ---------- catalogue ---------- */
  function renderCatalogue() {
    var t = T();
    var artists = [];
    shown.forEach(function (r) { if (artists.indexOf(r.artist) < 0) artists.push(r.artist); });
    $("#artistChips").innerHTML = '<button type="button" data-artist="">' + esc(t.filterAll) + "</button>" +
      artists.map(function (a) { return '<button type="button" data-artist="' + esc(a) + '">' + esc(a) + "</button>"; }).join("");
    $$("#artistChips button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.artist === state.artist);
      b.onclick = function () { state.artist = b.dataset.artist; renderCatalogue(); };
    });
    var list = shown.filter(function (r) { return !state.artist || r.artist === state.artist; })
      .sort(function (a, b) { var x = a.date || a.year + "-00", y = b.date || b.year + "-00"; return x < y ? 1 : x > y ? -1 : 0; });
    $("#releases").innerHTML = list.map(function (r) {
      var note = r.noteKey ? '<p class="rnote">' + esc(t.notes[r.noteKey]) + "</p>" : "";
      var href = relHref(r), ttl = esc(r.title) + (r.alt ? ' <span class="alt">(' + esc(r.alt) + ")</span>" : "");
      return '<li class="rel">' +
        '<div class="ryear">' + r.year + "</div>" +
        '<div class="rmain"><h2>' + (href ? '<a class="rlink" href="' + href + '">' + ttl + "</a>" : ttl) + "</h2>" +
        '<p class="rart">' + esc(r.artist) + ' <span class="rtype">' + esc(t.type[r.type]) + "</span></p>" + note +
        lyricsLinks(r) +
        '<p class="pl">℗ ' + r.p + " " + esc(r.label) + " under exclusive licence to Köch Audio</p></div>" +
        '<div class="rlisten"><span class="lo">' + esc(t.listenOn) + '</span><ul class="stops">' + D.platforms.map(function (p) {
          var u = r.links && r.links[p];
          return "<li>" + (u ? '<a class="pf" href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(p) + "</a>" : '<span class="pf">' + esc(p) + "</span>") + "</li>";
        }).join("") + "</ul></div></li>";
    }).join("");
    var groups = [];
    LY.forEach(function (l) {
      var key = l.artist + " \u2013 " + l.release, g = groups.filter(function (x) { return x.key === key; })[0];
      if (!g) groups.push(g = { key: key, artist: l.artist, release: l.release, songs: [] });
      g.songs.push(l);
    });
    $("#lyIndex").innerHTML = groups.map(function (g) {
      g.songs.sort(function (a, b) { return (a.track || 99) - (b.track || 99); });
      return "<li><b>" + esc(g.artist) + "</b>, <i>" + esc(g.release) + "</i>: " + g.songs.map(function (l) {
        return '<a href="#/lyrics/' + l.slug + '">' + esc(l.title) + "</a>";
      }).join(", ") + "</li>";
    }).join("");
    $("#faq").innerHTML = t.faq.map(function (f) {
      return "<details><summary>" + esc(f[0]) + "</summary><p>" + f[1] + "</p></details>";
    }).join("");
  }

  /* ---------- previews ---------- */
  var PV = new Audio(), pvBtn = null;
  PV.preload = "none";
  function pvSrc(r, n) {
    var f = r && (D.previews || {})[rkey(r)];
    return f ? "previews/" + f + "/" + (n < 10 ? "0" : "") + n + ".mp3" : "";
  }
  function pvHost(b) { var li = b.closest("li"); return li ? [b, li] : [b]; }
  function pvStop() {
    PV.pause();
    if (pvBtn) { pvBtn.classList.remove("on"); pvBtn.setAttribute("aria-pressed", "false"); pvHost(pvBtn).forEach(function (el) { el.style.removeProperty("--p"); }); }
    pvBtn = null;
  }
  PV.addEventListener("ended", pvStop);
  PV.addEventListener("timeupdate", function () {
    if (!pvBtn || !PV.duration) return;
    var p = (PV.currentTime / PV.duration * 100).toFixed(1) + "%";
    pvHost(pvBtn).forEach(function (el) { el.style.setProperty("--p", p); });
  });
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-pv]");
    if (!b) return;
    if (b === pvBtn) { pvStop(); return; }
    pvStop();
    PV.src = b.getAttribute("data-pv");
    pvBtn = b; b.classList.add("on"); b.setAttribute("aria-pressed", "true");
    var p = PV.play(); if (p && p.catch) p.catch(pvStop);
  });

  /* ---------- lyrics ---------- */
  function songsOf(r) {
    return LY.filter(function (l) {
      if (l.artist !== r.artist) return false;
      if (l.release === r.title || (l.also || []).indexOf(r.title) >= 0) return true;
      var a = albumFor(l.artist, l.release); return !!a && a === r;
    })
      .sort(function (a, b) { return (a.track || 99) - (b.track || 99); });
  }
  function lyricsLinks(r) {
    var songs = songsOf(r);
    if (!songs.length) return "";
    return '<p class="rly"><span class="lo">' + esc(T().lyrics) + ":</span> " + songs.map(function (l) {
      return '<a href="#/lyrics/' + l.slug + '">' + esc(l.title) + "</a>";
    }).join(", ") + "</p>";
  }
  function renderLyrics(slug) {
    var t = T(), l = LY.filter(function (x) { return x.slug === slug; })[0];
    var back = '<p class="lyback"><a href="#/catalogue">' + esc(t.lyBack) + "</a></p>";
    if (!l) { $("#lyrics").innerHTML = back + "<p>" + esc(t.lyNone) + "</p>"; return; }
    var two = l.stanzas.some(function (st) { return st.some(function (x) { return x.length > 1; }); });
    var head = two ? '<div class="lyrow lyhead"><span>' + esc(t.lyOrig) + "</span><span>" + esc(t.lyTrans) + "</span></div>" : "";
    var body = l.stanzas.map(function (st) {
      return '<div class="stanza">' + st.map(function (x) {
        return two ? '<div class="lyrow"><span class="o">' + esc(x[0]) + '</span><span class="e">' + esc(x[1] || "") + "</span></div>"
                   : '<div class="lyrow one"><span class="o">' + esc(x[0]) + "</span></div>";
      }).join("") + "</div>";
    }).join("");
    $("#lyrics").innerHTML = back +
      "<h1>" + esc(l.title) + (l.alt ? ' <span class="alt">(' + esc(l.alt) + ")</span>" : "") + "</h1>" +
      '<p class="rart">' + esc(l.artist) + ". " + (function () {
        var rel = albumFor(l.artist, l.release) || D.releases.filter(function (r) { return r.artist === l.artist && r.title === l.release && r.type !== "single"; })[0];
        var h = rel && relHref(rel), rn = rel ? rel.title : l.release, rr = h ? '<a href="' + h + '"><i>' + esc(rn) + "</i></a>" : esc(rn);
        return rel && rel.title !== l.release ? fill(esc(t.lyFrom), { r: rr }) : l.track ? fill(esc(t.lyTrack), { n: l.track, r: rr }) : fill(esc(t.lyFrom), { r: rr });
      })() + "</p>" + (function () {
        var rel = albumFor(l.artist, l.release) || D.releases.filter(function (r) { return r.artist === l.artist && r.title === l.release && r.type !== "single"; })[0];
        var src = l.track && rel && rel.title === l.release ? pvSrc(rel, l.track) : "";
        return src ? '<p class="lypv"><button type="button" class="pvbtn" data-pv="' + src + '" aria-pressed="false" aria-label="' + esc(fill(t.pvPlay, { s: l.title })) + '"><span class="pvi" aria-hidden="true"></span>' + esc(t.pvLabel) + "</button></p>" : "";
      })() +
      '<div class="lyrics' + (two ? " two" : "") + '">' + head + body + "</div>" +
      (two ? '<p class="lynote">' + esc(t.lyNote) + "</p>" : "");
  }

  function renderRelease(slug) {
    var t = T(), r = BYSLUG[slug], back = '<p class="lyback"><a href="#/catalogue">' + esc(t.lyBack) + "</a></p>";
    if (!r) { $("#release").innerHTML = back + "<p>" + esc(t.relNone) + "</p>"; return; }
    var cover = D.covers && D.covers.indexOf(slug) >= 0
      ? '<img src="covers/' + slug + '.jpg" width="600" height="600" alt="' + esc(fill(t.relCover, { r: r.title, a: r.artist })) + '">'
      : '<div class="nocover" aria-hidden="true"><span class="plate">köch</span><b>' + esc(r.title) + "</b><span>" + esc(r.artist) + "</span></div>";
    var songs = songsOf(r), tr = (D.tracks || {})[rkey(r)] || [];
    function lyricFor(x, i) {
      var base = x[0].replace(/\s*\(.*\)$/, "");
      return songs.filter(function (l) { return l.release === r.title && l.track === i + 1 && !x[3]; })[0] ||
        songs.filter(function (l) { return l.title === x[0] || l.title === base || l.alt === x[1]; })[0];
    }
    var main = tr.filter(function (x) { return !x[3]; }), bonus = tr.filter(function (x) { return x[3]; });
    function rows(list, from) {
      return list.map(function (x, j) {
        var i = from + j, l = lyricFor(x, i);
        var src = pvSrc(r, i + 1);
        return '<li>' + (src ? '<button type="button" class="tn tp" data-pv="' + src + '" aria-pressed="false" aria-label="' + esc(fill(t.pvPlay, { s: x[0] })) + '"><span class="n">' + (i + 1) + '</span><span class="pvi" aria-hidden="true"></span></button>'
          : '<span class="tn">' + (i + 1) + "</span>") + '<span class="tt"><b>' + esc(x[0]) + "</b>" +
          (x[1] ? ' <span class="te">' + esc(x[1]) + "</span>" : "") + "</span>" +
          '<span class="tl">' + (l ? '<a href="#/lyrics/' + l.slug + '">' + esc(t.lyrics) + "</a>" : "") + "</span>" +
          '<span class="td">' + esc(x[2] || "") + "</span></li>";
      }).join("");
    }
    var tracks = tr.length ? '<section class="tracks"><h2>' + esc(t.relTracks) + "</h2>" + (pvSrc(r, 1) ? '<p class="pvhint">' + esc(t.pvHint) + "</p>" : "") + '<ol class="tlist">' + rows(main, 0) + "</ol>" +
      (bonus.length ? '<h3>' + esc(t.relBonus) + '</h3><ol class="tlist">' + rows(bonus, main.length) + "</ol>" : "") + "</section>"
      : '<section class="tracks"><h2>' + esc(t.relTracks) + '</h2><p class="tnone">' + esc(t.relNoTracks) + "</p>" +
        (songs.length ? lyricsLinks(r) : "") + "</section>";
    var singles = D.releases.filter(function (x) { return onAlbum(x) && D.onAlbum[rkey(x)] === r.title && x.artist === r.artist; });
    var more = shown.filter(function (x) { return x.artist === r.artist && x !== r; })
      .sort(function (a, b) { return (b.date || b.year + "-00") > (a.date || a.year + "-00") ? 1 : -1; });
    var dt = r.date ? (function (p) { return p[2] + " " + t.months[+p[1] - 1] + " " + p[0]; })(r.date.split("-")) : String(r.year);
    $("#release").innerHTML = back +
      '<article class="relpage"><div class="relart">' + cover + "</div>" +
      '<div class="relhead"><p class="reltype">' + esc(t.type[r.type]) + " \u00b7 " + r.year + "</p>" +
      "<h1>" + esc(r.title) + (r.alt ? ' <span class="alt">(' + esc(r.alt) + ")</span>" : "") + "</h1>" +
      '<p class="relartist">' + esc(r.artist) + "</p>" +
      (r.noteKey ? '<p class="rnote">' + esc(t.notes[r.noteKey]) + "</p>" : "") +
      '<dl class="relfacts"><div><dt>' + esc(t.relDate) + "</dt><dd>" + esc(dt) + "</dd></div>" +
      "<div><dt>" + esc(t.relLabel) + "</dt><dd>" + esc(r.label) + "</dd></div>" +
      (tr.length ? "<div><dt>" + esc(t.relCount) + "</dt><dd>" + tr.length + "</dd></div>" : "") +
      (singles.length ? "<div><dt>" + esc(t.relSingles) + "</dt><dd>" + singles.map(function (x) { return "\u201c" + esc(x.title) + "\u201d (" + x.year + ")"; }).join(", ") + "</dd></div>" : "") +
      "</dl>" +
      '<div class="rlisten"><span class="lo">' + esc(t.listenOn) + '</span><ul class="stops">' + D.platforms.map(function (p) {
        var u = r.links && r.links[p];
        return "<li>" + (u ? '<a class="pf" href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(p) + "</a>" : '<span class="pf">' + esc(p) + "</span>") + "</li>";
      }).join("") + "</ul></div></div></article>" +
      tracks +
      '<p class="pl relpl">\u2117 ' + r.p + " " + esc(r.label) + " under exclusive licence to K\u00f6ch Audio</p>" +
      (more.length ? '<section class="relmore"><h2>' + esc(fill(t.relMore, { a: r.artist })) + '</h2><ul class="morelist">' + more.map(function (x) {
        var h = relHref(x);
        return "<li>" + (h ? '<a href="' + h + '">' : "<span>") + "<b>" + esc(x.title) + "</b><small>" + esc(t.type[x.type]) + " \u00b7 " + x.year + "</small>" + (h ? "</a>" : "</span>") + "</li>";
      }).join("") + "</ul></section>" : "");
    document.title = r.title + " \u2013 " + r.artist + " | K\u00f6ch Audio";
  }

  /* ---------- live ---------- */
  function statusHtml(g) {
    var t = T(), out = [];
    if (g.kind === "abroad") {
      if (g.status === "onsale") out.push('<button type="button" class="btn tix" data-gig="' + g.id + '">' + esc(t.stOnsale) + "</button><small>" + esc(t.viaPartner) + "</small>");
      else out.push('<button type="button" class="btn ghost tix" data-gig="' + g.id + '">' + esc(t.stSoon) + "</button><small>" + esc(t.viaPartner) + "</small>");
    } else {
      out.push('<span class="door">' + esc(g.status === "free" ? t.stFree : t.stDoor) + "</span>");
      out.push("<small>" + esc(g.tulpar ? t.tulpar : t.cashOnly) + "</small>");
    }
    return out.join("");
  }
  function renderLive() {
    var t = T();
    $$("#kindChips button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.kind === state.kind);
      b.onclick = function () { state.kind = b.dataset.kind; try { sessionStorage.setItem("koch_kind", state.kind); } catch (e) {} renderLive(); };
    });
    var list = upcoming.filter(function (g) { return state.kind === "all" || g.kind === state.kind; });
    $("#gigsEmpty").hidden = list.length > 0;
    $("#gigs").innerHTML = list.map(function (g) {
      var p = g.date.split("-"), d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
      var meta = [];
      if (g.time) meta.push(fill(t.doors, { t: g.time }));
      if (g.price) meta.push(g.price);
      var note = g.noteKey ? '<p class="gnote">' + esc(t.gnotes[g.noteKey]) + "</p>" : "";
      var permit = g.kind === "home" ? '<p class="permit">' + esc(g.permit === "pending" ? t.permitPending : t.permit) + "</p>" : "";
      return '<li class="gig ' + g.kind + '">' +
        '<div class="gdate"><span class="dd">' + p[2] + '</span><span class="mm">' + esc(t.months[+p[1] - 1]) + " " + p[0] + '</span><span class="wd">' + esc(t.days[d.getUTCDay()]) + "</span></div>" +
        '<div class="gmain"><p class="gk">' + esc(g.kind === "abroad" ? t.kindAbroad : t.kindHome) + "</p>" +
        "<h2>" + esc(g.artist) + (g.guest ? ' <span class="guest">' + esc(fill(t.withGuest, { g: g.guest })) + "</span>" : "") + "</h2>" +
        '<p class="gplace"><b>' + esc(place(g)) + "</b><br>" + venue(g) + "</p>" +
        (meta.length ? '<p class="gmeta">' + esc(meta.join(", ")) + "</p>" : "") + note + permit + "</div>" +
        '<div class="gstat">' + statusHtml(g) + "</div></li>";
    }).join("");
    $$("#gigs .tix").forEach(function (b) { b.onclick = function () { openTickets(b.dataset.gig); }; });
    $("#past").innerHTML = past.map(function (g) {
      return "<li><span class=\"k\">" + esc(fmtDate(g.date)) + "</span><span><b>" + esc(g.artist) + "</b>, " + esc(place(g)) + ", " + venue(g) + "</span></li>";
    }).join("");
  }
  function openTickets(id) {
    var t = T(), g = D.gigs.filter(function (x) { return x.id === id; })[0];
    if (!g) return;
    $("#tkH").textContent = fill(t.tkH, { a: g.artist });
    $("#tkWhere").textContent = fmtDate(g.date) + ". " + fill(t.tkWhere, { v: g.venue, c: place(g) });
    $("#tkBody").textContent = g.status === "onsale" ? fill(t.tkBody, { p: g.price || "" }) : t.tkSoon;
    var dlg = $("#tk");
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
  }

  /* ---------- artists / about ---------- */
  function renderArtists() {
    var t = T();
    $("#send").innerHTML = t.send.map(function (s) { return "<li>" + s + "</li>"; }).join("");
    $("#need").innerHTML = t.need.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");
    $("#pay").innerHTML = t.pay.map(function (s) { return "<li>" + s + "</li>"; }).join("");
    $("#contact").innerHTML = fill(t.contact, { artists: mail("artists"), info: mail("info") });
  }
  function renderAbout() { $("#about").innerHTML = T().about.map(function (s) { return "<p>" + s + "</p>"; }).join("");  $("#years").innerHTML = T().years.map(function (y) { return "<li><b>" + y[0] + "</b><span>" + y[1] + "</span></li>"; }).join(""); }

  /* ---------- language + routing ---------- */
  var RICH = { forms: 1, name: 1, shNote: 1 };
  function applyStatic() {
    var t = T();
    document.documentElement.lang = I18N.htmlLang[LANG];
    document.title = t.docTitle;
    $$("[data-i]").forEach(function (el) {
      var v = t[el.dataset.i]; if (v == null) return;
      if (RICH[el.dataset.i]) el.innerHTML = v; else el.textContent = fill(v, { n: D.releasesTotal });
    });
    $$("[data-ia]").forEach(function (el) { el.setAttribute("aria-label", t[el.dataset.ia]); });
    $$("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === LANG); });
    $("#footMail").textContent = mail("info");
  }
  function renderAll() { pvStop(); applyStatic(); renderHome(); renderCatalogue(); renderLive(); renderArtists(); renderAbout();
    var ly = (location.hash || "").match(/^#\/?lyrics\/([\w-]+)/); if (ly) renderLyrics(ly[1]);
    var rl = (location.hash || "").match(/^#\/?release\/([\w-]+)/); if (rl) renderRelease(rl[1]); }

  var TITLE = document.title;
  var PAGES = ["home", "catalogue", "live", "artists", "about"];
  function route() {
    pvStop();
    var h = (location.hash || "").replace(/^#\/?/, "").split("?")[0];
    var ly = h.match(/^lyrics\/([\w-]+)$/), rl = h.match(/^release\/([\w-]+)$/);
    if (ly) renderLyrics(ly[1]);
    if (rl) renderRelease(rl[1]); else document.title = TITLE;
    var page = ly ? "lyrics" : rl ? "release" : PAGES.indexOf(h) >= 0 ? h : "home";
    PAGES.concat("lyrics", "release").forEach(function (p) { $("#p-" + p).hidden = p !== page; });
    if (ly || rl) page = "catalogue";
    $$(".nav a").forEach(function (a) { if (a.dataset.page === page) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    window.scrollTo(0, 0);
  }

  $$("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      LANG = b.dataset.lang;
      try { localStorage.setItem("koch_lang", LANG); } catch (e) {}
      renderAll();
    });
  });
  window.addEventListener("hashchange", route);
  renderAll();
  route();
})();
