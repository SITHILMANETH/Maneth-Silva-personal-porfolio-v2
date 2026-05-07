import React, { useMemo, useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Alert, Container } from "react-bootstrap";
import PageIntro from "../../components/pageintro";
import { contactConfig, meta, socialprofils } from "../../content_option";

const initialFormData = {
  email: "",
  name: "",
  subject: "",
  projectType: "Robotics project",
  message: "",
  loading: false,
  show: false,
  alertmessage: "",
  variant: "",
};

const isConfigured = (value, placeholder) => Boolean(value && value.trim() && value !== placeholder);
const isEmailAddressReady = () => isConfigured(contactConfig.YOUR_EMAIL, "your-email@example.com");
const isEmailJsReady = () =>
  isConfigured(contactConfig.YOUR_SERVICE_ID, "service_id") &&
  isConfigured(contactConfig.YOUR_TEMPLATE_ID, "template_id") &&
  isConfigured(contactConfig.YOUR_USER_ID, "user_id");

const buildMailtoLink = (formData) => {
  const subject = encodeURIComponent(formData.subject || `Portfolio message from ${formData.name}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
      `Reply email: ${formData.email}\n` +
      `Project interest: ${formData.projectType}\n\n` +
      `${formData.message}`
  );

  return `mailto:${contactConfig.YOUR_EMAIL}?subject=${subject}&body=${body}`;
};

export const ContactUs = () => {
  const [formData, setFormdata] = useState(initialFormData);
  const emailReady = isEmailAddressReady();
  const emailJsReady = isEmailJsReady();

  const deliveryLabel = useMemo(() => {
    if (emailJsReady) {
      return "The form sends directly from the site.";
    }

    if (emailReady) {
      return "The form opens your email app with the message filled in.";
    }

    return "The form is ready, but a receiving email still needs to be set.";
  }, [emailReady, emailJsReady]);

  const showAlert = (variant, alertmessage) => {
    setFormdata((current) => ({
      ...current,
      loading: false,
      show: true,
      variant,
      alertmessage,
    }));
    setTimeout(() => document.querySelector(".co_alert")?.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormdata((current) => ({ ...current, loading: true, show: false }));

    const templateParams = {
      from_name: formData.email,
      reply_to: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      subject: formData.subject,
      project_type: formData.projectType,
      message: formData.message,
    };

    try {
      if (emailJsReady) {
        await emailjs.send(
          contactConfig.YOUR_SERVICE_ID,
          contactConfig.YOUR_TEMPLATE_ID,
          templateParams,
          contactConfig.YOUR_USER_ID
        );

        setFormdata({
          ...initialFormData,
          show: true,
          alertmessage: "Message sent. Thanks, I will read it soon.",
          variant: "success",
        });
        return;
      }

      if (!emailReady) {
        showAlert("warning", "The receiving email is not set yet. Use a direct message link for now.");
        return;
      }

      window.location.href = buildMailtoLink(formData);
      showAlert("success", "Your email app opened with a draft ready to review.");
    } catch (error) {
      showAlert("danger", `Could not prepare the message. ${error?.text || error?.message || "Please try again."}`);
    }
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <main className="contact_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Container>
          <PageIntro eyebrow="Contact" title="Send the practical details.">
            <p>
              A useful first message includes what you are trying to build, what is already known,
              and what is still uncertain. Short is fine. Specific is better.
            </p>
          </PageIntro>

          <Alert
            variant={formData.variant}
            className={`co_alert ${formData.show ? "d-block" : "d-none"}`}
            onClose={() => setFormdata((current) => ({ ...current, show: false }))}
            dismissible
          >
            <p className="my-0">{formData.alertmessage}</p>
          </Alert>

          <section className="contact_layout">
            <aside className="contact_panel">
              <p className="eyebrow">Before you send</p>
              <h2>What helps me reply well</h2>
              <ul>
                <li>What you want built, tested, or reviewed.</li>
                <li>Photos, sketches, links, or files if they exist.</li>
                <li>Any deadline, size limit, voltage, material, or budget constraint.</li>
              </ul>
              <div className="contact_status">
                <span className={emailReady || emailJsReady ? "is-live" : "is-waiting"}></span>
                <p>{deliveryLabel}</p>
              </div>
              {emailReady && (
                <a className="contact_direct" href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
              )}
              <div className="contact_socials">
                <a href={socialprofils.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={socialprofils.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={socialprofils.youtube} target="_blank" rel="noreferrer">YouTube</a>
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="contact__form">
              <div className="form_grid">
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Reply email</label>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form_grid">
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="PCB review / part design / robot idea"
                    value={formData.subject || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectType">Project type</label>
                  <select
                    className="form-control"
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option>3D design / printing</option>
                    <option>PCB design</option>
                    <option>Robotics project</option>
                    <option>Computer vision / ML</option>
                    <option>Electronics question</option>
                    <option>Other practical idea</option>
                  </select>
                </div>
              </div>

              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Tell me the context, constraints, and what a useful reply would include."
                rows="7"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <div className="contact_actions">
                <button className="btn ac_btn" type="submit">
                  {formData.loading ? "Preparing..." : emailJsReady ? "Send Message" : "Prepare Email"}
                </button>
                <span>{emailJsReady ? "Sent from the site." : "You can edit the email before sending."}</span>
              </div>
            </form>
          </section>
        </Container>
        <div className={formData.loading ? "loading-bar" : "d-none"}></div>
      </main>
    </HelmetProvider>
  );
};
