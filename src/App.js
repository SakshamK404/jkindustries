import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import FooterComponent from "./components/Footer";
import ProductGallery from "./components/ProductGallery";
import CompanyBrief from "./components/CompanyBrief";

import CibaShape from "./components/products/CibaShape";
import EmidaShape from "./components/products/EmidaShape";
import AloeVeraShape from "./components/products/AloeVeraShape";
import VerticalShape from "./components/products/VerticalShape";
import RightAngleShape from "./components/products/RightAngleShape";
import OsinShape from "./components/products/OsinShape";
import OvalShapeJerry from "./components/products/OvalShapeJerry";
import AmwayShape from "./components/products/AmwayShape";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Products />
              <ProductGallery />
              <Contact />
            </>
          }
        />
        <Route path="/products/ciba" element={<CibaShape />} />
        <Route path="/products/emida" element={<EmidaShape />} />
        <Route path="/products/aloevera" element={<AloeVeraShape />} />
        <Route path="/products/vertical" element={<VerticalShape />} />
        <Route path="/products/rightangle" element={<RightAngleShape />} />
        <Route path="/products/osin" element={<OsinShape />} />
        <Route path="/products/ovaljerry" element={<OvalShapeJerry />} />
        <Route path="/products/amway" element={<AmwayShape />} />
        <Route path="/company-brief" element={<CompanyBrief />} />

        {/* ✅ Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
