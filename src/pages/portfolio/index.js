import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

const publicPath = (path) => `${process.env.PUBLIC_URL}${path}`;

const MissingMedia = ({ type, path }) => (
  <div className="media_placeholder">
    <span className="media_placeholder__icon">{type === "photo" ? "IMG" : "MP4"}</span>
    <strong>{type === "photo" ? "Photo space" : "Video space"}</strong>
    <small>{path}</small>
  </div>
);

const ProjectCard = ({ project, index }) => {
  const [photoReady, setPhotoReady] = useState(true);
  const [videoReady, setVideoReady] = useState(true);

  return (
    <article className="project_card" style={{ "--delay": `${index * 80}ms` }}>
      <div className="project_card__topline">
        <span>{project.tag}</span>
        <span className="project_card__number">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <ul className="project_highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="project_media_grid" aria-label={`${project.title} media slots`}>
        <div className="project_media_slot">
          {photoReady ? (
            <img
              src={publicPath(project.photo)}
              alt={`${project.title} project`}
              onError={() => setPhotoReady(false)}
            />
          ) : (
            <MissingMedia type="photo" path={`${project.folder}/photos/cover.jpg`} />
          )}
        </div>

        <div className="project_media_slot project_media_slot--video">
          {videoReady ? (
            <video controls preload="metadata" onError={() => setVideoReady(false)}>
              <source src={publicPath(project.video)} type="video/mp4" onError={() => setVideoReady(false)} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <MissingMedia type="video" path={`${project.folder}/videos/demo.mp4`} />
          )}
        </div>
      </div>

      <div className="project_folder_note">
        Drop media in <code>public{project.folder}</code>
      </div>
    </article>
  );
};

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="portfolio_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="9">
            <p className="eyebrow">Robotics lab archive</p>
            <h1 className="display-4 mb-4">Projects</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <p className="portfolio_intro">
              Each project card has a photo and video slot ready for your real build media.
              Add <code>cover.jpg</code> and <code>demo.mp4</code> inside the matching folder to replace the placeholders.
            </p>
          </Col>
        </Row>
        <div className="project_grid">
          {dataportfolio.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};