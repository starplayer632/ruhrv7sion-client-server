import React from "react";
import Button from "react-bootstrap/Button";
import { TextField } from "@mui/material";
import Slider, { Range } from "rc-slider";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import "rc-slider/assets/index.css";
export default function sliderQuestion({ question, setList, list }) {
  function deleteHandler(e) {
    e.preventDefault();
    console.log({ question });
    console.log("lista" + list);
    setList(list.filter((el) => el.id !== question.id));
  }
  return (
    <>
      <div style={format}>
        <TextField
          id={question.id+"question"}
          label="Type in the question title"
          outlined-b
          variant="outlined"
          multiline
          style={{
            marginTop: "20px",
            marginBottom: "50px",
            backgroundColor: "white",
            width: "82%",
          }}
        />
        <Slider
          aria-label="Temperature"
          style={{ width: "250px", margin: "0", margin: "auto" }}
          defaultValue={30}
          sx={{ width: 20, color: "success.main" }}
          getAriaValueText={"valuetext"}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={100}
        />
        <div style={labelContainer}>
          <span>
            <input id={question.id+"min"} type="text" style={{ width: "50%" }} />
          </span>
          <span style={{ marginBottom: "10px" }}>
            <input id={question.id+"max"} type="text" style={{ width: "50%" }} />
          </span>
        </div>
        <div style={{ width: "90%", margin: "0 auto" }}>
          <div
            style={{
              margin: "0 auto",
              width: "90%",
              borderBottom: "0.3px solid grey",
              marginBottom: "10px",
            }}
          ></div>
          <button style={{ marginLeft: "20px", float: "left" }}>
            <AiOutlineArrowUp />
          </button>
          <button style={{ marginLeft: "8px", float: "left" }}>
            <AiOutlineArrowDown />
          </button>
          <button
            style={{ marginLeft: "8px", float: "left" }}
            onClick={deleteHandler}
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
}

const format = {
  width: "60%",
  backgroundColor: "lightBlue",
  position: "relative",
  height: "260px",
  marginTop: "98px",
  textAlign: "center",
  margin: "0",
  margin: "auto",
  borderRadius: "10px",
  marginBottom: "20px",
  paddingBottom: "270px",
  padddingTop: "130px",
};

const labelContainer = {
  display: "flex",
  padding: "17px",
  width: "100%",
  margin: "0",
  margin: "auto",
  justifyContent: "space-around",
};

const labelStyle = {
  marginLeft: "10px",
};

const inputStyle = {
  marginLeft: "10px",
  marginRight: "10px",
};
