import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DisplayMP from "./pages/DisplayMP";
import Home from "./pages/Home";

import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display-mp" element={<DisplayMP />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}
