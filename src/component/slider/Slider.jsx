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

  // function onClickBlockRight() {
  //   const selectControlPrev = document.querySelector(".carousel-control-prev");
  //   const selectControlNext = document.querySelector(".carousel-control-next");
  //   const selectedItem = document.querySelector(".selected-item-1");
  //   const selectedItem2 = document.querySelector(".selected-item-2");

  //   if (selectedItem?.classList.contains("active")) {
  //     selectControlPrev?.classList.add("display-block");
  //   }

  //   if (selectedItem2?.classList.contains("active")) {
  //     selectControlNext?.classList.add("display-none");
  //   }
  // }

  // function onClickBlockLeft() {
  //   const selectControlPrev = document.querySelector(".carousel-control-prev");
  //   const selectControlNext = document.querySelector(".carousel-control-next");
  //   const selectedItem2 = document.querySelector(".selected-item-2");
  //   const selectedItem3 = document.querySelector(".selected-item-3");
  //   if (selectedItem2?.classList.contains("active")) {
  //     selectControlPrev?.classList.remove("display-block");
  //   }

  //   if (selectedItem3?.classList.contains("active")) {
  //     selectControlNext?.classList.remove("display-none");
  //   }
  // }

  return (
    <div className="body">

    <div className="main">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active item-1 selected-item-1">
            <div className="box-1 box d-block w-100">
              <h4>Input mobile number</h4>
            </div>
          </div>
          <div className="carousel-item item-2 selected-item-2">
            <div className="box-2 box d-block w-100">
              <h4>Input email address</h4>
            </div>
          </div>
          <div className="carousel-item item-3 selected-item-3">
            <div className="box-3 box d-block w-100">
              <h4>Input 5-digit PIN</h4>
            </div>
          </div>
        </div>
        <button className="btn-1">
          <img
            src="left-arrow.svg"
            alt="left-arrow"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            className="carousel-control-prev display-none"
            onMouseEnter={onClickLeft}
            // onClick={onClickBlockLeft}
          />
        </button>
        <button
          className="carousel-control-next btn-2"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          onMouseEnter={onClickRight}
          // onClick={onClickBlockRight}
        >
          Confirm
        </button>
      </div>
    </div>
    </div>
  );
}

export default Slider;
