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
import Follow from "../pages/Follow";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/userpage/:userKey" element={<Userpage />}/>
        <Route path="/follow" element={<Follow />}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
