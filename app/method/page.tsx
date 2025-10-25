"use client";
import "bulma/css/bulma.min.css";

export default function Method() {
  const feeling = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("feeling") ?? "" : "";
  return (
    <>
      <section className="section">
        <h1 className="has-text-centered">HEADER</h1>
      </section>

      <section className="section">
        <p>here goes each section for the method</p>
        <a className="button is-primary" href={`/outro?feeling=${encodeURIComponent(feeling)}`}>End</a>
      </section>
    </>
  );
}