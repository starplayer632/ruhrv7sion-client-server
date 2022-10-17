import React from "react";
import Logi from "../../components/LoginCompanies";
import Header_Company from "../../components/headers/Header_Company";
import Footer from "../../components/Footer";

const LoginCompany = () => {
  return (
    <div>
      <Header_Company />
      <div style={{ minHeight: "100vh" }}>
        <br />
        <br />
        <h3 style={{ textAlign: "center" }}>
          Are you a student? Click <a href="/login">here</a>
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

export default LoginCompany;
