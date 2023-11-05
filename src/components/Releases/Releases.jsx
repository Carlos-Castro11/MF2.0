import React from "react";

import housesReleases from "../../Releases";

import Base from "../Base/Base";
import HouseBase from "../HouseBase/HouseBase";
import NotFound from "../NotFound/NotFound.jsx";
import { Route, Routes } from "react-router-dom";

const Releases = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Base houses={housesReleases} titlePage={"Lançamentos"} />}
        />
        <Route path="/:id" element={<HouseBase houses={housesReleases} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Releases;
