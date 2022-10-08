
import QuestionLIst from "../company/questionTypesEditor/QuestionLIst";
import YesNoQuestion from "../company/questionTypesLegend/yesNoQuestion";
import OpenQuestion from "../company/questionTypesLegend/openQuestion";
import SliderQuestion from "../company/questionTypesLegend/sliderQuestion";
import {Button, Container, Row, Col} from "react-bootstrap";
import "../../index.css";
import Cookies from "js-cookie";
import { useState, useEffect, useRef } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

export default function () {
  const [list, setList] = useState([]);
  const [oldfunnel, setOldfunnel] = useState([]);
  const [funnelname, setFunnelname] = useState([]);
  const companyuser = Cookies.get('username');
  const navigate = useNavigate();
  const effectRan = useRef(false);
  const axiosPrivate = useAxiosPrivate();
  const location = useLocation(); 
  const funnelid = ((document.URL).split("/"))[6];


  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    let liste;
    if(effectRan.current === true){
        const getFunnel = async () => {
            try {
              const URL = '/funnels/'+funnelid;
              const response = await axiosPrivate.get(URL, {
                  signal: controller.signal
              });
              //setOldfunnel(response?.data);
              console.log(JSON.stringify(response.data.questions.length));
              const questions = response.data.questions;

              //console.log("liste.questions length: "+liste);

              for (let i = 0; i < questions.length; i++) {
                if(questions[i].type==="YesNo"){
                  console.log("YesNo detected");
                  //const idnr= Math.random() * 100;
                  const idnr= 112312;
                  setList((list) => [...list, { type: "YesNo", id : idnr }]);
                  console.log("questions[i].question: "+questions[i].question);
                  //const newid= JSON.stringify(idnr)+"question";
                  //console.log("newid: "+newid)
                  //const id= JSON.stringify(list[i].id)+"question";
                  //console.log(document.getElementById("112312question").value);
                }
              }

            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }
        
        getFunnel();

        

    }
    return () => {
        isMounted = false;
        effectRan.current = true;
        controller.abort();
    }
}, [])



  async function submitHandler(){
    //console.log("list - 0 type: "+JSON.stringify(list[0].type));
    //console.log("list - length: "+list.length);

    let questions = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].type==="YesNo") {
        const id= JSON.stringify(list[i].id)+"question";
        questions[i]={
          "type":list[i].type, 
          "question":document.getElementById(id).value,
          "points":[]
        };
      }else if(list[i].type==="slider"){
        const id= JSON.stringify(list[i].id)+"question";
        const min= JSON.stringify(list[i].id)+"min";
        const max= JSON.stringify(list[i].id)+"max";
        questions[i]={
          "type":"slider", 
          "question":document.getElementById(id).value,
          "min":document.getElementById(min).value,
          "max":document.getElementById(max).value,
          "points":[]
        };
      }else if(list[i].type==="open"){
        const id= list[i].id+"question";
        questions[i]={
          "type":"open", 
          "question":document.getElementById(id).value,
          "points":[]
        };
      }
      
    }

    const controller = new AbortController();
    try {
      const response = await axiosPrivate.post('/funnels', 
        JSON.stringify({companyuser, funnelname, questions}),{
          signal: controller.signal
      });
      console.log("new response.data.status: "+response.data.status);
      if(response?.data?.status==="ok"){
        alert("SUCCESS!");
        navigate("/business/funnels");
      }
    } catch (err) {
        console.error(err);
        navigate('/login', { state: { from: location }, replace: true });
    }

    return () => {
      controller.abort();
    }
  }

  return (
    <Container>
      <Row>
        <h4>
          <label htmlFor="funnelname">
            Funnel name:
            <input
              type="text"
              id="funnelname"
              autoComplete="off"
              onChange={(e) => setFunnelname(e.target.value)}
              style={{
                marginLeft:"20px"
              }}
              required
            />
          </label>
        </h4>
      </Row>
      <br/>
      <br/>
      <Row>
        <Col sm={8}>
          <QuestionLIst questions={list} setList={setList} />
        </Col>
        <Col sm={4}>
          <div style={elements}>
            <div style={wrapper}>
              <h3 style={{ marginTop: "7px" }}>Elements </h3>
            </div>
            <YesNoQuestion setList={setList} />
            <OpenQuestion setList={setList} />
            <SliderQuestion setList={setList} />
          </div>
        </Col>
      </Row>
      <br/>
      <Row>
        <Button style={list.length !== 0 ? show : hide} variant="primary" onClick={submitHandler}>
          CREATE FUNNEL
        </Button>
      </Row>
    </Container>
  );
}

const show = {
  display: "block",
};

const hide = {
  display: "none",
};

const container = {
  width: "70%",
  justifyContent: "center",
  position: "center",
  margin: "0",
  margin: "auto",
  minHeight: "50vh",
  display: "flex",
  paddingBottom: "50px",
  marginTop: "60px",
};

const elements = {
  width: "30%",
  marginTop: "100px",
  color: " ",
  backgroundColor: "lightGrey",
  height: "760px",
  width: "400px",
  borderRadius: "25px",
  marginLeft: "auto",
  marginRight: "0",
  paddingBottom: "180px",
  padding: " 30px 30px",
};

const wrapper = {
  display: "flex",
  justifyContent: "space-around",
};