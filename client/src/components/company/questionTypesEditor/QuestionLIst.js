import React from "react";
import YesNoQuestion from "./yesNoQuesionE";
import OpenQuestion from "../questionTypesEditor/openQuestionE";
import SliderQuestion from "../questionTypesLegend/sliderQuestion";

export default function QuestionLIst({ questions, questionsO }) {
  return (
    <div style={container}>
      <ul>
        {questions.map((question) =>
          question.type == "YesNo" ? (
            <YesNoQuestion />
          ) : question.type == "open" ? (
            <OpenQuestion />
          ) : (
            <SliderQuestion />
          )
        )}
      </ul>
    </div>
  );
}

const container = {
  width: "55%",
  height: "60%",
  marginTop: "100px",
};
