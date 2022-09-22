import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HouseInMap } from "./page/HouseInMap";
import { PhotoParticle } from "./page/PhotoParticle";
import { Main } from "./page/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/houseinmap" element={<HouseInMap />} />
        <Route path="/photoparticle" element={<PhotoParticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
