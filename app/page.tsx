"use client";
import "bulma/css/bulma.min.css";


const EMERGENCIES = [
  "Stressed out", "Can’t sleep", "Feeling overwhelmed", "Feeling angry/upset",
  "Overthinking loop", "Social overload", "Doomscrolling", "Zero motivation", "Breakup"
] as const;

export default function Home() {
  return (
    <>
      <section className="section">
        <h1 className="has-text-centered">HEADER</h1>
      </section>

      <section className="section">
        <h1 className="title">EMERGENCIES</h1>
        <div className="columns is-centered is-multiline">
          {EMERGENCIES.map(f => (
            <div className="column is-one-third">
              <a className="box" href={`/intro?feeling=${encodeURIComponent(f)}`}>
                {f}
              </a>
            </div>
          ))}
        </div>
        <p className="subtitle is-7">Tap one to continue →</p>
      </section>
    </>
  );
}