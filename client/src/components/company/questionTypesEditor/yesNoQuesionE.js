import React from "react";
import Button from "react-bootstrap/Button";

export default function yesNoQuestion(props) {
  return (
    <>
      <div style={format}>
        <div style={{ paddingTop: "15px" }}>
          <form>
            <input
              style={{ width: "75%" }}
              placeholder="Type in the Question title"
              type="text"
            />
          </form>
        </div>
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
      </div>
      ;
    </>
  );
}

const format = {
  width: "60%",
  backgroundColor: "lightBlue",
  position: "relative",
  height: "130px",
  marginTop: "98px",
  textAlign: "center",
  margin: "0",
  margin: "auto",
  borderRadius: "10px",
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
//const addQuestion = () => {};
