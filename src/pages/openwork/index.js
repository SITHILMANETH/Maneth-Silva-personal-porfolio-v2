import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import {
  FiExternalLink,
  FiMail,
  FiUploadCloud,
} from "react-icons/fi";
import PageIntro from "../../components/pageintro";
import { meta, openForWork } from "../../content_option";

const buildProjectMail = () => {
  const subject = encodeURIComponent("Small build request");
  const body = encodeURIComponent(
    "Hi Maneth,\n\n" +
      "What I need:\n" +
      "Useful dimensions / constraints:\n" +
      "Files or reference link:\n" +
      "Deadline if any:\n" +
      "Budget range if you have one:\n\n" +
      "Thanks!"
  );

  return `mailto:${openForWork.email}?subject=${subject}&body=${body}`;
};

export const OpenWork = () => {
  return (
    <HelmetProvider>
      <main className="open_work_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{openForWork.title} | {meta.title}</title>
          <meta name="description" content={openForWork.intro} />
        </Helmet>

        <Container>
          <PageIntro eyebrow={openForWork.badge} title="Useful help for small hardware jobs.">
            <p>{openForWork.intro}</p>
          </PageIntro>

          <section className="open_work_services" aria-labelledby="service-list-title">
            <div>
              <p className="eyebrow">What I can take on</p>
              <h2 id="service-list-title">Small scope, clear output.</h2>
            </div>

            <div className="open_work_service_list">
              {openForWork.services.map((service) => (
                <article key={service.title}>
                  <p>{service.shortTitle}</p>
                  <h3>{service.title}</h3>
                  <span>{service.description}</span>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="open_work_brief" aria-labelledby="brief-title">
            <div>
              <p className="eyebrow">Send a useful brief</p>
              <h2 id="brief-title">A rough sketch is better than a vague request.</h2>
              <p>
                Include dimensions, materials, reference photos, circuit details, and
                anything that would make the first reply more practical.
              </p>
              <a className="button_link" href={buildProjectMail()}>
                <FiMail aria-hidden="true" />
                Email {openForWork.email}
              </a>
            </div>

            <aside className="open_work_file_note">
              <h3>{openForWork.fileDropTitle}</h3>
              <p>{openForWork.fileDropDescription}</p>
              <a
                className="file_link"
                href={openForWork.fileDropUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FiUploadCloud aria-hidden="true" />
                Open Wormhole
                <FiExternalLink aria-hidden="true" />
              </a>
            </aside>
          </section>
        </Container>
      </main>
    </HelmetProvider>
  );
};
