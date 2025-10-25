"use client";
import "bulma/css/bulma.min.css";

export default function Outro() {
  const feeling = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("feeling") ?? "" : "";
  return (
    <>
      <section className="section">
        <h1 className="has-text-centered">HEADER</h1>
      </section>

      <section className="section">
        <p>here goes the tips and recommendations</p>
        <a className="button is-primary" href="/">Back to home</a>
      </section>
    </>
  );
}