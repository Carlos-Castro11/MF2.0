import React from "react";
import styles from "./Slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import teste from "../../assets/images/render/LANÇAMENTO04.jpg";
import teste2 from "../../assets/images/render/LANÇAMENTO03.jpg";
import teste3 from "../../assets/images/render/LANÇAMENTO09.jpg";
import teste4 from "../../assets/images/render/LANÇAMENTO07.jpg";

// HOOKS

const slides = [
  { id: "1", image: teste },
  { id: "2", image: teste2 },
  { id: "3", image: teste3 },
  { id: "4", image: teste4 },
];

const Slider = () => {
  const [x, setX] = React.useState(2);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 750) {
        setX(1);
      } else {
        setX(2);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div className={`${styles.containerSlider} ${styles.sliderWrapper}`}>
        <Swiper
          className={`${styles.sampleSlider}`}
          slidesPerView={x}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="slider" className={styles.sliderImg} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
