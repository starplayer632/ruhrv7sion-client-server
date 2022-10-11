import React from 'react'
import LandingBanner from '../../components/student/LandingBanner';
import Header_Student from '../../components/headers/Header_Student';
import Footer from '../../components/Footer';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import img from "../../images/zeche.JPG";
import { TiStopwatch } from "react-icons/ti";
import ContactData from "../../components/company/contactData";
import {Container, Button} from "react-bootstrap";
import ruhrarea from "../../assets/img/ruhr-area.jpg";

const LandingStudent = () => {
	return (
		<div style={{
			backgroundColor:'#f5f5f5',
		}}>
			<Header_Student/>
      <div style={{
        width:"100%", 
        height:"800px",
        position: "relative"
      }}>
        <img
          src={ruhrarea}
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "0 60%"
          }}
          alt="Landing image"
        />
        <Container style={{
            marginLeft:"50%",
            position: "abolsute",
            marginTop: "-500px",
            color:"white",
        }}>
          <h1 style={{
            textShadow: "0 0 10px black"
          }}>
            Ruhrv7sion - <br />
            Zukunftsregister <br /> 
            Unternhemen mal anders <br />
            <Button href="/zukunftsregister">Zum Zukunftsregister</Button>
          </h1>
        </Container>
      </div>
			<LandingBanner />
			<Container style={{backgroundColor: "white"}}>
      <br/>
			<h3
          style={{ marginBottom: "-41px", color: "white", marginLeft: "10px" }}
        >
          Deine beste Wahl{" "}
        </h3>
        <div style={trapez2}>
          <div
            style={{
              display: "flex",
              height: "600px",
              width: "100%",
              flexDirection: "column",
              marginBottom: "40px",
            }}
          >

          </div>
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            margin: "0",
            margin: "auto",
            justifyContent: "space-around",
            marginTop: "40px",
          }}
        >
          <div style={trapez}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FavoriteBorderIcon
                style={{
                  fontSize: "150px",
                  color: "FF5B2B",
                  marginTop: "30px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                height: "600px",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <h3 style={header}>Matching </h3>
              <div style={sentence}>
                RUHRV7SION Matching lässt Dich jeder Wissen, wer sich für Deine
                Anzeige interessiert. Und wie gut Kandidat/innen zu Deinen
                Kriterien passen{" "}
              </div>
            </div>
          </div>
          <div style={squere}>
            <img src={img} style={{ marginTop: "20px" }} />
            <div
              style={{
                display: "flex",
                height: "600px",
                width: "100%",
                flexDirection: "column",
                marginTop: "5px",
              }}
            >
              <h3 style={header2}>Power ausm Pott</h3>
              <div style={sentence2}>
                Auf RUHRV7SION sind lauter Studierende aus dem Ruhrgebiet
                unterwegs. Deine Job angebote treffen also genau die richtige
                Zielgruppe.
              </div>
            </div>
          </div>
          <div style={squere}>
            <TiStopwatch
              style={{
                fontSize: "150px",
                color: "FF5B2B",
                marginTop: "18px",
                marginBottom: "8px",
              }}
            />
            <div
              style={{
                display: "flex",
                height: "600px",
                width: "100%",
                flexDirection: "column",
                marginTop: "5px",
              }}
            >
              <h3 style={header2}>Schnell und Easy</h3>
              <div style={sentence2}>
                Deine Anzeigen sind schnell und einfach erstellt. Und die ersten
                Kandidat/innen melden sich sogar noch schneller.
              </div>
            </div>
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
      <div style={{
          height:'100px'
      }}></div>
		</Container>
		<Footer/>
		</div>
	)


	
	  
}
const header3 = {
	color: "white",
	textAlign: "center",
	float: "left",
	margin: "0 auto",
	width: "100%",
	height: "50px",
	position: "absolute",
	marginBottom: "50px",
  };
  
  const trapez2 = {
	alignItems: "center",
	borderTop: "50px solid #FF5B2B",
	borderRight: "40px solid transparent",
	height: "0",
	width: "35%",
	textAlign: "justify",
  };
  
  const squere = {
	width: "40%",
	height: "380px",
	backgroundColor: "white",
	borderBottom: "solid 2px #010837",
  };
  const trapez = {
	alignItems: "center",
	borderBottom: "380px solid #010837",
	borderRight: "160px solid transparent",
	height: "0",
	width: "50%",
	backgroundColor: "white",
  };
  
  const header = {
	color: "white",
	textAlign: "center",
	float: "left",
	margin: "0 auto",
	width: "100%",
	height: "30px",
  };
  
  const header2 = {
	color: "#010837",
  };
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
  
  const sentence2 = {
	color: "#010837",
	float: "left",
	clear: "left",
	margin: "0 auto",
	textAlign: "left",
	height: "20%",
	width: "74%",
	marginTop: "5px",
  };
  const sentence = {
	color: "white",
	float: "left",
	clear: "left",
	margin: "0 auto",
	textAlign: "left",
	height: "20%",
	width: "85%",
	marginTop: "17px",
	marginLeft: "3em",
  };

export default LandingStudent