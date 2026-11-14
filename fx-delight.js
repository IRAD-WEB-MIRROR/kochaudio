(function () {
  "use strict";
  var root = document.documentElement;
  function once(cls, el, ms) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); setTimeout(function () { el.classList.remove(cls); }, ms); }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-lang]");
    if (b) once("reblind", root, 700);
    var c = e.target.closest && e.target.closest("#artistChips button");
    if (c) setTimeout(function () { once("rolling", document.getElementById("releases"), 700); }, 0);
    var k = e.target.closest && e.target.closest("#kindChips button");
    if (k) setTimeout(function () { once("rolling", document.getElementById("gigs"), 700); }, 0);
    var row = e.target.closest && e.target.closest(".lyrow:not(.lyhead)");
    document.querySelectorAll(".lyrow.on").forEach(function (r) { if (r !== row) r.classList.remove("on"); });
    if (row) row.classList.toggle("on");
  });
})();
