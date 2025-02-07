import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Projects from "pages/Project/Projects";
import Contact from "pages/Contact/Contact";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import Resume from "pages/Resume/Resume";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    );
};

export default PageRoutes;
