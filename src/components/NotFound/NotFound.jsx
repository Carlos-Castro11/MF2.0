import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>
        <span>ERROR 404 </span> PÁGINA NÃO ENCONTRADA
      </h1>
    </div>
  );
};

export default NotFound;
