import React from "react";
import Home from "./Pages/Home/Home"
import { Routes, Route } from "react-router-dom";
import DemoTree from "./Pages";
export default function App() {
  return (
    <div>
        <>     
            <Routes>
<Route path="/" element={<Home />}></Route>
<Route path="/Demo" element={<DemoTree/>}></Route>

</Routes>
</> 
    </div>
  );
}
