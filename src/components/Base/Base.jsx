import React from "react";
import styles from "./Base.module.css";
import { Link } from "react-router-dom";

const Base = ({ houses, titlePage }) => {
  return (
    <>
      <div className={`container`}>
        <h1 className={styles.title}>{titlePage}</h1>
        <div className={styles.bodyContent}>
          {houses.map((house) => (
            <div key={house.id}>
              <Link to={`/${house.type}/${house.id}`}>
                <img className={styles.bodyImg} src={house.front_img} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Base;
