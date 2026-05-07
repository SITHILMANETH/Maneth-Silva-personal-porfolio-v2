import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FiArrowUpRight, FiCheck, FiPlay } from "react-icons/fi";
import { featuredVideo, meta } from "../../content_option";

const planSteps = [
  "Choose a problem you already see every week on campus or at home.",
  "Talk to five people before naming the product.",
  "Sell the smallest useful version first, then improve it with real feedback.",
];

const resources = [
  {
    title: "One-page idea test",
    detail: "Problem, buyer, simple offer, price, and the first person you will ask.",
  },
  {
    title: "Weekend prototype",
    detail: "A landing page, a form, a demo, or a service trial is enough to learn.",
  },
  {
    title: "No vanity metrics",
    detail: "Track conversations, sign-ups, pre-orders, and paid work instead.",
  },
];

function VideoPlayer() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        src={featuredVideo.embedUrl}
        title={featuredVideo.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      className="video_poster"
      type="button"
      onClick={() => setIsLoaded(true)}
      aria-label={`Play ${featuredVideo.title}`}
    >
      <img src={featuredVideo.thumbnail} alt="" loading="eager" />
      <span className="video_poster__scrim" aria-hidden="true" />
      <span className="video_poster__play">
        <FiPlay aria-hidden="true" />
        Play video
      </span>
    </button>
  );
}

export const Home = () => {
  return (
    <HelmetProvider>
      <main id="top" className="video_site">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <section className="video_hero" aria-labelledby="site-title">
          <div className="video_hero__copy">
            <p className="eyebrow">Student business guide</p>
            <h1 id="site-title">How to start your first business as a student.</h1>
            <p>
              A clean watch page for Gohar Khan's short guide. No hype wall, no fake startup
              theater, just the video and a few useful prompts for taking action after it.
            </p>
            <div className="video_actions" aria-label="Primary actions">
              <a className="button_link" href="#watch">Watch here</a>
              <a
                className="button_link button_link--quiet"
                href={featuredVideo.watchUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open on YouTube <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="source_note" aria-label="Video source">
            <span>Video</span>
            <strong>{featuredVideo.title}</strong>
            <a href={featuredVideo.authorUrl} target="_blank" rel="noreferrer">
              by {featuredVideo.author}
            </a>
          </aside>
        </section>

        <section id="watch" className="watch_section" aria-labelledby="watch-title">
          <div className="section_heading">
            <p className="eyebrow">Watch</p>
            <h2 id="watch-title">Start with the video, then write down one move.</h2>
          </div>
          <div className="video_frame">
            <VideoPlayer />
          </div>
        </section>

        <section id="plan" className="plan_section" aria-labelledby="plan-title">
          <div className="section_heading">
            <p className="eyebrow">Plan</p>
            <h2 id="plan-title">A first business can be smaller than you think.</h2>
          </div>
          <ol>
            {planSteps.map((step) => (
              <li key={step}>
                <FiCheck aria-hidden="true" />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="resources" className="resources_section" aria-labelledby="resources-title">
          <div className="section_heading">
            <p className="eyebrow">Resources</p>
            <h2 id="resources-title">Keep the first version honest.</h2>
          </div>
          <div className="resource_list">
            {resources.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
};
