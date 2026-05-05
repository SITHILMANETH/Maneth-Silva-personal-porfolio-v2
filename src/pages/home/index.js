import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import CuteRobot from "../../components/cuterobot";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div className="h_robot-lab order-1 order-lg-2 h-100">
            <div className="robot_orbit robot_orbit--one"></div>
            <div className="robot_orbit robot_orbit--two"></div>
            <div className="lab_chip lab_chip--left">PCB</div>
            <div className="lab_chip lab_chip--right">AI VISION</div>
            <CuteRobot className="cute-robot--hero" />
            <div className="signal_dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <p className="hero_badge">{introdata.badge}</p>
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x hero_copy">{introdata.description}</p>
                <div className="project_ticker" aria-label="Featured project areas">
                  <span>Micro Mouse</span>
                  <span>Battle Bot</span>
                  <span>NASA App</span>
                  <span>Object Detection</span>
                </div>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      View Projects
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};