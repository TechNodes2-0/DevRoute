/** @format */

import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ForumPage from "./Pages/Community/CommunityForum";
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Home />}></Route>
        <Route path="/tree" element={<Home />}></Route>
        <Route path="/Forum" element={<ForumPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
