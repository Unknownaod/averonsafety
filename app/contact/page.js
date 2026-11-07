"use client";
import { useState } from "react";

const SALES_EMAIL = "sales@example.com"; // replace with your address

export default function Contact() {
  const [f, setF] = useState({ name: "", agency: "", role: "", email: "", msg: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nAgency: ${f.agency}\nRole: ${f.role}\nEmail: ${f.email}\n\n${f.msg}`;
    window.location.href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent("Averon demo request")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section className="section narrow">
      <h1 className="h1s">Request a demo</h1>
      <p className="lead">Tell us about your agency and we will set up a walkthrough of Averon MDT.</p>
      <form onSubmit={submit} className="form">
        <label>Name<input required value={f.name} onChange={set("name")} autoComplete="name" /></label>
        <label>Agency<input required value={f.agency} onChange={set("agency")} /></label>
        <label>Role<input value={f.role} onChange={set("role")} /></label>
        <label>Work email<input required type="email" value={f.email} onChange={set("email")} autoComplete="email" /></label>
        <label>What would you like to see?<textarea rows={4} value={f.msg} onChange={set("msg")} /></label>
        <button className="btn" type="submit">Send request</button>
      </form>
    </section>
  );
}
