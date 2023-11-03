import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// CONTEXT
import { PopUpStorage } from "./PopUpContext";

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
        <PopUpStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enterprises/*" element={<Enterprises />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </PopUpStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
