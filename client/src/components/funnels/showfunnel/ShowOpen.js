import React from "react";
import {Button, Col, Row, Form } from "react-bootstrap";

export default function showOpen({question, id}) {
/*
className="mb-3"
*/
    return (
        <Form.Group style={{textAlign: "center"}}>
            <h3>
                {question}
            </h3>
            <Form.Control
                type="text"
                id={id}
            />
        </Form.Group>
    );
}