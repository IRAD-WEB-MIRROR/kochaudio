(function () {
  "use strict";
  var D = window.KOCH, I = window.KOCH_I18N, card = document.querySelector(".hero .card"), body = card && card.querySelector(".card-body");
  if (!D || !I || !body || !document.body.animate) return;
  var REDUCE = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var POOL_L = "ABCDEFGHIJKLMNOPRSTUVYZ0123456789", POOL_C = "АБВГДЕЖЗИКЛМНОПРСТУФЧЮЯ0123456789";
  var SOON = { en: "Soon", ir: "Jakında", ru: "Скоро" };
  var wrapEl = document.createElement("div"); wrapEl.className = "board-wrap";
  var board = document.createElement("div"); board.className = "board"; board.setAttribute("aria-hidden", "true");
  var nav = document.createElement("div"); nav.className = "board-nav";
  var link = document.createElement("a"); link.className = "board-link"; link.hidden = true;
  var foot = document.createElement("div"); foot.className = "board-foot";
  var route = document.getElementById("route"), cr = card.querySelector(".card-route");
  if (route) foot.appendChild(route);
  foot.appendChild(nav);
  if (cr) cr.hidden = true;
  wrapEl.appendChild(board); wrapEl.appendChild(foot);
  body.querySelector("h1").after(wrapEl);
  card.classList.add("has-board");
  var hero = card.closest(".hero"); if (hero) hero.classList.add("stage");
  var split = document.querySelector("#p-home .split"); if (split) split.hidden = true;
  var header = document.querySelector(".top");
  var cols, rows, wide, tiles = [], msgs = [], idx = 0, timer = null, visible = true;

  function lang() { var l = document.documentElement.lang; return l === "ky" ? "ir" : l === "ru" ? "ru" : "en"; }
  function up(s) { return String(s).toLocaleUpperCase(lang() === "ru" ? "ru" : "en").replace(/[‘’]/g, "'"); }
  function fit(s, w) { s = up(s); return s.length > w ? s.slice(0, w) : s; }
  function pad(s, w) { s = fit(s, w); while (s.length < w) s += " "; return s; }
  function wrap(text, w) {
    var out = [], line = "";
    up(text).split(/\s+/).forEach(function (word) {
      while (word.length > w) { if (line) { out.push(line); line = ""; } out.push(word.slice(0, w)); word = word.slice(w); }
      if (!word) return;
      if (!line) line = word; else if ((line + " " + word).length <= w) line += " " + word; else { out.push(line); line = word; }
    });
    if (line) out.push(line);
    return out;
  }
  function group(items, w) {
    var out = [], line = "";
    items.forEach(function (it) { it = fit(it, w); if (!line) line = it; else if ((line + "  " + it).length <= w) line += "  " + it; else { out.push(line); line = it; } });
    if (line) out.push(line);
    return out;
  }
  function clock() { var d = new Date(Date.now() + 6 * 3600e3); return ("0" + d.getUTCHours()).slice(-2) + ":" + ("0" + d.getUTCMinutes()).slice(-2); }

  /* ---------- tiles: a real two-half flap ---------- */
  function makeTile() {
    var t = document.createElement("span"); t.className = "t";
    t.innerHTML = '<span class="h top"><b> </b></span><span class="h bot"><b> </b></span><span class="f fold"><b> </b></span><span class="f unfold"><b> </b></span>';
    var q = t.querySelectorAll("b");
    return { el: t, top: q[0], bot: q[1], fold: q[2], unfold: q[3], fF: t.children[2], fU: t.children[3], ch: " " };
  }
  function setNow(tl, c) { tl.top.textContent = tl.bot.textContent = c; tl.ch = c; }
  function flip(tl, c, dur) {
    var old = tl.ch; tl.ch = c;
    tl.top.textContent = c; tl.bot.textContent = old; tl.fold.textContent = old; tl.unfold.textContent = c;
    tl.fF.style.visibility = tl.fU.style.visibility = "visible";
    tl.el.classList.add("falling");
    var a = tl.fF.animate([{ transform: "rotateX(0deg)", filter: "brightness(1)" }, { transform: "rotateX(-90deg)", filter: "brightness(1.5)" }], { duration: dur * .5, easing: "ease-in", fill: "forwards" });
    var b = tl.fU.animate([{ transform: "rotateX(90deg)", filter: "brightness(.6)" }, { transform: "rotateX(0deg)", filter: "brightness(1)" }], { duration: dur * .5, delay: dur * .5, easing: "cubic-bezier(.3,1.4,.6,1)", fill: "forwards" });
    return b.finished.then(function () {
      tl.bot.textContent = c; tl.fF.style.visibility = tl.fU.style.visibility = "hidden";
      tl.el.classList.remove("falling"); a.cancel(); b.cancel();
    });
  }

  function size() {
    var cs = getComputedStyle(wrapEl), w = wrapEl.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    w = Math.min(w, 1440);
    var hh = header ? header.offsetHeight : 0;
    document.documentElement.style.setProperty("--hh", hh + "px");
    wide = w >= 900;
    cols = w >= 900 ? 32 : w >= 560 ? 20 : 14;
    var gap = 3, inner = 2 * gap, tile = (w - inner - (cols - 1) * gap) / cols, th = tile * 1.4;
    var avail = window.innerHeight - hh - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) - (foot.offsetHeight || 80) - 8;
    rows = Math.max(6, Math.min(12, Math.floor((avail + gap) / (th + gap))));
    board.style.setProperty("--cols", cols);
    board.style.setProperty("--tf", (tile * 1.2).toFixed(1) + "px");
    if (tiles.length !== cols * rows) {
      board.innerHTML = ""; tiles = [];
      for (var i = 0; i < cols * rows; i++) { var tl = makeTile(); board.appendChild(tl.el); tiles.push(tl); }
      board.appendChild(link);
      return true;
    }
    return false;
  }

  /* ---------- the cards ---------- */
  function build() {
    var t = I[lang()], today = new Date(Date.now() + 6 * 3600e3).toISOString().slice(0, 10);
    var rel = D.releases.filter(function (r) { return !(r.type === "single" && D.onAlbum && D.onAlbum[r.artist + "|" + r.title]); }).sort(function (a, b) { return (b.date || b.year + "-00") > (a.date || a.year + "-00") ? 1 : -1; }).slice(0, 3);
    var gigs = D.gigs.filter(function (g) { return g.date >= today; }).sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    msgs = [{ kind: "tag", rows: wrap(t.tagline, cols).map(function (s) { return { text: s }; }) }];
    rel.forEach(function (r, i) {
      var L = function (s, extra) { var o = { text: s }; for (var k in extra) o[k] = extra[k]; return o; };
      var body = [L(wrap(t.latestH, cols)[0], { hd: true }), L("")]
        .concat(wrap(r.title, cols).slice(0, 2).map(function (s) { return L(s); }))
        .concat(wrap(r.artist, cols).slice(0, 2).map(function (s) { return L(s); }))
        .concat([L(""), L(up(t.type[r.type] + " " + r.year), { am: true })])
        .concat(wrap(r.label, cols).slice(0, 1).map(function (s) { return L(s); }))
        .concat([L("")], wrap(t.listenOn, cols).slice(0, 1).map(function (s) { return L(s, { am: true }); }), group(D.platforms, cols).slice(0, 2).map(function (s) { return L(s); }));
      for (var q = body.length - 1; body.length > rows && q > 0; q--) if (body[q].text === "") body.splice(q, 1);
      msgs.push({ kind: "rel", href: (window.KOCH_relHref && window.KOCH_relHref(r)) || "#/catalogue", label: t.latestH + ": " + r.title + ", " + r.artist, rows: body.slice(0, rows) });
      if (i === 0 && gigs.length) msgs.push(departures(t, gigs));
    });
    nav.innerHTML = msgs.map(function (_, i) { return '<button type="button" aria-label="' + (i + 1) + '"></button>'; }).join("");
    Array.prototype.forEach.call(nav.children, function (b, i) { b.onclick = function () { show(i); schedule(); }; });
  }
  function status(t, g) { return g.kind === "home" ? t.kindHome : g.status === "onsale" ? t.stOnsale : SOON[lang()]; }
  function departures(t, gigs) {
    var out = [{ text: wrap(t.nextH, cols)[0], hd: true }], gapRow = rows >= 9; if (gapRow) out.push({ text: "" });
    var n = wide ? rows - out.length : Math.floor((rows - out.length) / 2);
    gigs.slice(0, n).forEach(function (g) {
      var p = g.date.split("-"), date = pad(("0" + +p[2]).slice(-2) + " " + t.months[+p[1] - 1].slice(0, 3), 6), city = t.cities[g.city] || g.city;
      if (wide) {
        out.push({ cells: [[0, date], [7, pad(city, 8)], [16, pad(g.artist, 8)], [25, pad(status(t, g), 7), "am"]] });
      } else {
        out.push({ cells: [[0, date], [7, pad(g.artist, cols - 7)]] });
        out.push({ cells: [[0, pad(city, cols - 8)], [cols - 7, pad(status(t, g), 7), "am"]] });
      }
    });
    return { kind: "gig", href: "#/live", label: t.nextH, rows: out };
  }
  function grid(msg) {
    var lines = msg.rows.slice(0, rows), top = msg.kind === "tag" ? Math.max(1, Math.floor((rows - lines.length) / 2)) : 0, g = [];
    if (msg.kind === "tag") lines = lines.map(function (ln) { var s = ln.text, l = Math.floor((cols - s.length) / 2); return { text: new Array(l + 1).join(" ") + s }; });
    for (var i = 0; i < cols * rows; i++) g.push({ ch: " " });
    lines.forEach(function (ln, r) {
      var base = (r + top) * cols;
      if (ln.cells) ln.cells.forEach(function (c) { for (var k = 0; k < c[1].length && c[0] + k < cols; k++) g[base + c[0] + k] = { ch: c[1][k], am: c[2] === "am" && c[1][k] !== " " }; });
      else for (var k = 0; k < ln.text.length && k < cols; k++) g[base + k] = { ch: ln.text[k], hd: ln.hd, am: ln.am };
    });
    var c = clock(), r0 = top === 0 ? (lines[0] && lines[0].text ? lines[0].text.length : cols) : 0;
    if (r0 + 6 <= cols) for (var j = 0; j < 5; j++) g[cols - 5 + j] = { ch: c[j], am: true };
    return g;
  }
  function pool() { return lang() === "ru" ? POOL_C : POOL_L; }
  function show(i) {
    idx = (i + msgs.length) % msgs.length;
    var msg = msgs[idx];
    Array.prototype.forEach.call(nav.children, function (b, j) { b.setAttribute("aria-pressed", j === idx); });
    link.hidden = !msg.href; if (msg.href) { link.href = msg.href; link.setAttribute("aria-label", msg.label); }
    paint(grid(msg));
  }
  function paint(g) {
    var P = pool();
    tiles.forEach(function (tl, k) {
      var want = g[k];
      tl.el.classList.toggle("hd", !!want.hd && want.ch !== " ");
      tl.el.classList.toggle("am", !!want.am);
      if (tl.ch === want.ch) return;
      if (REDUCE) { setNow(tl, want.ch); return; }
      var col = k % cols, steps = 3 + ((Math.random() * 10) | 0), n = 0, token = {};
      tl.token = token;
      setTimeout(function step() {
        if (tl.token !== token) return;
        n++;
        var c = n >= steps ? want.ch : P[(Math.random() * P.length) | 0];
        flip(tl, c, 140 + ((Math.random() * 40) | 0)).then(function () { if (n < steps && tl.token === token) step(); });
      }, col * 20 + ((Math.random() * 270) | 0));
    });
  }
  function schedule() { clearTimeout(timer); timer = setTimeout(function () { if (visible && !document.hidden) show(idx + 1); schedule(); }, msgs[idx] && msgs[idx].kind === "gig" ? 10000 : 8000); }
  if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(board);
  var lastClock = clock();
  setInterval(function () { var c = clock(); if (c !== lastClock && visible && !document.hidden) { lastClock = c; paint(grid(msgs[idx])); } }, 5000);
  function restart(keep) { size(); build(); show(keep ? Math.min(idx, msgs.length - 1) : 0); schedule(); }
  document.addEventListener("click", function (e) { if (e.target.closest && e.target.closest("[data-lang]")) setTimeout(function () { restart(true); }, 0); });
  var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { var c = cols, changed = size(); if (changed || cols !== c) { build(); show(idx); } }, 150); });
  restart(false);
})();
