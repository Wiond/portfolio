# Project ideas to round out the dashboard

The FTM cycling-safety thesis project is a strong anchor (real engineering rigor,
real test data), but it reads as embedded/hardware rather than fullstack. Employers
hiring for a fullstack role will specifically be looking for evidence you can handle
a database, an API, and a real UI talking to both. A few options, roughly in order
of "fastest to build a credible version of":

1. **CRUD app with auth** — a small but complete app (e.g. a habit tracker, expense
   log, or recipe box) with user accounts, a Postgres/SQLite database, and a real
   REST or GraphQL API. This is the single highest-signal project for a fullstack
   role because it's exactly the shape of work most day-to-day tickets look like.

2. **Real-time feature** — a WebSocket-based chat, a live dashboard (e.g. streaming
   sensor data — you already have the hardware for this from the thesis project),
   or a collaborative tool (shared cursor, live editing). Shows you can handle
   state synchronization, not just request/response.

3. **This portfolio site** — once deployed, it's legitimately a third project. It
   demonstrates a typed, componentized, data-driven frontend architecture — call
   this out explicitly in its own card once you add it.

4. **API integration / data pipeline** — pull from a public API (transit, weather,
   finance), cache results server-side, expose your own endpoint. Shows backend
   and third-party integration skills a pure-frontend project can't.

Whichever you pick, the description field should mention the one hardest technical
decision you made and why — that's what actually gets asked about in interviews.
