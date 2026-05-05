import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCube,
  FaEnvelope,
  FaExternalLinkAlt,
  FaMicrochip,
  FaUpload,
} from "react-icons/fa";
import { meta, openForWork } from "../../content_option";

const ICONS = {
  "3D Design": FaCube,
  "PCB Design": FaMicrochip,
};

const buildProjectMail = () => {
  const subject = encodeURIComponent("Open for work project request");
  const body = encodeURIComponent(
    "Hi Maneth,\n\n" +
      "Project type:\n" +
      "Project details:\n" +
      "Wormhole file link:\n" +
      "Deadline:\n" +
      "Budget range:\n\n" +
      "Thanks!"
  );

  return `mailto:${openForWork.email}?subject=${subject}&body=${body}`;
};

export const OpenWork = () => {
  return (
    <HelmetProvider>
      <Container className="open_work_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{openForWork.title} | {meta.title}</title>
          <meta name="description" content={openForWork.intro} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="9">
            <p className="eyebrow">{openForWork.badge}</p>
            <h1 className="display-4 mb-4">{openForWork.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <p className="open_work_intro">{openForWork.intro}</p>
          </Col>
        </Row>

        <div className="open_work_services">
          {openForWork.services.map((service) => {
            const Icon = ICONS[service.shortTitle] || FaCube;

            return (
              <article className="open_work_card" key={service.title}>
                <div className="open_work_card__icon" aria-hidden="true">
                  <Icon />
                </div>
                <p className="open_work_card__label">{service.shortTitle}</p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <Row className="open_work_contact">
          <Col lg="6">
            <section className="open_work_panel">
              <p className="open_work_panel__label">Contact message</p>
              <h2>Send the project brief.</h2>
              <p>
                Tell me what you need designed, printed, or routed. Include size,
                material, reference photos, circuit details, deadline, and your
                Wormhole file link if files are ready.
              </p>
              <a className="open_work_action" href={buildProjectMail()}>
                <FaEnvelope aria-hidden="true" />
                Email {openForWork.email}
              </a>
            </section>
          </Col>

          <Col lg="6">
            <section className="open_work_panel open_work_file_panel">
              <p className="open_work_panel__label">File drop box</p>
              <h2>{openForWork.fileDropTitle}</h2>
              <p>{openForWork.fileDropDescription}</p>
              <a
                className="open_work_dropbox"
                href={openForWork.fileDropUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaUpload aria-hidden="true" />
                <span>
                  Open Wormhole
                  <small>Upload files, copy the link, then email it to me.</small>
                </span>
                <FaExternalLinkAlt aria-hidden="true" />
              </a>
            </section>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
