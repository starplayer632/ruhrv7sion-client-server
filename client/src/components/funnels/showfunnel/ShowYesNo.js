import React from "react";
import {Button, Col, Row, Form } from "react-bootstrap";

export default function showYesNo({question, id}) {
/*
className="mb-3"
*/
    const idyes = id+"yes";
    const idno = id+"no";
    return (
        <Form.Group style={{textAlign: "center"}}>
            <h3>
                {question}
            </h3>
            <Form.Check
                inline
                name="group1"
                type="radio"
                id={idyes}
            />
            <label for={idyes} style={{
                marginRight:"20px"
            }}>Ja</label>
            <Form.Check
                inline
                name="group1"
                type="radio"
                id={idno}
                checked="true"
                style={{
                    marginLeft:"20px"
                }}
            />
            <label for={idno}>Nein</label>
        </Form.Group>
        
        
    );
}