import React from "react";
import Button from "react-bootstrap/Button";
import QuestionLIst from "../questionTypesEditor/QuestionLIst";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
export default function yesNoQuestion({ list, setList }) {
  const addYesNoQ = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setList([...list, { id: Math.random() * 100 }]);
  };
  return (
    <>
      <div style={format}>
        <h6 style={{ paddingTop: "15px" }}> Type 3: Range question </h6>
        <div>How would you estimate your current react skill level</div>
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
          <span>beginner</span>
          <Button
            style={{ marginTop: "35px" }}
            variant="primary"
            onClick={addYesNoQ}
          >
            Add
          </Button>
          <span style={{ marginBottom: "10px" }}>excellent</span>
        </div>
      </div>
    </>
  );
}

const format = {
  width: "350px",
  backgroundColor: "lightBlue",
  position: "relative",
  height: "200px",
  marginTop: "98px",
  textAlign: "center",
  margin: "0",
  margin: "auto",
  borderRadius: "10px",
  marginBottom: "20px",
};

const labelContainer = {
  display: "flex",
  padding: "7px",
  width: "90%",
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
