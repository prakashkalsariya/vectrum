import React from "react";
import "./RotateArrow.scss";
import { useState  } from "react";

function RotateArrow() {

  const [classToggleImg , setClassToggleImg] = useState(true)
  

  function onClickParaHandler() {
    setClassToggleImg(!classToggleImg)

    // const selectedRotatingArrowImg = document.querySelector(
    //   ".rotating-arrow-img"
    // );
    // const selectedHiddenPara = document.querySelector(".hidden-para");

    // if (selectedRotatingArrowImg?.classList.contains("trasition-img")) {
    //   selectedRotatingArrowImg?.classList.remove("trasition-img");
    // } else {
    //   selectedRotatingArrowImg?.classList.add("trasition-img");
    // }

    // if (selectedHiddenPara?.classList.contains("display-none")) {
    //   selectedHiddenPara?.classList.remove("display-none");
    // } else {
    //   selectedHiddenPara?.classList.add("display-none");
    // }
  }
  return (
    <div className="rotating-arrow-container">
      <div className="heading-container " onClick={onClickParaHandler}>
        <h3>Summary</h3>
        <img src="rotatingarrow.svg" alt="" className= {`rotating-arrow-img  ${ classToggleImg ? null : "trasition-img"}`}/>
      </div>

      <p className="main-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus
        hic optio alias totam dolorum temporibus voluptas cum reiciendis. Quasi!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et molestiae
        alias magnam sint, quasi saepe accusamus dignissimos, voluptas dolorum
        quam nam tempore eius dolor, necessitatibus possimus tenetur ut
        consectetur veniam. Quam fugiat impedit minima animi debitis assumenda
        temporibus numquam doloribus facere praesentium, adipisci, ab officia
        consequuntur id eligendi, ullam nesciunt.
        <span className="more-para"> ...More </span>
        {/* <span className="hidden-para display-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          ducimus molestias totam amet aut numquam assumenda? Eaque error
          laborum doloremque unde quod architecto perferendis sapiente quisquam,
          voluptatum, delectus praesentium deleniti vitae fugit libero id
          tempore consectetur dicta nostrum. Ea vel ratione iusto. Eligendi
          necessitatibus architecto fugiat, illo voluptas illum? Tempore!
        </span> */}
      </p>
    </div>
  );
}

export default RotateArrow;
