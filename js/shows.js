/* ============================================================
   UPCOMING SHOWS — edit this list to update the website.
   ------------------------------------------------------------
   To add a show, copy one { ... } block and fill it in.
   To remove a show, delete its block (past dates auto-hide).

   Fields:
     date    "YYYY-MM-DD"  (required)
     venue   venue name    (required)
     city    "City, ST"    (required)
     tickets link to tickets, or "" for none
     soldOut true / false
   ============================================================ */

const SHOWS = [
  {
    date: "2026-08-14",
    venue: "The Sinclair",
    city: "Cambridge, MA",
    tickets: "https://example.com/tickets",
    soldOut: false,
  },
  {
    date: "2026-09-02",
    venue: "Brooklyn Bowl",
    city: "Brooklyn, NY",
    tickets: "https://example.com/tickets",
    soldOut: false,
  },
  {
    date: "2026-09-20",
    venue: "The Basement",
    city: "Nashville, TN",
    tickets: "",
    soldOut: true,
  },
];
