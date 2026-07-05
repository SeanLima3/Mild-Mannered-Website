/* ============================================================
   Renders upcoming shows + small niceties.
   Reads the SHOWS array from shows.js.
   ============================================================ */

(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderShows();

  function renderShows() {
    var listEl = document.getElementById("shows-list");
    var emptyEl = document.getElementById("shows-empty");
    if (!listEl || typeof SHOWS === "undefined") return;

    // Hide shows whose date is in the past (compare on day granularity)
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var upcoming = SHOWS
      .filter(function (s) { return new Date(s.date + "T00:00:00") >= today; })
      .sort(function (a, b) { return new Date(a.date) - new Date(b.date); });

    if (upcoming.length === 0) {
      if (emptyEl) emptyEl.hidden = false;
      return;
    }

    var months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

    upcoming.forEach(function (s) {
      var d = new Date(s.date + "T00:00:00");
      var li = document.createElement("li");
      li.className = "show";

      var cta;
      if (s.soldOut) {
        cta = '<span class="show__soldout">Sold Out</span>';
      } else if (s.tickets) {
        cta = '<a class="show__tickets" href="' + escapeAttr(s.tickets) +
              '" target="_blank" rel="noopener">Tickets</a>';
      } else {
        cta = '<span class="show__soldout">At the door</span>';
      }

      li.innerHTML =
        '<div class="show__date">' +
          '<span class="show__month">' + months[d.getMonth()] + '</span>' +
          '<span class="show__day">' + d.getDate() + '</span>' +
          '<span class="show__year">' + d.getFullYear() + '</span>' +
        '</div>' +
        '<div class="show__info">' +
          '<div class="show__venue">' + escapeHtml(s.venue) + '</div>' +
          '<div class="show__city">' + escapeHtml(s.city) + '</div>' +
        '</div>' +
        '<div class="show__cta">' + cta + '</div>';

      listEl.appendChild(li);
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function escapeAttr(str) {
    return escapeHtml(str).replace(/"/g, "&quot;");
  }
})();
