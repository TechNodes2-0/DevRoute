/** @format */

import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Library from "./Pages/Library/Library";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ForumPage from "./Pages/Community/CommunityForum";
import Profile from "./Pages/Profile/Profile";
import withLoading from "./Components/withLoading";
import DotRing from "./Components/DotRing/DotRing";

const ForumPageWithLoading = withLoading(ForumPage);

export default function App() {
  return (
    <>
      <div>
        <DotRing />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Forum" element={<ForumPageWithLoading />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
