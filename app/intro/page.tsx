"use client";
import "bulma/css/bulma.min.css";

export default function Intro() {
  const feeling = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("feeling") ?? "" : "";
  return (
    <>
      <section className="section">
        <h1 className="has-text-centered">HEADER</h1>
      </section>

      <section className="section">
        <h1 className="title">YOU ARE FEELING</h1>
        <h1 className="subtitle">
          {feeling}
        </h1>
        
        <p>Here more info idk</p>

        <a className="button is-primary" href={`/method?feeling=${encodeURIComponent(feeling)}`}>Start</a>
      </section>
    </>
  );
}