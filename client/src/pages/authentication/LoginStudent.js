import React from "react";
import Logi from "../../components/LoginStudents";
import Header_Student from "../../components/headers/Header_Student";
import Footer from "../../components/Footer";

const LoginStudent = () => {
  return (
    <div>
      <Header_Student />
      <div style={{ minHeight: "100vh" }}>
        <br />
        <br />
        <h3 style={{ textAlign: "center" }}>
          Are you a company user? Click <a href="/business/login">here</a>
        </h3>
        <br />
        <br />
        <Logi />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default LoginStudent;
