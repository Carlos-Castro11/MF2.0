import React from "react";
import { useParams } from "react-router-dom";

const HouseBase = ({ houses }) => {
  const { id } = useParams();

  return (
    <>
      <h1>{houses[id].name}</h1>
      <img src={houses[id].src1} alt="" />
    </>
  );
};

export default HouseBase;
