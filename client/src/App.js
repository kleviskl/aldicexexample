import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DisplayMP from "./pages/DisplayMP";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display-mp" element={<DisplayMP />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
