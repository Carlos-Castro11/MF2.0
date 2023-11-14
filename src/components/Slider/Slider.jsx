import React from "react";
import styles from "./Slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({ slides, loop }) => {
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
          loop={loop}
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
