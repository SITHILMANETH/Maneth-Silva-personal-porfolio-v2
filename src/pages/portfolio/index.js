import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { FiX } from "react-icons/fi";
import PageIntro from "../../components/pageintro";
import { dataportfolio, meta } from "../../content_option";

const publicPath = (path) => `${process.env.PUBLIC_URL}${path}`;

const MissingMedia = ({ type, path }) => (
  <div className="media_placeholder">
    <strong>{type === "photo" ? "Cover photo pending" : "Demo video pending"}</strong>
    <small>{path}</small>
  </div>
);

const ProjectRow = ({ project, index, onSelect }) => {
  const [photoReady, setPhotoReady] = useState(true);
  const [videoReady, setVideoReady] = useState(true);

  return (
    <article className="project_row">
      <div className="project_row__meta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <p>{project.status || project.tag}</p>
      </div>

      <div className="project_row__body">
        <p className="project_row__tag">{project.tag}</p>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <ul className="project_highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <button className="project_read_more" type="button" onClick={() => onSelect(project)}>
          Open notes
        </button>
      </div>

      <div className="project_media_grid" aria-label={`${project.title} media`}>
        <div className="project_media_slot">
          {photoReady ? (
            <img
              src={publicPath(project.photo)}
              alt={`${project.title} build preview`}
              loading="lazy"
              onError={() => setPhotoReady(false)}
            />
          ) : (
            <MissingMedia type="photo" path={`${project.folder}/photos/cover.jpg`} />
          )}
        </div>
        <div className="project_media_slot">
          {videoReady ? (
            <video controls preload="none" onError={() => setVideoReady(false)}>
              <source src={publicPath(project.video)} type="video/mp4" onError={() => setVideoReady(false)} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <MissingMedia type="video" path={`${project.folder}/videos/demo.mp4`} />
          )}
        </div>
      </div>
    </article>
  );
};

const ProjectDetails = ({ project, onClose }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        if (selectedPhoto) {
          setSelectedPhoto(null);
          return;
        }

        onClose();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose, selectedPhoto]);

  return (
    <>
      <div className="project_modal" role="presentation" onClick={onClose}>
        <section
          className="project_modal__card"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={(event) => event.stopPropagation()}
        >
          <button className="project_modal__close" type="button" onClick={onClose} aria-label="Close project notes">
            <FiX aria-hidden="true" />
            <span>Close</span>
          </button>

          <p className="project_modal__tag">{project.tag}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p className="project_modal__description">{project.details || project.description}</p>

          <div className="project_modal__section">
            <h3>What this work touches</h3>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <p className="project_modal__media-note">
            Media folder: <code>public{project.folder}</code>
          </p>

          {project.galleryPhotos?.length > 0 && (
            <div className="project_modal__photos">
              <h3>Photos</h3>
              <div className="project_photo_gallery">
                {project.galleryPhotos.map((photo) => (
                  <button
                    className="project_photo_item"
                    key={photo.src}
                    type="button"
                    aria-label={`Enlarge ${photo.title}`}
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <img src={publicPath(photo.src)} alt={photo.title} loading="lazy" />
                    <span>{photo.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {project.youtubeVideos?.length > 0 && (
            <div className="project_modal__videos">
              <h3>Video links</h3>
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

      {selectedPhoto && (
        <div className="project_photo_preview" role="presentation" onClick={() => setSelectedPhoto(null)}>
          <figure
            className="project_photo_preview__frame"
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project_photo_preview__close"
              type="button"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close enlarged photo"
            >
              <FiX aria-hidden="true" />
              <span>Close</span>
            </button>
            <img src={publicPath(selectedPhoto.src)} alt={selectedPhoto.title} />
            <figcaption>{selectedPhoto.title}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
};

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <HelmetProvider>
      <main className="portfolio_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Container>
          <PageIntro eyebrow="Project log" title="Builds, notes, and half-solved problems.">
            <p>
              These are not case studies polished into identical boxes. They are project entries:
              what each one is about, what it touches, and where the media belongs when the build is documented.
            </p>
          </PageIntro>

          <div className="project_list">
            {dataportfolio.map((project, i) => (
              <ProjectRow key={project.title} project={project} index={i} onSelect={setSelectedProject} />
            ))}
          </div>
        </Container>
        {selectedProject && (
          <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </main>
    </HelmetProvider>
  );
};
