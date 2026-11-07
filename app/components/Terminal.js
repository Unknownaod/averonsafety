"use client";
import { useState } from "react";

const TABS = [["home", "HOME", "F1"], ["calls", "CALLS", "F2"], ["person", "PERSON", "F4"], ["vehicle", "VEHICLE", "F5"], ["bolo", "BOLO", "F7"]];
const STATUSES = ["AVAILABLE", "EN ROUTE", "ON SCENE", "OUT OF SERVICE"];
const cls = (s) => (s === "AVAILABLE" ? "g" : s === "OUT OF SERVICE" ? "x" : "a");

function Screen({ tab, status, setStatus }) {
  if (tab === "home")
    return (
      <div className="m-grid">
        <div>
          <div className="m-bar">UNIT STATUS <span className={"pill " + cls(status)}>{status}</span></div>
          <div className="m-btns">{STATUSES.map((s) => <button key={s} className={s === status ? "on" : ""} onClick={() => setStatus(s)}>{s}</button>)}</div>
        </div>
        <div>
          <div className="m-bar">ACTIVE ASSIGNMENTS</div>
          <div className="m-row"><b>2026-000041</b> P1 TRAFFIC STOP, 5th and Main</div>
          <div className="m-bar">ACTIVE BOLOS</div>
          <div className="m-row"><b>STOLEN VEHICLE</b> BOLO-2026-000007</div>
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
      </div>
    );
  if (tab === "person")
    return (
      <div>
        <div className="m-bar">PERSON SEARCH</div>
        <div className="m-search">FIRST LAST / PHONE / ADDRESS</div>
        <div className="m-row dim">Results come from configured sources. Nothing is simulated.</div>
      </div>
    );
  if (tab === "vehicle")
    return (
      <div>
        <div className="m-bar">VEHICLE / PLATE SEARCH</div>
        <div className="m-search">ABC1234 <span>CA</span></div>
        <div className="m-row dim">Plate lookup and VIN decoding.</div>
      </div>
    );
  return (
    <div>
      <div className="m-bar">BOLO</div>
      <div className="m-row"><b>WANTED PERSON</b> BOLO-2026-000003, expires 18:00</div>
      <div className="m-row"><b>STOLEN VEHICLE</b> BOLO-2026-000007, expires 20:00</div>
    </div>
  );
}

export default function Terminal() {
  const [tab, setTab] = useState("home");
  const [status, setStatus] = useState("AVAILABLE");
  return (
    <div className="term" aria-label="Interactive preview of Averon MDT with sample data">
      <div className="t-top">
        <b>AVERON MDT</b><span>UNIT <b>A-12</b></span><span className={"pill " + cls(status)}>{status}</span>
        <span className="grow" /><span className="ok">NET</span><span className="warn">CAD</span>
      </div>
      <div className="t-nav" role="tablist">
        {TABS.map(([k, l, f]) => <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? "on" : ""} onClick={() => setTab(k)}>{l}<small>{f}</small></button>)}
      </div>
      <div className="t-main"><Screen tab={tab} status={status} setStatus={setStatus} /></div>
      <div className="t-foot">Sample data</div>
    </div>
  );
}
