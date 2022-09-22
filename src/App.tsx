import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import { routeList } from "./route/routeList";
import { RouterSwitch } from "./route/RouterSwitch";
import { Main } from "./page";
import { HouseInMap } from "./page/HouseInMap";
import { PhotoParticle } from "./page/PhotoParticle";

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
