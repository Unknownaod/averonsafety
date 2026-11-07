import Link from "next/link";

export const metadata = { title: "Averon MDT | Averon Safety" };

const SCREENS = [
  ["Home", "Your officer profile, unit status buttons, active assignments, dispatch traffic and active BOLOs."],
  ["Calls", "Local CAD calls and units, plus the live 911 feed with dispatch audio and one-click import."],
  ["Map", "A dark map with address search and driving routes to the scene."],
  ["Person", "Search by name, phone or address, with wanted and warrant lists from public sources."],
  ["Vehicle", "Plate lookup and VIN decoding, including plates from Canada, the UK, Australia and the UAE."],
  ["Messages", "Channel and unit-to-unit messaging, with unread counts on the tab."],
  ["BOLO", "Wanted and missing persons, stolen vehicles and vehicles of interest, each with an expiry time."],
  ["Reports", "Numbered reports tied to incidents that move from draft to submitted, approved or rejected."],
  ["History", "A searchable audit log of every create, update and delete, with the user who made it."],
  ["Arrests", "Search anonymized public arrest data by charge text and date range."],
];

export default function Products() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Averon MDT</h1>
          <p className="lead">A desktop mobile data terminal for patrol, dispatch and command staff. Ten screens, one window, each on a function key.</p>
          <div className="cta"><Link className="btn" href="/contact">Request a demo</Link></div>
        </div>
      </section>
      <section className="section">
        <div className="screens">
          {SCREENS.map(([t, d], i) => (
            <article key={t}><span className="fkey">{i < 10 ? "F" + (i + 1) : "-"}</span><div><h3>{t}</h3><p>{d}</p></div></article>
          ))}
        </div>
        <p className="small">Agency CAD and RMS, and CLETS and NCIC queries, require authorized agency access.</p>
      </section>
    </>
  );
}
