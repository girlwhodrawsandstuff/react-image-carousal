import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../App.css";

export interface ImageSliderProps {
  slides: { image: string; id: string }[];
  animationType: "rotate" | "fade" | "scale";
  autoPlay: boolean;
  autoPlayDelay?: number;
}

const ImageSlider = ({
  slides,
  animationType,
  autoPlay,
  autoPlayDelay,
}: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeoutRef: any = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    if (autoPlay) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => nextSlide(), autoPlayDelay);
    }
  }, [current, autoPlay, autoPlayDelay]);

  const addClassName = (index: number) => {
    let animationName =
      index === current ? `${animationType} active` : `${animationType}`;

    return animationName;
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="container">
      <section className="slider">
        <button title="left-arrow" onClick={prevSlide} className="arrow-button">
          <FaArrowAltCircleLeft className="left-arrow" />
        </button>
        {slides.map((slide, index) => {
          return (
            <div className={addClassName(index)} key={slide.id}>
              {index === current && (
                <img src={slide.image} alt="3D images" className="image" />
              )}
            </div>
          );
        })}
        <button title="right-arrow" onClick={nextSlide} className="arrow-button">
          <FaArrowAltCircleRight className="right-arrow" />
        </button>
      </section>
    </div>
  );
};

export default ImageSlider;
