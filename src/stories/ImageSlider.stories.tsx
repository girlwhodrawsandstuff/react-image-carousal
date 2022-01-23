import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

export default {
    title: "Image Slider",
    component: ImageSlider
}

export const Fade = () => <ImageSlider slides={SliderData} animationType='fade' borderType='none'/>
export const Rotate = () => <ImageSlider slides={SliderData} animationType='rotate' borderType='none'/>
export const Scale = () => <ImageSlider slides={SliderData} animationType='scale' borderType='none'/>