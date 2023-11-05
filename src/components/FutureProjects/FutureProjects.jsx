import React from "react";

import housesFutureProjects from "../../FutureProjects";
import { Route, Routes } from "react-router-dom";

// COMPONENTS
import Base from "../Base/Base";
import HouseBase from "../HouseBase/HouseBase";
import NotFound from "../NotFound/NotFound";

const FutureProjects = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Base houses={housesFutureProjects} titlePage="Futuros Projetos" />
          }
        />
        <Route
          exact
          path="/:id"
          element={<HouseBase houses={housesFutureProjects} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default FutureProjects;
