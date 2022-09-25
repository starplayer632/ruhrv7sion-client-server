import React from "react";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function openQuestionE({ question, list, setList }) {
  function deleteHandler(e) {
    e.preventDefault();
    console.log({ question });
    console.log("lista" + list);
    list.forEach((element) => {
      console.log(element.id);
    });
    setList(list.filter((el) => el.id !== question.id));
  }
  return (
    <>
      <div style={{ height: "auto" }}>
        <div style={format}>
          <div style={{ paddingTop: "15px" }}>
            <TextField
              id="outlined-basic"
              label="Type in the question title"
              variant="outlined"
              multiline
              style={{
                backgroundColor: "white",
                width: "82%",
              }}
            />

            <div style={labelContainer}>
              <TextField
                id="outlined-basic"
                label="Type in your answear"
                variant="outlined"
                multiline
                rows="7"
                style={{
                  backgroundColor: "white",
                  width: "90%",
                }}
              />
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
        </div>
      </div>
    </>
  );
}

const format = {
  width: "60%",
  backgroundColor: "lightBlue",
  position: "relative",
  height: "357px",
  marginTop: "98px",
  textAlign: "center",
  margin: "0",
  margin: "auto",
  borderRadius: "10px",
  marginBottom: "30px",
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
