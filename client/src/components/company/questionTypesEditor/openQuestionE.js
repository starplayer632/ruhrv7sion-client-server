import React from "react";
import Button from "react-bootstrap/Button";

export default function openQuestionE(props) {
  return (
    <>
      <div style={format}>
        <div style={{ paddingTop: "15px" }}>
          <form>
            <input
              style={{ width: "350px" }}
              placeholder="Type in the Question title"
              type="text"
            />
          </form>
          <div style={labelContainer}>
            <input type="text" />
          </div>
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
