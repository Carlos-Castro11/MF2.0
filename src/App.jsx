import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// COMPONENTS
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Enterprises from "./components/Enterprises/Enterprises";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprises/*" element={<Enterprises />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
