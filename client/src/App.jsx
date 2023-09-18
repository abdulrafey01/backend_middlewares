import React from "react";
import axios from "axios";
import Login from "./Login";
import { Link, Routes ,Route} from "react-router-dom";
import Home from "./Home";
export default function App() {
 
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
      }
