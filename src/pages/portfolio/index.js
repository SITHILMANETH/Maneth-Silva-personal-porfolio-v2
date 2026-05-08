import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { FiHeart, FiX } from "react-icons/fi";
import PageIntro from "../../components/pageintro";
import { dataportfolio, meta } from "../../content_option";

const publicPath = (path) => `${process.env.PUBLIC_URL}${path}`;
const LIKE_STORAGE_KEY = "maneth-portfolio-project-likes";

const getProjectId = (project) => project.folder || project.title.toLowerCase().replace(/\s+/g, "-");

const readStoredLikes = () => {
  if (typeof window === "undefined") {
    return { counts: {}, liked: {} };
  }

  try {
    const stored = JSON.parse(window.localStorage.getItem(LIKE_STORAGE_KEY));
    return {
      counts: stored?.counts || {},
      liked: stored?.liked || {},
    };
  } catch (error) {
    return { counts: {}, liked: {} };
  }
};

const LikeButton = ({ count, isLiked, onClick, className = "" }) => (
  <button
    className={`project_like ${isLiked ? "is-liked" : ""} ${className}`}
    type="button"
    aria-pressed={isLiked}
    onClick={onClick}
  >
    <FiHeart aria-hidden="true" />
    <span>{isLiked ? "Liked" : "Like"}</span>
    <span className="project_like__count" aria-label={`${count} ${count === 1 ? "like" : "likes"}`}>
      {count}
    </span>
  </button>
);

const MissingMedia = ({ type, path }) => (
  <div className="media_placeholder">
    <strong>{type === "photo" ? "Cover photo pending" : "Demo video pending"}</strong>
    <small>{path}</small>
  </div>
);

const ProjectRow = ({ project, index, onSelect, likeCount, isLiked, onLike }) => {
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
        <div className="project_row__actions">
          <button className="project_read_more" type="button" onClick={() => onSelect(project)}>
            Open notes
          </button>
          <LikeButton count={likeCount} isLiked={isLiked} onClick={() => onLike(project)} />
        </div>
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

const ProjectDetails = ({ project, onClose, likeCount, isLiked, onLike }) => {
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
          <div className="project_modal__actions">
            <LikeButton
              className="project_like--modal"
              count={likeCount}
              isLiked={isLiked}
              onClick={() => onLike(project)}
            />
          </div>
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
  const [likeState, setLikeState] = useState(readStoredLikes);

  useEffect(() => {
    try {
      window.localStorage.setItem(LIKE_STORAGE_KEY, JSON.stringify(likeState));
    } catch (error) {
      // Keep likes usable for the current session if storage is blocked.
    }
  }, [likeState]);

  const toggleProjectLike = (project) => {
    const projectId = getProjectId(project);

    setLikeState((current) => {
      const wasLiked = Boolean(current.liked[projectId]);
      const nextLiked = !wasLiked;
      const currentCount = Number(current.counts[projectId]) || 0;
      const nextCount = Math.max(0, currentCount + (nextLiked ? 1 : -1));

      return {
        counts: {
          ...current.counts,
          [projectId]: nextCount,
        },
        liked: {
          ...current.liked,
          [projectId]: nextLiked,
        },
      };
    });
  };

  const getLikeCount = (project) => Number(likeState.counts[getProjectId(project)]) || 0;
  const getIsLiked = (project) => Boolean(likeState.liked[getProjectId(project)]);

  return (
    <HelmetProvider>
      <main className="portfolio_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Work | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Container>
          <PageIntro eyebrow="Work log" title="Builds, notes, and half-solved problems." />

          <div className="project_list">
            {dataportfolio.map((project, i) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={i}
                onSelect={setSelectedProject}
                likeCount={getLikeCount(project)}
                isLiked={getIsLiked(project)}
                onLike={toggleProjectLike}
              />
            ))}
          </div>
        </Container>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            likeCount={getLikeCount(selectedProject)}
            isLiked={getIsLiked(selectedProject)}
            onLike={toggleProjectLike}
          />
        )}
      </main>
    </HelmetProvider>
  );
};
