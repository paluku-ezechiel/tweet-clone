import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default App;
