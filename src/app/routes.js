import React from "react";
import { Route, Routes } from "react-router-dom";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { OpenWork } from "../pages/openwork";
import { Socialicons } from "../components/socialicons";

function AppRoutes() {
  return (
    <>
      <div className="s_c">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/open-for-work" element={<OpenWork />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </div>
      <Socialicons />
    </>
  );
}

export default AppRoutes;
