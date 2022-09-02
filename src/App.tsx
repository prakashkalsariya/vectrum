import "./App.scss";
import Slider from "./component/slider/Slider";
import Home from "./pages/home/Home";


function App() {
  return (
    <div className="main-container">
      <Slider /> 
      <Home/>
    </div>
  );
}

export default App;
