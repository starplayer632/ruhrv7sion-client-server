import { Container, ListGroup, Button } from "react-bootstrap";
import axi from "../../api/axios";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import ".//cards.css";

const Cards = () => {
  const [rawList, setRawList] = useState([]);
  const [helper, setHelper] = useState(0);
  //const [isHover, setIsHover] = useState(false);
  /*
  const handleMouseEnter = (e) => {
    setIsHover(true);
  };
  const handleMouseLeave = (e) => {
    setIsHover(false);
  };
  */

  let firstload = true;
  useEffect(() => {
    if (!firstload) {
      axi.get("/companycards").then((response) => {
        const d = response.data;
        //console.log(d);
        setRawList(d);
      });
    } else {
      firstload = false;
    }
  }, []);

  function showBig(companyuser) {
    Navigate("/" + companyuser);
  }

  /** Only God knows what I am diong over here */

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignContent: "flex-start",
      }}
    >
      {rawList.map((card) => (
        <div style={cardStyle}>
          <a
            style={{
              color: /*isHover ? "grey" :*/ "black",
              textDecoration: "none",
            }}
            href={"/zukunftsregister/" + card.companyuser}
          >
            <h2 style={{ borderBottom: "1px solid grey", padding: "6px" }}>
              {card.companyname}
            </h2>
          </a>
          <p style={branch}> branch: {card.branch} </p>
          <div style={{ height: "50%" }}>
            <ul style={{ textAlign: "left", margin: "0", padding: "0" }}>
              <li>
                <span style={point}>Adress: </span> {card.adress}
              </li>
              <li>
                <span style={point}>Company size: </span> {card.size}
              </li>
              <li>
                <span style={point}>Quote: </span>
                {card.visionstatement}
              </li>
            </ul>
          </div>
          <br />
          <div
            style={{
              display: "table-cell",
              verticalAlign: "bottom",
              bottom: "0px",
            }}
            className="d-grid gap-2"
          >
            <Button
              variant="secondary"
              href={"/zukunftsregister/" + card.companyuser}
              style={{
                fontWeight: "500",
                width: "100%",
                backgroundColor: "#010837",
              }}
            >
              Learn more{" "}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

const cardStyle = {
  height: "400px",
  width: "27%",
  backgroundColor: "white",
  borderRadius: "25px",
  padding: "2% 3% 0 3% ",
  float: "left",
  marginBottom: "10%",
  postion: "relative",
};

const wrapper = {
  width: "70%",
};

const branch = {
  fontWeight: "bold",
  fontSize: "19px",
  color: "rgba(38, 12, 12, 0.5)",
};

const point = {
  fontWeight: "bold",
};

const callToAction = {
  color: "FF5B2B",
  textDecoration: "none",
};
