import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { dataportfolio, introdata, meta, services } from "../../content_option";

const benchNotes = [
  "Micro mouse sensor readings are still the first thing I check before changing code.",
  "Battle bot testing keeps reminding me that repair access is a design feature.",
  "PCB notes are being kept close to each project so future-me can actually use them.",
];

export const Home = () => {
  const featuredProjects = dataportfolio.slice(0, 4);

  return (
    <HelmetProvider>
      <main id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <section className="home_hero" aria-labelledby="home-title">
          <div className="home_hero__copy">
            <p className="eyebrow">{introdata.badge}</p>
            <h1 id="home-title">{introdata.title}</h1>
            <p>{introdata.description}</p>
            <div className="home_actions" aria-label="Primary actions">
              <Link className="button_link" to="/portfolio">Read the project log</Link>
              <Link className="button_link button_link--quiet" to="/contact">Start a conversation</Link>
            </div>
          </div>

          <aside className="bench_note" aria-label="Current bench notes">
            <h2>On the bench</h2>
            <ul>
              {benchNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="home_section build_areas" aria-labelledby="build-areas-title">
          <div>
            <p className="eyebrow">What shows up here</p>
            <h2 id="build-areas-title">Practical builds, kept close to the work.</h2>
          </div>
          <dl>
            {services.map((service) => (
              <div key={service.title}>
                <dt>{service.title}</dt>
                <dd>{service.description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="home_section project_notes" aria-labelledby="recent-work-title">
          <div className="section_heading">
            <p className="eyebrow">Recent work</p>
            <h2 id="recent-work-title">A few things worth opening first.</h2>
          </div>
          <div className="project_notes__list">
            {featuredProjects.map((project) => (
              <article key={project.title}>
                <p>{project.status}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </article>
            ))}
          </div>
          <Link className="text_link" to="/portfolio">See all projects</Link>
        </section>

        <section className="home_section working_style" aria-labelledby="working-style-title">
          <p className="eyebrow">How I work</p>
          <h2 id="working-style-title">Small loops beat grand plans.</h2>
          <ol>
            <li>Start with the part that can be tested soonest.</li>
            <li>Write down what failed while the details are still fresh.</li>
            <li>Keep the interface simple enough that someone else can try it.</li>
          </ol>
        </section>
      </main>
    </HelmetProvider>
  );
};
