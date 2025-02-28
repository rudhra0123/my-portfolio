import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter
} from "react-router-dom";

import Home from './components/Home/Home.jsx'
import Skill from './components/Skillset.jsx';
import Project from './components/Projects.jsx'
import Resume from './components/Resume.jsx';
import Contact from './components/Contact';
import Achivements from "./components/achievements.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop"

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    document.title = "M. Venkata Siva Rama Raju";
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
    {/* <Router> */}
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillset" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/achievements" element={<Achivements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    {/* </Router> */}
    </BrowserRouter>
  );
}

export default App;
