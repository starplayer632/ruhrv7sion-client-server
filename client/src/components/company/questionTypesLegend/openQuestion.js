import React from "react";
import Button from "react-bootstrap/Button";

export default function openQuestion({ setList }) {
  const addOpenQ = (e) => {
    e.preventDefault();
    setList((list) => [...list, { type: "open", id: Math.random() * 100 }]);
  };
  return (
    <>
      <div style={format}>
        <h6 style={{ paddingTop: "15px" }}> Type 2: Open question </h6>
        <div>Tell us something about yourself</div>
        <div style={labelContainer}>
          <input type="text" />
        </div>
        <Button variant="primary" onClick={addOpenQ}>
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
  height: "189px",
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
