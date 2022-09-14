import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { routeList } from "./route/routeList";
import { RouterSwitch } from "./route/RouterSwitch";

function App() {
  return (
    <RecoilRoot>
      <RouterSwitch />
    </RecoilRoot>
  );
}

export default App;
