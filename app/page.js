"use client";
import { useState } from "react";

const TABS = [
  ["home", "HOME", "F1"], ["calls", "CALLS", "F2"], ["map", "MAP", "F3"], ["person", "PERSON", "F4"],
  ["vehicle", "VEHICLE", "F5"], ["messages", "MESSAGES", "F6"], ["bolo", "BOLO", "F7"], ["reports", "REPORTS", "F8"],
];
const STATUSES = ["AVAILABLE", "EN ROUTE", "ON SCENE", "OUT OF SERVICE"];
const pillCls = (s) => (s === "AVAILABLE" ? "g" : s === "OUT OF SERVICE" ? "x" : "a");

function Screen({ tab, status, setStatus }) {
  if (tab === "home")
    return (
      <div className="m-grid">
        <div>
          <div className="m-bar">UNIT STATUS <span className={"pill " + pillCls(status)}>{status}</span></div>
          <div className="m-btns">
            {STATUSES.map((s) => (
              <button key={s} className={s === status ? "on" : ""} onClick={() => setStatus(s)}>{s}</button>
            ))}
          </div>
          <div className="m-bar">SYSTEM CONNECTIVITY</div>
          <table className="m-kv"><tbody>
            <tr><th>NETWORK</th><td className="ok">ONLINE</td></tr>
            <tr><th>LIVE 911 FEED</th><td className="ok">CONNECTED</td></tr>
            <tr><th>AGENCY CAD / RMS</th><td className="warn">NOT CONNECTED</td></tr>
          </tbody></table>
        </div>
        <div>
          <div className="m-bar">ACTIVE ASSIGNMENTS</div>
          <div className="m-row"><b>2026-000041</b> P1 TRAFFIC STOP, 5th and Main</div>
          <div className="m-bar">NOTIFICATIONS: ACTIVE BOLOS</div>
          <div className="m-row"><b>STOLEN VEHICLE</b> BOLO-2026-000007, grey sedan</div>
        </div>
      </div>
    );
  if (tab === "calls")
    return (
      <div>
        <div className="m-bar">LIVE 911 CAD FEED <span className="ok">LIVE</span></div>
        <table className="m-t"><thead><tr><th>RECEIVED</th><th>PRI</th><th>TYPE</th><th>LOCATION</th></tr></thead><tbody>
          <tr><td>14:02:11</td><td>1</td><td>ACCIDENT</td><td>Harbor Rd</td></tr>
          <tr><td>14:01:36</td><td>2</td><td>ALARM</td><td>Dunmore Plaza</td></tr>
          <tr><td>13:58:50</td><td>3</td><td>WELFARE CHECK</td><td>41 Larch St</td></tr>
        </tbody></table>
        <div className="m-row dim">Select a call to hear dispatch audio or import it into your local CAD.</div>
      </div>
    );
  if (tab === "vehicle")
    return (
      <div>
        <div className="m-bar">VEHICLE / PLATE SEARCH</div>
        <div className="m-search">ABC1234 <span>CA</span></div>
        <table className="m-kv"><tbody>
          <tr><th>MAKE / MODEL</th><td>Sample result</td></tr>
          <tr><th>SOURCE</th><td>Configured lookup provider</td></tr>
        </tbody></table>
        <div className="m-row dim">Plate and VIN results come from live lookup providers, never simulated data.</div>
      </div>
    );
  return (
    <div>
      <div className="m-bar">{tab.toUpperCase()}</div>
      <div className="m-row dim">Open the full terminal to use this screen.</div>
    </div>
  );
}

function Terminal() {
  const [tab, setTab] = useState("home");
  const [status, setStatus] = useState("AVAILABLE");
  return (
    <div className="term" aria-label="Interactive preview of the Averon MDT. Sample data.">
      <div className="t-top">
        <b>AVERON MDT</b><span>UNIT <b>A-12</b></span>
        <span className={"pill " + pillCls(status)}>{status}</span>
        <span className="grow" /><span className="ok">NET</span><span className="warn">CAD</span>
      </div>
      <div className="t-nav" role="tablist">
        {TABS.map(([k, l, f]) => (
          <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? "on" : ""} onClick={() => setTab(k)}>
            {l}<small>{f}</small>
          </button>
        ))}
      </div>
      <div className="t-main"><Screen tab={tab} status={status} setStatus={setStatus} /></div>
      <div className="t-foot">Sample data. Try the tabs and status buttons.</div>
    </div>
  );
}

