(function () {
  "use strict";
  var REDUCE = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var POOL = "ABCDEFGHIJKLMNOPRSTUVYZ0123456789АБВГДЕЖЗИКЛМНОПРСТУФЮЯ";
  var SEL = ".gdate .dd, #next .k";
  function build(el) {
    if (el.dataset.flapped === el.textContent) return;
    var text = el.textContent.toUpperCase();
    el.setAttribute("aria-label", el.textContent);
    el.classList.add("flap");
    el.innerHTML = "";
    var cells = [];
    for (var i = 0; i < text.length; i++) {
      var c = document.createElement("span");
      c.setAttribute("aria-hidden", "true");
      if (text[i] === " ") { c.className = "cell sp"; c.textContent = " "; }
      else { c.className = "cell"; c.textContent = text[i]; cells.push({ el: c, ch: text[i] }); }
      el.appendChild(c);
    }
    el.dataset.flapped = el.textContent;
    el._cells = cells;
    if (!REDUCE) watch(el);
  }
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); spin(e.target); } });
  }, { threshold: 0.4 }) : null;
  function watch(el) { el._cells.forEach(function (c) { c.el.textContent = POOL[(Math.random() * POOL.length) | 0]; }); if (io) io.observe(el); else spin(el); }
  function spin(el) {
    el._cells.forEach(function (c, i) {
      var steps = 4 + i * 2 + ((Math.random() * 9) | 0), n = 0;
      (function tick() {
        n++;
        c.el.classList.remove("tick"); void c.el.offsetWidth; c.el.classList.add("tick");
        c.el.textContent = n >= steps ? c.ch : POOL[(Math.random() * POOL.length) | 0];
        if (n < steps) setTimeout(tick, 105 + ((Math.random() * 40) | 0));
      })();
    });
  }
  function scan() { document.querySelectorAll(SEL).forEach(build); }
  var pending = false;
  var mo = new MutationObserver(function () { if (pending) return; pending = true; requestAnimationFrame(function () { pending = false; scan(); }); });
  ["gigs", "next"].forEach(function (id) { var n = document.getElementById(id); if (n) mo.observe(n, { childList: true }); });
  window.addEventListener("hashchange", function () { setTimeout(function () {
    document.querySelectorAll(".flap").forEach(function (el) { if (el.offsetParent && el._cells) { if (io) { io.unobserve(el); io.observe(el); } } });
  }, 30); });
  scan();
})();
