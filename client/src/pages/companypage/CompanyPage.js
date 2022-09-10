import React from "react";
import ContactData from "../../components/company/contactData";

export default function main() {
  return (
    <>
      <div
        style={{
          width: "70%",
          justifyContent: "center",
          position: "center",
          margin: "0",
          margin: "auto",
          height: "130vh",
        }}
      >
        <div
          style={{
            borderStyle: "solid",
            borderWidth: "5px",
            borderColor: "black",
            marginLeft: "6%",
            width: "35%",
            height: "250px",
            backgroundColor: "white",
            borderRadius: "25px",
            marginRight: "80px",
            marginTop: "100px",
          }}
        >
          <p> Value Proposition </p>
          <p> Product Benefit description</p>
        </div>
        <div style={container}>
          <div style={SellingPointsStyle}>
            {" "}
            <div style={sentence}>Speed up your recruitment process!</div>{" "}
            <button style={button}>
              Learn more about our recruitment flow
            </button>
          </div>
          <div style={SellingPointsStyle}>
            <div style={sentence}>Find the right employees!</div>
            <button style={button}>Learn more about our matching system</button>
          </div>
          <div style={SellingPointsStyle}>
            <div style={sentence}>
              Improve the performance of your job advertisments!
            </div>
            <button style={button}>Learn more about our dashboard</button>
          </div>
        </div>
        <h3
          style={{
            marginTop: "50px",
            textAlign: "center",
          }}
        >
          Contact Info
        </h3>
        <ContactData />
      </div>
    </>
  );
}

const container = {
  display: "flex",
  textAlign: "center",
  margin: "0",
  margin: "auto",
  justifyContent: "space-around",
};

const SellingPointsStyle = {
  diplay: "flex",
  borderStyle: "solid",
  borderWidth: "3px",
  borderColor: "#FF5B2B",
  width: "20%",
  height: "300px",
  backgroundColor: "white",
  borderRadius: "25px",
  marginTop: "80px",
  fontWeight: "bold",
  alignItems: "center",
};

const button = {
  borderRadius: "8px",
  backgroundColor: "#FF5B2B",
  color: "white",
  padding: "15px",
  width: "80%",
  fontSize: "15px",
  fontWeight: "bold",
  marginTop: "90px",
};

const sentence = {
  textAlign: "center",
  marginTop: "40px",
  height: "20%",
  width: "80%",
  marginLeft: "25px",
};
