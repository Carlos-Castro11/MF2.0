import React from "react";
import styles from "./Base.module.css";
import { Link } from "react-router-dom";

const Base = ({ houses, titlePage, releases }) => {
  return (
    <>
      <div className={`container animeLeft ${releases && styles.containerRelease}`}>
        <h1 className={styles.title}>{titlePage}</h1>
        <div
          className={`${styles.bodyContent} ${releases && styles.bodyContentReleases
            }`}
        >
          {houses.map((house) => (
            <Link key={house.id} to={`/${house.type}/${house.id}`}>
              <div className={styles.image} key={house.id}>
                <img className={styles.bodyImg} src={house.front_img} alt="" />
                <span className={styles.border1}></span>
                <span className={styles.border2}></span>
                <span className={styles.border3}></span>
                <span className={styles.border4}></span>
                <h2>
                  {house.name} <br />{" "}
                  <span className={styles.neighborhood}>
                    {house.neighborhood}
                  </span>
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Base;
