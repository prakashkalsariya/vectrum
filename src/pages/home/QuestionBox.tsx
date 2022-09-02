/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { IQuestion } from "../../@types/IQuestion";

import "./QuestionBox.scss";

interface IQuestionBox {
  questionData: IQuestion;
}

const QuestionBox = ({ questionData }: IQuestionBox) => {
  let answereTextContainerHeight: number | null = null;
  let answereParagraph: HTMLElement | null = null;
  let answereParagraphHeight: string | null = null;
  let userDetailsContainer: HTMLElement | null = null;
  let readMoreTextButton: HTMLElement | null = null;
  let gradientBackground: HTMLElement | null = null;

  const answereTextClass = `answere-text-${questionData.id}`;
  const userDetailsContainerClass = `user-details-container-${questionData.id}`;
  const readMoreButtonClass = `read-more-button-${questionData.id}`;
  const gradientBackgroundClass = `gradient-background-${questionData.id}`;
  

  useEffect(() => {
    answereParagraph = document.querySelector(
      `.${answereTextClass}`
    ) as HTMLElement | null;

    const lineHeight = 22;
    const containerHeight = answereParagraph?.offsetHeight as number;

    if (!answereTextContainerHeight) {
      answereTextContainerHeight = containerHeight;
    }

    if (answereParagraph) {
      answereParagraph.style.lineHeight = lineHeight + "px";
      answereParagraph.style.height = 5 * lineHeight + "px";
    }

    userDetailsContainer = document.querySelector(
      `.${userDetailsContainerClass}`
    ) as HTMLElement | null;
    readMoreTextButton = document.querySelector(
      `.${readMoreButtonClass}`
    ) as HTMLElement | null;
    gradientBackground = document.querySelector(
      `.${gradientBackgroundClass}`
    ) as HTMLElement | null;
  }, [questionData.id]);

  const toggleReadMore = () => {

    const selectedRotatingArrowImg = document.querySelector(
      ".rotating-arrow-img"
    );
    if (selectedRotatingArrowImg?.classList.contains("trasition-img")) {
         selectedRotatingArrowImg?.classList.remove("trasition-img");
       } else {
         selectedRotatingArrowImg?.classList.add("trasition-img");
      }
  
    if (!answereParagraphHeight) {
      const answereParagraphClone = document.querySelector(
        `.hidden-${answereTextClass}`
      ) as HTMLElement | null;

      const containerHeight = answereParagraphClone?.offsetHeight as number;

      answereParagraphHeight = answereParagraph?.style.height as string;

      if (answereParagraph)
        answereParagraph.style.height = containerHeight + "px";

      userDetailsContainer?.classList.add("display-none");
      gradientBackground?.classList.add("hide-background");

      if (readMoreTextButton) readMoreTextButton.textContent = "Read less";
      return;
    }

    if (answereParagraph) {
      answereParagraph.style.height = answereParagraphHeight;
      userDetailsContainer?.classList.remove("display-none");
      if (readMoreTextButton) readMoreTextButton.textContent = "Read more";
      answereParagraphHeight = null;
      gradientBackground?.classList.remove("hide-background");
      return;
    }
   
  };

  return (
    <div className="question-box">
      <div className="quetion-content-container">

      <div className="heading-container ">
      <h2 className="title text-title">{questionData.question}</h2>
      <img
          src="rotatingarrow.svg"
          alt=""
          className="rotating-arrow-img"
        />
      </div>
       
        <br />
        <div className="title-devider" />
        <div className="answere-container text-secondary-dark">
          <div
            className={`answere-text text-paragraph ${answereTextClass}`}
          >
            {questionData.answere}
          </div>
          <div className={`hidden-answere-text hidden-${answereTextClass}`}>
            {questionData.answere}
          </div>
          <div className="read-more-container" onClick={toggleReadMore}>
           
            <p
              className={`read-more-button text-secondary-dark ${readMoreButtonClass}`}
            >
              Read more
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuestionBox;
