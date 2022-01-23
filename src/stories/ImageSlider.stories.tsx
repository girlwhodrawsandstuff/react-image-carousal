import ImageSlider, { ImageSliderProps } from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import { Story } from "@storybook/react"

export default {
    title: "Image Slider",
    component: ImageSlider
}

const Template: Story<ImageSliderProps> = (args) => <ImageSlider {...args} />

export const Slider = Template.bind({})

Slider.args = {
    slides: SliderData,
    animationType: "rotate",
    borderType: "solid",
    autoPlay: false,
}