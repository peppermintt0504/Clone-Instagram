//import Library
import React from "react"
import { Route, Routes } from "react-router-dom";


//import CSS
import './App.css';

//import Pages
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
