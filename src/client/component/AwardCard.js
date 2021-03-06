import React from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";

const AwardCard = props => (
  <Card>
    <CardBody>
      <p>{props.title}</p>
      <img alt="award" src="http://www.personalisedbanners.co.uk/user/products/CG3-congratulations-word.jpg" width="150px" />
      <p>{props.text}</p>
      <img alt="funny" src="http://replygif.net/i/279.gif" width="300px" />
      <p>{props.text}</p>
      <h6>From: {props.sender}</h6>
      <h6>To: {props.receiver}</h6>
    </CardBody>
  </Card>
)

export default AwardCard;