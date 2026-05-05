import React, { useEffect, useState } from "react";
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

const ProjectCard = ({ project, index, onSelect }) => {
  const [photoReady, setPhotoReady] = useState(true);
  const [videoReady, setVideoReady] = useState(true);
  const openProject = (event) => {
    if (event.target.closest("button, video, a")) {
      return;
    }
    onSelect(project);
  };

  const openProjectFromKeyboard = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(project);
    }
  };

  return (
    <article
      className="project_card"
      style={{ "--delay": `${index * 80}ms` }}
      role="button"
      tabIndex="0"
      onClick={openProject}
      onKeyDown={openProjectFromKeyboard}
      aria-label={`Open ${project.title} description`}
    >
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

      {project.youtubeVideos?.length > 0 && (
        <div className="project_video_count">
          {project.youtubeVideos.length} YouTube videos added
        </div>
      )}

      {project.galleryPhotos?.length > 0 && (
        <div className="project_photo_count">
          {project.galleryPhotos.length} photos added
        </div>
      )}

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

      <button className="project_read_more" type="button" onClick={() => onSelect(project)}>
        Read about this project
      </button>
    </article>
  );
};

const ProjectDetails = ({ project, onClose }) => {
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  return (
    <div className="project_modal" role="presentation" onClick={onClose}>
      <section
        className="project_modal__card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="project_modal__close" type="button" onClick={onClose} aria-label="Close project description">
          Close
        </button>

        <p className="project_modal__tag">{project.tag}</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="project_modal__description">{project.details || project.description}</p>

        <div className="project_modal__section">
          <h3>What it shows</h3>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="project_modal__media-note">
          Media folder: <code>public{project.folder}</code>
        </div>

        {project.galleryPhotos?.length > 0 && (
          <div className="project_modal__photos">
            <h3>Project Photos</h3>
            <div className="project_photo_gallery">
              {project.galleryPhotos.map((photo) => (
                <a
                  className="project_photo_item"
                  href={publicPath(photo.src)}
                  target="_blank"
                  rel="noreferrer"
                  key={photo.src}
                >
                  <img src={publicPath(photo.src)} alt={photo.title} loading="lazy" />
                  <span>{photo.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {project.youtubeVideos?.length > 0 && (
          <div className="project_modal__videos">
            <h3>Battle Bot Videos</h3>
            <div className="project_video_gallery">
              {project.youtubeVideos.map((video) => (
                <div className="project_video_embed" key={video.url}>
                  <iframe
                    src={video.embed}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <a href={video.url} target="_blank" rel="noreferrer">
                    {video.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
              Click any project to read a short description.
            </p>
          </Col>
        </Row>
        <div className="project_grid">
          {dataportfolio.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onSelect={setSelectedProject} />
          ))}
        </div>
        {selectedProject && (
          <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </Container>
    </HelmetProvider>
  );
};
