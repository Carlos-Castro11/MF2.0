import React from "react";
import { useParams, Navigate } from "react-router-dom";
import styles from "./HouseBase.module.css";

const HouseBase = ({ houses }) => {
  const { id } = useParams();

  const [activeImg, setActiveImg] = React.useState(houses[id].front_img);

  function handleClick(e) {
    let img_src = e.target.src;
    setActiveImg(img_src);
  }

  if (id > houses.length - 1) return <Navigate to="/" />;
  return (
    <>
      <section className="container">
        <h1 className={styles.title}>{houses[id].name}</h1>
        <div className={styles.houseContent}>
          <div className={styles.houseImg}>
            <div className={styles.mainImg}>
              <img src={activeImg} alt="" />
            </div>
            <div className={styles.smallImg}>
              {houses[id].imgs.map((item) => (
                <div>
                  <img onClick={handleClick} src={item} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.houseInfo}>
            <h3>Sobre o imóvel</h3>
            <p>{houses[id].about}</p>
            <div className={styles.details}>
              <h5>Detalhes</h5>
              <p>
                Área Construída:<span>{houses[id].building_area}</span>
              </p>
              <p>
                Área do Terreno: <span>{houses[id].land_area}</span>
              </p>
              <p>
                Dormitórios: <span>{houses[id].rooms}</span>
              </p>
              <p>
                Salas: <span>{houses[id].class}</span>
              </p>
              <p>
                Banheiros: <span>{houses[id].bathrooms}</span>
              </p>
              <p>
                Vagas de garagem: <span>{houses[id].parking_space}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HouseBase;
