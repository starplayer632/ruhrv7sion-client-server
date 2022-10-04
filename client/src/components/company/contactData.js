import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

export default function () {
  return (
    <div
      style={{
        width: "40%",
        margin: "0",
        margin: "auto",
        //justifyContent: "space-around",
        position: "relative",
        height: "160px",
        marginTop: "30px",
      }}
    >
      <div style={contactLine}>
        {" "}
        <RiMailSendLine size={52} />{" "}
        <span style={{ fontSize: "23px" }}> E-Mail</span>
        <span style={{ fontSize: "20px" }}> info@ruhrv7sion.de</span>{" "}
      </div>
      <div style={contactLine}>
        <PhoneInTalkIcon style={{ fontSize: 52 }} />
        <span style={{ fontSize: "23px" }}> Phone</span>
        <span style={{ fontSize: "20px" }}> +49 000 0000000</span>{" "}
      </div>
    </div>
  );
}

let contactLine = {
  width: "95%",
  marginTop: "20px",
};