const FEATURES = [
  { t: "Live 911 feed", d: "Incoming calls refresh every 15 seconds. Filter by agency and time window, play dispatch audio, and import a call into your local CAD." },
  { t: "Calls and units", d: "Create and track incidents with priorities and categories, and keep a roster of units, officers and vehicles." },
  { t: "Map and routing", d: "A dark map with address search and turn-by-turn routing to the scene." },
  { t: "Person search", d: "Search by name, phone or address, and check wanted and warrant lists from public sources." },
  { t: "Vehicle and plate search", d: "Look up a plate or decode a VIN, including plates from Canada, the UK, Australia and the UAE." },
  { t: "BOLOs, reports and history", d: "Issue BOLOs with expiry times, write reports that move from draft to approved, and review every action in the audit history." },
];

const CONNECTED = [
  "Averon 911 API (live calls and dispatch audio)",
  "Public ArcGIS vehicle location feeds",
  "FBI Wanted list",
  "Norfolk and Baton Rouge warrant open data",
  "Chicago PD arrests open data (anonymized)",
  "Whitepages person search",
  "RegCheck plate lookup and NHTSA VIN decoding",
  "OpenStreetMap maps and routing",
];

const FAQ = [
  { q: "What is Averon MDT?", a: "A desktop mobile data terminal. It puts calls, the map, person and vehicle search, BOLOs, reports and messaging in one window, built to be driven from the keyboard." },
  { q: "Is it connected to my agency's CAD, CLETS or NCIC?", a: "No. Those systems need authorized agency access, and the terminal shows them as not connected. Averon works from your own local records plus the public sources listed above." },
  { q: "Where are records stored?", a: "Calls, units, BOLOs, reports and messages entered on a terminal are stored locally on that machine. It is not a government database." },
  { q: "Does it show simulated results?", a: "No. Every result comes from your local records or a configured source. If a source is not set up, the terminal says so." },
  { q: "Is Averon affiliated with a police department?", a: "No. Averon Safety is independent software and is not affiliated with or endorsed by any government agency." },
];

export default function Home() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <header className="nav">
        <a className="brand" href="#top"><span className="mark" aria-hidden="true" />Averon Safety</a>
        <nav aria-label="Main">
          <a href="#features">Features</a>
          <a href="#data">Data sources</a>
          <a href="#faq">FAQ</a>
          <a className="btn small" href="/download">Download</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <h1>The terminal your unit works from</h1>
          <p>Averon MDT is a desktop mobile data terminal. Live 911 calls, map, person and plate search, BOLOs, reports and messaging in one window, switched with F1 to F10.</p>
          <div className="cta">
            <a className="btn" href="/download">Download Averon MDT</a>
            <a className="btn ghost" href="#features">See what is inside</a>
          </div>
          <Terminal />
        </section>

        <section id="features" className="section">
          <h2>Everything on one screen</h2>
          <div className="grid">
            {FEATURES.map((f) => (
              <article key={f.t}><h3>{f.t}</h3><p>{f.d}</p></article>
            ))}
          </div>
          <p className="note">Built for the cab: day and night modes, adjustable text size, and every main screen on a function key.</p>
        </section>

        <section id="data" className="section band">
          <h2>Honest about its data</h2>
          <div className="two">
            <div>
              <h3>Connected</h3>
              <ul>{CONNECTED.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
            <div>
              <h3>Not connected</h3>
              <ul>
                <li>Agency CAD and RMS</li>
                <li>CLETS and NCIC queries, which require authorized agency access</li>
              </ul>
              <p>Results come from your local records or a configured source. Nothing is simulated.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="section narrow">
          <h2>Questions</h2>
          <div className="faq">
            {FAQ.map((f, i) => (
              <div key={f.q} className={"qa" + (open === i ? " open" : "")}>
                <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{f.q}</button>
                {open === i && <p>{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="final">
          <h2>Get Averon MDT</h2>
          <a className="btn" href="/download">Download</a>
        </section>
      </main>

      <footer className="foot">
        <span>Averon Safety. Independent software, not affiliated with any government agency.</span>
        <nav aria-label="Footer"><a href="#features">Features</a><a href="#faq">FAQ</a></nav>
      </footer>
    </>
  );
}
