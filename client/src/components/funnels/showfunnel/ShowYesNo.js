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
                label="Ja"
                name="group1"
                type="radio"
                id={idyes}
            />
            <Form.Check
                inline
                label="Nein"
                name="group1"
                type="radio"
                id={idno}
                checked="true"
            />
        </Form.Group>
        
        
    );
}