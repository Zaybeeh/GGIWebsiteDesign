import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./Pages/home.js";
import Team from "./Pages/team.js";
import Study_permit from "./Pages/study_permit.js";
import Business_visa from "./Pages/business_visa.js";
import Visit_visa from "./Pages/visit_visa.js";
import Work_visa from "./Pages/work_visa.js";
import Immigrate from "./Pages/immigrate.js";
import About_us from "./Pages/about_us.js";
import Blogs from "./Pages/blogs.js";
import Blog_Details from "./Pages/blog_details.js";
import ContactUs from "./Pages/contact_us.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/study_permit" element={<Study_permit/>}/>
        <Route path="/business_visa" element={<Business_visa/>}/>
        <Route path="/visit_visa" element={<Visit_visa/>}/>
        <Route path="/work_visa" element={<Work_visa/>}/>
        <Route path="/immigrate" element={<Immigrate/>}/>
        <Route path="/about_us" element={<About_us/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blog_details/:url" element={<Blog_Details />} />
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
