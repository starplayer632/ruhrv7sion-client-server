import React from "react";
import YesNoQuestion from "./yesNoQuesionE";
import OpenQuestion from "../questionTypesEditor/openQuestionE";
import SliderQuestion from "../questionTypesEditor/sliderQuestionE";

export default function QuestionLIst({ questions, setList }) {
  return (
    <div style={container}>
      <ul>
        {questions.map((question) =>
          question.type == "YesNo" ? (
            <YesNoQuestion
              question={question}
              list={questions}
              setList={setList}
              key={question.id}
            />
          ) : question.type == "open" ? (
            <OpenQuestion
              question={question}
              list={questions}
              setList={setList}
              key={question.id}
            />
          ) : (
            <SliderQuestion
              question={question}
              list={questions}
              setList={setList}
              key={question.id}
            />
          )
        )}
      </ul>
    </div>
  );
}

const container = {
  width: "105%",
  height: "60%",
  marginTop: "100px",
};
