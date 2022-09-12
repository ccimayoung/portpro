import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
