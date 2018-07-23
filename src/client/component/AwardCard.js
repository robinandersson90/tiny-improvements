import React from "react";
import { Col, Container, Row, Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";

const AwardCard = props => (
    <Card>
        <CardBody className="mx-auto">
            <img alt="award" src="http://www.pngmart.com/files/3/Award-PNG-Photos.png" width="50px" />
            <h4> {props.title} </h4>
            <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
            <h6> {props.receiver} </h6>
            <p> {props.comment} </p>
        </CardBody>
    </Card>
)

export default AwardCard;