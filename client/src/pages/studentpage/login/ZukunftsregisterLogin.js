import React from "react";
import LandingBanner from "../../../components/student/LandingBanner";
import Header_Student_Login from "../../../components/headers/Header_Student_Login";
import Footer from "../../../components/Footer";
import Cards from "../../../components/student/Cards.js";
import { Container } from "react-bootstrap";

const ZukunftsregisterLogin = () => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <Header_Student_Login />
      <br />
      <Container>
        <div style={{ minHeight: "100vh" }}>
          <h2 style={{ paddingTop: "30px" }}>Zukunftsregister</h2>
          <br />
          <Cards />
          <br />
        </div>
      </Container>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ZukunftsregisterLogin;
