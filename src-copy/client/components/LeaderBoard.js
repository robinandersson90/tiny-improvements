import React from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";

const LeaderBoard = props => (
    <Card>
        <CardBody>
            <h1> Kudos Champion </h1>
            <h6>To: {props.TopDog}</h6>
        </CardBody>
    </Card>
)

export default LeaderBoard;
