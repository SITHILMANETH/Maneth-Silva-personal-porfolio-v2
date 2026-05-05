import React, { useMemo, useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
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
      return "Direct email delivery is ready.";
    }

    if (emailReady) {
      return "This form opens an email draft addressed to me.";
    }

    return "Add your email address to activate message delivery.";
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
          alertmessage: "Message sent. Thank you, I will get back to you soon.",
          variant: "success",
        });
        return;
      }

      if (!emailReady) {
        showAlert(
          "warning",
          "The form is designed, but the receiving email is not set yet. Send me your email address and I will connect it."
        );
        return;
      }

      window.location.href = buildMailtoLink(formData);
      showAlert("success", "Your email app opened with the message ready to send.");
    } catch (error) {
      showAlert("danger", `Failed to prepare the message. ${error?.text || error?.message || "Please try again."}`);
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
      <Container className="contact_page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <p className="eyebrow">Signal channel</p>
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <p className="contact_intro">
              Want to talk about robotics, AI, PCB work, simulations, or a competition idea? Send the details and I will know what kind of build you have in mind.
            </p>
          </Col>
        </Row>
        <Row className="sec_sp contact_layout">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`co_alert ${formData.show ? "d-block" : "d-none"}`}
              onClose={() => setFormdata((current) => ({ ...current, show: false }))}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <div className="contact_panel">
              <p className="contact_panel__label">Message route</p>
              <h3>Let&apos;s build something useful.</h3>
              <p>{contactConfig.description}</p>
              <div className="contact_status">
                <span className={emailReady || emailJsReady ? "is-live" : "is-waiting"}></span>
                <div>
                  <strong>{emailReady || emailJsReady ? "Contact path ready" : "Email setup needed"}</strong>
                  <small>{deliveryLabel}</small>
                </div>
              </div>
              {emailReady && (
                <a className="contact_direct" href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
              )}
              <div className="contact_socials">
                <a href={socialprofils.linkedin} target="_blank" rel="noreferrer">Message on LinkedIn</a>
                <a href={socialprofils.youtube} target="_blank" rel="noreferrer">YouTube Channel</a>
              </div>
              <p className="contact_hint">{contactConfig.availability}</p>
            </div>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
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
                </Col>
                <Col lg="6" className="form-group">
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
                </Col>
              </Row>
              <Row>
                <Col lg="6" className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Project idea / collaboration"
                    value={formData.subject || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
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
                    <option>AI / machine learning</option>
                    <option>PCB / electronics</option>
                    <option>Competition / hackathon</option>
                    <option>Other idea</option>
                  </select>
                </Col>
              </Row>
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Tell me what you want to build, test, or discuss."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="contact_actions">
                <button className="btn ac_btn" type="submit">
                  {formData.loading ? "Preparing..." : emailJsReady ? "Send Message" : "Prepare Email"}
                </button>
                <span>{emailJsReady ? "Sends directly from the site." : "Opens your email app unless EmailJS is connected."}</span>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
