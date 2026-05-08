import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { FiFileText } from "react-icons/fi";
import PageIntro from "../../components/pageintro";
import {
  dataabout,
  meta,
  worktimeline,
  services,
} from "../../content_option";

const publicPath = (path) => `${process.env.PUBLIC_URL}${path}`;

export const About = () => {
  return (
    <HelmetProvider>
      <main className="about_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Container>
          <div className="about_hero">
            <PageIntro eyebrow="About" title="A builder's notebook, cleaned up enough to share.">
              {dataabout.aboutme.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </PageIntro>
            <figure className="about_portrait">
              <img src={publicPath("/images/about-photo.png")} alt="Maneth Silva" />
            </figure>
          </div>

          <section className="about_resume" aria-labelledby="resume-title">
            <div>
              <p className="eyebrow">Short version</p>
              <h2 id="resume-title">{dataabout.title}</h2>
            </div>
            <div className="about_resume__copy">
              <p>
                I am most useful where hardware, code, and testing meet. I like projects
                that can be measured, opened up, fixed, and tried again.
              </p>
              <a
                className="button_link"
                href={publicPath(dataabout.cv)}
                target="_blank"
                rel="noreferrer"
              >
                <FiFileText aria-hidden="true" />
                View CV
              </a>
            </div>
          </section>

          <section className="about_ledger" aria-labelledby="ledger-title">
            <div>
              <p className="eyebrow">Current tracks</p>
              <h2 id="ledger-title">What I keep coming back to.</h2>
            </div>
            <div className="about_ledger__rows">
              {worktimeline.map((item) => (
                <article key={item.jobtitle}>
                  <span>{item.date}</span>
                  <h3>{item.jobtitle}</h3>
                  <p>{item.where}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about_services" aria-labelledby="focus-title">
            <p className="eyebrow">Focus</p>
            <h2 id="focus-title">The useful overlap.</h2>
            <div>
              {services.map((service) => (
                <article key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </section>
        </Container>
      </main>
    </HelmetProvider>
  );
};
