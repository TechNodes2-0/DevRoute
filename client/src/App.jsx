/** @format */

import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Library from "./Pages/Library/Library";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ForumPage from "./Pages/Community/CommunityForum";
import Profile from "./Pages/Profile/Profile";
import withLoading from "./Components/withLoading";
import DotRing from "./Components/DotRing/DotRing";
import alanBtn from "@alan-ai/alan-sdk-web";
import Roadmap from "./Pages/Tree/Tree";

const ForumPageWithLoading = withLoading(ForumPage);

export default function App() {
  useEffect(() => {
    alanBtn({
      key: "d01fc9e7a22b610ebdd4654d5969a9712e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);

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
          <Route path="/Error" element={<Error />} />
          <Route path="/RoadMap" element={<Roadmap />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
