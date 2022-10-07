import React, { useState } from "react";
import QuestionLIst from "../../../components/company/questionTypesEditor/QuestionLIst";
import YesNoQuestion from "../../../components/company/questionTypesLegend/yesNoQuestion";
import OpenQuestion from "../../../components/company/questionTypesLegend/openQuestion";
import SliderQuestion from "../../../components/company/questionTypesLegend/sliderQuestion";
import Button from "react-bootstrap/Button";
import "../../../index.css";

export default function () {
  const [list, setList] = useState([]);



  function submitHandler(){
    console.log(list);
    console.log(list[0].id);
  }

  return (
    <>
      <div style={container}>
        <div style={{ width: "120%" }}>
          <h1
            style={{
              margin: "0 auto",
              width: "90%",
              borderBottom: "2px solid grey",
              paddingBottom: "20px",
              marginBottom: "10px",
            }}
          >
            Funnel Editor
          </h1>
          <QuestionLIst questions={list} setList={setList} />
        </div>
        <div style={elements}>
          <div style={wrapper}>
            <h3 style={{ marginTop: "7px" }}>Elements </h3>
          </div>
          <YesNoQuestion setList={setList} />
          <OpenQuestion setList={setList} />
          <SliderQuestion setList={setList} />
        </div>
      </div>
      <div style={{ height: "300px", margin: "0 auto", width: "46%" }}>
        <Button style={list.length !== 0 ? show : hide} variant="primary" onClick={submitHandler}>
          Submit
        </Button>{" "}
      </div>
    </>
  );
}

const show = {
  display: "block",
};

const hide = {
  display: "none",
};

const container = {
  width: "70%",
  justifyContent: "center",
  position: "center",
  margin: "0",
  margin: "auto",
  minHeight: "50vh",
  display: "flex",
  paddingBottom: "50px",
  marginTop: "60px",
};

const elements = {
  width: "30%",
  marginTop: "100px",
  color: " ",
  backgroundColor: "lightGrey",
  height: "760px",
  width: "400px",
  borderRadius: "25px",
  marginLeft: "auto",
  marginRight: "0",
  paddingBottom: "180px",
  padding: " 30px 30px",
};

const wrapper = {
  display: "flex",
  justifyContent: "space-around",
};
