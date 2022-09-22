import React from "react";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";

export default function openQuestionE(props) {
  return (
    <>
      <div style={{ height: "auto" }}>
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
  height: "300px",
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
