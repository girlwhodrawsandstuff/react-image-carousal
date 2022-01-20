import React, {useState} from 'react';
import { SliderData } from './SliderData';

const ImageSlider = () => {
const [current, setCurrent] = useState(0)

  return (
      <>
        {SliderData.map((slide, index) => {
            return <img src={slide.image} alt=""/>
        })}
      </>
  )
};

export default ImageSlider;
