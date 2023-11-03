import React from "react";

import housesEnterprises from "../../Enterprise.js";

import Base from "../Base/Base";
import HouseBase from "../HouseBase/HouseBase";
import NotFound from "../NotFound/NotFound.jsx";
import { Route, Routes } from "react-router-dom";

const Enterprises = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Base houses={housesEnterprises} titlePage={"Empreendimentos"} />
          }
        />
        <Route
          exact
          path="/:id"
          element={<HouseBase houses={housesEnterprises} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Enterprises;
