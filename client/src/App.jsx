import React from "react";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
