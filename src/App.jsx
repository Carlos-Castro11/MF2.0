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
import Releases from "./components/Releases/Releases";
import FutureProjects from "./components/FutureProjects/FutureProjects";
import WppBtn from "./components/WppBtn/WppBtn";
import ToTopBtn from "./components/ToTopBtn/ToTopBtn";

function App() {
  return (
    <>
      <BrowserRouter>
        <PopUpStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enterprises/*" element={<Enterprises />} />
            <Route path="/releases/*" element={<Releases />} />
            <Route path="/futureProjects/*" element={<FutureProjects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WppBtn />
          <ToTopBtn />
          <Footer />
        </PopUpStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
