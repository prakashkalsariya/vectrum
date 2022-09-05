import "./App.scss";
import Slider from "./component/slider/Slider";
import RotateArrow from "./component/rotateArrow/RotateArrow";
import RotatingArrow from "./pages/home/RotatingArrow";
import { Routes, Route } from "react-router-dom";
import SideHeader from "./component/header/SideHeader";
import Home from "./component/home/Home";

function App() {
  return (
    <div className="main-container">
      <SideHeader />
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="slider" element={<Slider />}></Route>
        <Route path="rotating-arrow" element={<RotatingArrow />}></Route>
      </Routes>
    </div>
  );
}

export default App;
