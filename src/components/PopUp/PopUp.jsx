import React from "react";
import styles from "./PopUp.module.css";

// Icon
import close from "../../assets/icons/close.svg";

// CONTEXT
import { PopUpContext } from "../../PopUpContext";

// Slider
import { Swiper, SwiperSlide } from "swiper/react";

const PopUp = ({ src, houses }) => {
  const { setPopUpActive } = React.useContext(PopUpContext);
  return (
    <div className={`${styles.popUp} animeLeft`}>
      <button
        className={styles.btn}
        onClick={() => {
          setPopUpActive(false);
        }}
      >
        <img src={close} alt="" />
      </button>
      {/* <img className={`${styles.popUpImage}`} src={src} alt="" /> */}

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className={`${styles.popUpSlider} ${styles.sliderWrapper} ${styles.sampleSlider}`}
      >
        {houses.imgs.map((item) => (
          <SwiperSlide key={item}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopUp;
