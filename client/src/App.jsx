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
import Roadmap2 from "./Pages/Tree/Tree2";


const ForumPageWithLoading = withLoading(ForumPage);

export default function App() {
  useEffect(() => {
    alanBtn({
      key: "fee4955af337c95864a5a62bdae65be32e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: function (commandData) {
        if (commandData && commandData.command === 'openURL') {
          if (commandData.target === '_blank') {
            window.open(commandData.url, '_newtab' + Math.floor(Math.random() * 999999));
          } else {
            window.location.href = commandData.url;
          }
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
          <Route path="/RoadMap2" element={<Roadmap2 />} />

        </Routes>
        <Footer />
      </div>
    </>
  );
}
