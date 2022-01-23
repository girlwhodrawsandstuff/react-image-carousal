import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ImageSlider, { ImageSliderProps } from "./ImageSlider";
import { SliderData } from "./SliderData";

test("Renders all elements", () => {
  render(
    <ImageSlider
      slides={SliderData}
      animationType="fade"
      borderType="solid"
      autoPlay={false}
    />
  );

  const rightArrowButton = screen.getByRole("button", {
    name: /right\-arrow/i,
  });

  const leftArrowButton = screen.getByRole("button", {
    name: /left\-arrow/i,
  });

  const image = screen.getByRole("img", {
    name: /3d images/i,
  });

  expect(rightArrowButton).toBeInTheDocument();
  expect(leftArrowButton).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

test("Clicking on right arrow button changes the image", () => {
  render(
    <ImageSlider
      slides={SliderData}
      animationType="fade"
      borderType="solid"
      autoPlay={false}
    />
  );

  const rightArrowButton: HTMLButtonElement = screen.getByRole("button", {
    name: /right\-arrow/i,
  });

  const image: HTMLImageElement = screen.getByRole("img", {
    name: /3d images/i,
  });

  const currentUrl = image.src;

  fireEvent.click(rightArrowButton);

  const newImage: HTMLImageElement = screen.getByRole("img", {
    name: /3d images/i,
  });

  const newUrl = newImage.src;

  expect(newUrl).not.toEqual(currentUrl);
});

test("Clicking on left arrow button changes image", () => {
  render(
    <ImageSlider
    slides={SliderData}
    animationType="fade"
    borderType="solid"
    autoPlay={false}
  />
  );

  const leftArrowButton: HTMLButtonElement = screen.getByRole("button", {
    name: /left\-arrow/i,
  });

  const image: HTMLImageElement = screen.getByRole("img", {
    name: /3d images/i,
  });

  const currentUrl = image.src;

  fireEvent.click(leftArrowButton);

  const newImage: HTMLImageElement = screen.getByRole("img", {
    name: /3d images/i,
  });
  
  const newUrl = newImage.src;

  expect(newUrl).not.toEqual(currentUrl);
});