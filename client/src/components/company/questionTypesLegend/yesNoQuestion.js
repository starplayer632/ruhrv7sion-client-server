import React from "react";
import Button from "react-bootstrap/Button";
import QuestionLIst from "../questionTypesEditor/QuestionLIst";

export default function yesNoQuestion({ setList }) {
  const addYesNoQ = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setList((list) => [...list, { type: "YesNo", id: Math.random() * 100 }]);
  };
  return (
    <>
      <div style={format}>
        <h6 style={{ paddingTop: "15px" }}> Type 1: Yes/No question </h6>
        <div>Do you have a PKW driving license?</div>
        <div style={labelContainer}>
          <label style={labelStyle}>
            <input style={inputStyle} type="checkbox" />
            Yes
          </label>
          <label style={labelStyle}>
            <input style={inputStyle} type="checkbox" />
            No
          </label>
        </div>
        <Button variant="primary" onClick={addYesNoQ}>
          Add
        </Button>
      </div>
    </>
  );
}

const format = {
  width: "350px",
  backgroundColor: "lightBlue",
  position: "relative",
  height: "205px",
  marginTop: "98px",
  textAlign: "center",
  margin: "0",
  margin: "auto",
  borderRadius: "10px",
  marginBottom: "20px",
};

const labelContainer = {
  display: "flex",
  justifyContent: "space-around",
  padding: "20px",
};

const labelStyle = {
  marginLeft: "10px",
};

const inputStyle = {
  marginLeft: "10px",
  marginRight: "10px",
};
