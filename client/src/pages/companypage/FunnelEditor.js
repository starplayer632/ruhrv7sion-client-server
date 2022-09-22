import React, { useState } from "react";
import QuestionLIst from "../../components/company/questionTypesEditor/QuestionLIst";
import YesNoQuestion from "../../components/company/questionTypesLegend/yesNoQuestion";
import OpenQuestion from "../../components/company/questionTypesLegend/openQuestion";
import SliderQuestion from "../../components/company/questionTypesLegend/sliderQuestion";

export default function () {
  const [list, setList] = useState([]);
  const [listO, setListO] = useState({});
  console.log(list);
  return (
    <div style={container}>
      <QuestionLIst questions={list} questionsO={listO} />
      <div style={elements}>
        <div style={wrapper}>
          <h3 style={{ marginTop: "30px" }}>Elements </h3>
        </div>
        <YesNoQuestion setList={setList} />
        <OpenQuestion setList={setList} />
        <SliderQuestion setList={setList} />
      </div>
    </div>
  );
}

const container = {
  width: "70%",
  justifyContent: "space-around",
  position: "center",
  margin: "0",
  margin: "auto",
  height: "130vh",
  display: "flex",
};

const elements = {
  width: "30%",
  marginTop: "100px",
  color: " ",
  backgroundColor: "lightGrey",
  height: "700px",
  width: "400px",
  borderRadius: "25px",
  marginLeft: "auto",
  marginRight: "0",
  paddingBottom: "30px",
};

const wrapper = {
  display: "flex",
  justifyContent: "space-around",
};
