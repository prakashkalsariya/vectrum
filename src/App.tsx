import "./App.scss";
import Slider from "./component/slider/Slider";
import RotateArrow from "./component/rotateArrow/RotateArrow";
import Home from "./pages/home/Home";


function App() {
  return (
    <div className="main-container">
      {/* <Slider /> */}
      {/* <RotateArrow/> */}
      <Home/>
    </div>
  );
}

export default App;
