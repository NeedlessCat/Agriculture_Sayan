import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CropRecommendation from "./pages/CropRecommendation";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CropResponse from "./pages/CropResponse";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { token } = useContext(AppContext);

  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/crop-recommendation"
          element={token ? <CropRecommendation /> : <Navigate to="/login" />}
        />
        <Route
          path="/crop-recommendation/response"
          element={<CropResponse />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
