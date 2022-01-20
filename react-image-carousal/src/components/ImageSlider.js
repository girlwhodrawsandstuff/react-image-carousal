import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides, animationType }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const addAnimationClass = (index) => {
    let className = index === current ? `${animationType} active` : `${animationType}`;

    return className;
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="container">
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        {slides.map((slide, index) => {
          return (
            <div className={addAnimationClass(index)} key={slides.id}>
              {index === current && (
                <img src={slide.image} alt="3D images" className="image" />
              )}
            </div>
          );
        })}
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </section>
    </div>
  );
};

export default ImageSlider;
