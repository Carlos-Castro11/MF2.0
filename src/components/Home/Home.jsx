import React from "react";
import styles from "./Home.module.css";

import Slider from "../Slider/Slider";
import imgSlide from "../../assets/images/Releases/1.jpg";
import imgSlide2 from "../../assets/images/Releases/2.jpg";
import imgSlide3 from "../../assets/images/CASA-11A/front_11A.jpg";
import imgSlide4 from "../../assets/images/CASA-11B/house3_front.jpg";
import imgSlide5 from "../../assets/images/395A/front_395A.jpg";
import imgSlide6 from "../../assets/images/395A/img_4_395A.jpg";

// HOOKS
import useMedia from "../../Hooks/useMedia";

// IMAGES
import aboutImg from "../../assets/images/sobre.jpg";
import adImg from "../../assets/images/ad.jpg";

const Home = () => {
  const mobile = useMedia("(max-width: 750px)");
  const slides = [
    { id: "0", image: imgSlide, type: "releases" },
    { id: "0", image: imgSlide2, type: "releases" },
    { id: "2", image: imgSlide3, type: "enterprises" },
    { id: "3", image: imgSlide4, type: "enterprises" },
    { id: "0", image: imgSlide5, type: "enterprises" },
    { id: "0", image: imgSlide6, type: "enterprises" },
  ];
  return (
    <>
      <Slider slides={slides} loop={true} />
      <main className={`animeLeft`}>
        {/* ABOUT */}
        <div className={`${styles.about} container`}>
          <h1 className="sectionTitle">SOBRE</h1>
          <div className={styles.aboutContent}>
            <img className={styles.aboutImgStyle} src={aboutImg} alt="" />
            <div className={styles.aboutText}>
              <h2>A Marques & Finelli Empreendimentos Imobiliários</h2>
              <p>
                Surgiu em 2001 no estado de São Paulo, com o desejo de realizar
                empreendimentos que atendam as necessidades diárias do usuário
                juntamente com a concepção de qualidade e estética na
                construção, prezando por ambientes funcionais que gerem
                qualidade de vida e bem estar, a fim de gerar mais valor aos
                imóveis.
              </p>
            </div>
          </div>
        </div>
        {/* AD */}
        <div className={styles.ad}>
          <div className={`${styles.adContent} container`}>
            <div className={styles.adText}>
              {mobile ? (
                <span>
                  Garanta uma <br />
                  <strong>melhor construção</strong> {""}
                  com a<br />
                  <strong>melhor qualidade</strong>
                </span>
              ) : (
                <span>
                  Garanta uma <br />
                  <strong>melhor construção</strong> <br />
                  com a<br />
                  <strong>melhor qualidade</strong>
                </span>
              )}
              <p>Confira a localização abaixo</p>
            </div>
            <img className={styles.adImgStyle} src={adImg} alt="" />
          </div>
        </div>
        {/* LOCAL */}
        <div className={`${styles.local} container`}>
          <h1 className="sectionTitle">LOCALIZAÇÃO - ESCRITÓRIO</h1>
          <iframe
            className="map"
            width="600"
            height="400"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=,%20395B%20-%20Lino%20Coutinho%%20Jardim%20Liberdade,%20Montes%20Claros%20-%20MG,%2039408-009&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <div className={styles.localText}>
            <p>Rua Lino Coutinho - 395B - Jardim Liberdade</p>
            <p className={styles.city}>Montes Claros - MG</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
