import Link from "next/link";
import Terminal from "./components/Terminal";

const ROLES = [
  { t: "Patrol", d: "Set your status, see your active assignments, search people and plates, and write reports without leaving the vehicle." },
  { t: "Dispatch", d: "Watch the live 911 feed, create and track calls, and message units and channels from the same window." },
  { t: "Command staff", d: "Issue BOLOs with expiry times, review reports through draft, submitted, approved or rejected, and read the full audit history." },
];

const CONNECTED = [
  "Live 911 calls and dispatch audio",
  "Public vehicle location feeds",
  "FBI Wanted and city warrant open data",
  "Person search and plate lookup providers",
  "Maps, address search and routing",
];

const SECURITY = [
  { t: "Sign-on required", d: "Every session starts with a user ID and password, and sessions are validated on each request." },
  { t: "Every action logged", d: "Creates, updates and deletes are recorded with who did them and when, and reviewable in History." },
  { t: "Local records", d: "Calls, units, BOLOs, reports and messages entered on a terminal are stored on that machine." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-in">
          <div className="hero-copy">
            <h1>Every unit. Every call. One terminal.</h1>
            <p>Averon builds mobile data terminals for public safety. Work live 911 activity, run person and plate searches, and manage calls, BOLOs and reports from the vehicle.</p>
            <div className="cta">
              <Link className="btn" href="/contact">Request a demo</Link>
              <Link className="btn ghost-d" href="/products">Explore Averon MDT</Link>
            </div>
          </div>
          <Terminal />
        </div>
      </section>

      <section className="section">
        <h2>One window for the whole shift</h2>
        <p className="lead">Averon MDT replaces a stack of separate tools. Every main screen sits on a function key, with day and night modes and adjustable text size for the cab.</p>
        <div className="cards">
          <article><h3>Live 911 feed</h3><p>Calls refresh every 15 seconds. Filter by agency and time, play dispatch audio and import a call into your CAD.</p></article>
          <article><h3>Search</h3><p>Look up people by name, phone or address, and plates or VINs, with wanted and warrant lists from public sources.</p></article>
          <article><h3>Reports and BOLOs</h3><p>Write reports that move through approval, and issue BOLOs that expire when they should.</p></article>
        </div>
        <Link className="more" href="/products">See everything in Averon MDT</Link>
      </section>

      <section id="solutions" className="section tint">
        <div className="wrap">
          <h2>Built for each role</h2>
          <div className="cards">
            {ROLES.map((r) => <article key={r.t}><h3>{r.t}</h3><p>{r.d}</p></article>)}
          </div>
        </div>
      </section>

      <section id="security" className="section">
        <h2>Accountability built in</h2>
        <div className="cards">
          {SECURITY.map((s) => <article key={s.t}><h3>{s.t}</h3><p>{s.d}</p></article>)}
        </div>
      </section>

      <section id="integrations" className="section tint">
        <div className="wrap two">
          <div>
            <h2>Integrations</h2>
            <p className="lead">Averon MDT connects to live public and commercial data sources. Results always come from a real source or your local records.</p>
          </div>
          <div>
            <ul className="ticks">{CONNECTED.map((c) => <li key={c}>{c}</li>)}</ul>
            <p className="small">Agency CAD and RMS, and CLETS and NCIC queries, require authorized agency access.</p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>See Averon MDT in your agency's workflow</h2>
        <Link className="btn" href="/contact">Request a demo</Link>
      </section>
    </>
  );
}
