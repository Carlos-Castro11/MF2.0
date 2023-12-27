import React from "react";
import styles from "./Slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

const Slider = ({ slides, loop }) => {
  const [NumberSlides, setNumberSlides] = React.useState(2);
  const navigate = useNavigate();
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 750) {
        setNumberSlides(1);
      } else {
        setNumberSlides(2);
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
          slidesPerView={NumberSlides}
          loop={loop}
          autoplay={{
            delay: 3000,
          }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
        >
          {slides.map((item) => (
            <SwiperSlide key={item.image}>
              <div
                onClick={() => {
                  const res = window.confirm([
                    "Você deseja ver esta casa completa?",
                  ]);
                  if (res) {
                    navigate(`/${item.type}/${item.id}`);
                  } else {
                    navigate("/");
                  }
                }}
              >
                <img
                  src={item.image}
                  alt="slider"
                  className={styles.sliderImg}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
