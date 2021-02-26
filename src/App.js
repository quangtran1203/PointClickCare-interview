import React from "react";
import './App.css';
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <div className="top"></div>

      <div className="app_component">
      <Sidebar />
        <Main />
        </div>
    </div>
  );
}

export default App;
