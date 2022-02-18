//import Library
import React from "react"
import { Route, Routes } from "react-router-dom";


//import CSS
import './App.css';

//import Pages
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Userpage from "../pages/Userpage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/userpage/:userId" element={<Userpage />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
