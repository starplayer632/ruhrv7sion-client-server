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
    console.log("list - plain: "+JSON.stringify(list));
    const liste= JSON.stringify(list);
    console.log("list - 0 type: "+liste[0].type);
    console.log("list - length: "+list.length);
    let funnel = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].type=="YesNo") {
        const id= list[i].id+"question";
        funnel[i].type=list[i].type;
        funnel[i].value=document.getElementById(id).value;
      }else if(list[i].type=="slider"){
        const id= list[i].id+"question";
        const min= list[i].id+"min";
        const max= list[i].id+"max";
        funnel[i].type=list[i].type;
        funnel[i].value=document.getElementById(id).value;
        funnel[i].min=document.getElementById(min).value;
        funnel[i].max=document.getElementById(max).value;
      }else if(list[i].type=="open"){
        const id= list[i].id+"question";
        funnel[i].type=list[i].type;
        funnel[i].value=document.getElementById(id).value;
      }
    }
    console.log(list[0].id);
    console.log("0: value: "+document.getElementById(list[0].id).value);
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
