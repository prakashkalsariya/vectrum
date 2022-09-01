
import "../../App.scss";

function Slider() {
  function onClickLeft() {
    const selectSliderBox1 = document.querySelector(".item-1");
    const selectSliderBox2 = document.querySelector(".item-2");
    const selectSliderBox3 = document.querySelector(".item-3");

    selectSliderBox1?.classList.add("carousel-item-left");
    selectSliderBox2?.classList.add("carousel-item-left");
    selectSliderBox3?.classList.add("carousel-item-left");
  }

  function onClickRight() {
    const selectSliderBox1 = document.querySelector(".item-1");
    const selectSliderBox2 = document.querySelector(".item-2");
    const selectSliderBox3 = document.querySelector(".item-3");

    selectSliderBox1?.classList.remove("carousel-item-left");
    selectSliderBox2?.classList.remove("carousel-item-left");
    selectSliderBox3?.classList.remove("carousel-item-left");
  }

  return (
    <div className="main">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active item-1">
            <div className="box-1 box d-block w-100">
              <h4>Contain-1</h4>
            </div>
          </div>
          <div className="carousel-item item-2">
            <div className="box-2 box d-block w-100">
              <h4>Contain-2</h4>
            </div>
          </div>
          <div className="carousel-item item-3">
            <div className="box-3 box d-block w-100">
              <h4>Contain-3</h4>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev btn-1 "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
          onMouseEnter={onClickLeft}
        >
          <img src="left-arrow.svg" alt="left-arrow"/>
        </button>
        <button
          className="carousel-control-next btn-2"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          onMouseEnter={onClickRight}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default Slider;
