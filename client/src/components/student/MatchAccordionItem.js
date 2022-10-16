import React from "react";
import {Accordion, Row, Col } from "react-bootstrap";

export default function MatchAccordionItem({id, index, allmatches}) {
    return (
        <>
            <br/>
            <Accordion.Item eventKey={index}>
                <Accordion.Header> Funnel: {id} </Accordion.Header>
                <Accordion.Body> 
                    <Accordion defaultActiveKey="1000">
                        {allmatches.map((match, indi) => (
                            match.funnelid == id ? (
                                <>
                                    <Accordion.Item eventKey={indi+1000}>
                                        <Accordion.Header>Name: {match.name}</Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col>Name: </Col>
                                                <Col>{match.name}</Col>
                                            </Row>
                                            <Row>
                                                <Col>E-Mail: </Col>
                                                <Col>{match.email}</Col>
                                            </Row>
                                            <Row>
                                                <Col>Datum: </Col>
                                                <Col>{match.createdat}</Col>
                                            </Row>
                                            <Row>
                                                <Col>questions: </Col>
                                                <Col>{JSON.stringify(match.questions)}</Col>
                                            </Row>
                                            <Row>
                                                <Col>answers: </Col>
                                                <Col>{JSON.stringify(match.answers)}</Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <br/>
                                </>
                            ) : (
                                <>
                                </>
                            )

                        ))} 
                    </Accordion>
                </Accordion.Body>
            </Accordion.Item>
            
        </>
    );
}


 