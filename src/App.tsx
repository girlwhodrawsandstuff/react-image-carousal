import "./App.css";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";

function App() {
  return (
    <ImageSlider
      slides={SliderData}
      animationType="fade"
      borderType="solid"
      autoPlay={false}
      autoPlayDelay={2000}
    />
  );
}

export default App;
