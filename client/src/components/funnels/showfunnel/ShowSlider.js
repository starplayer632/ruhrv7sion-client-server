import React from "react";
import {Button, Col, Row, Form } from "react-bootstrap";

export default function showSlider({question, id, min, max}) {
/*
className="mb-3"
*/
    return (
        <Form.Group controlId="formBasicEmail">
            <h3>
                {question}
            </h3>
            <Row>
                <Col>
                    {min}
                </Col>
                <Col>
                    <Form.Range
                        id={id}
                    />
                </Col>
                <Col>
                    {max}
                </Col>
            </Row>
        </Form.Group>
    );
}