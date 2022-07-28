import React, { useEffect } from "react";
import AOS from "aos";
import ReactGA from "react-ga4";
import "aos/dist/aos.css";
import animate from './animate.css'
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ServicesPageUpdated from "./components/ServicesPageUpdated";
import WorkPage from "./components/WorkPage";
import BlogPage from "./components/BlogPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import OurPortfolioPage from "./components/OurPortfolioPage";
import SingleBlogPage from "./components/SingleBlogPage";
import SingleBlogPage2 from "./components/SingleBlogPage2";
import SingleBlogPage3 from "./components/SingleBlogPage3";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  ReactGA.initialize("G-2KCB14PXPL");
  ReactGA.send("pageview");

  return (
    <div className="">
      <Router>
        <Routes>
          <Route  path="/"  element={<Home />} />
          <Route  path="/services"  element={<ServicesPageUpdated />} />
          <Route  path="/our-portfolio"  element={<OurPortfolioPage />} />
          <Route  path="/about"  element={<AboutPage />} />
          <Route  path="/contact"  element={<ContactPage />} />
          <Route  path="/blogs"  element={<BlogPage />} />
          <Route  path="/blog/blog1"  element={<SingleBlogPage />} />
          <Route  path="/blog/blog2"  element={<SingleBlogPage2 />} />
          <Route  path="/blog/blog3"  element={<SingleBlogPage3 />} />
          {/* <Route  path="*"  element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
