import React from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";

const AwardCard = props => (
  <Card>
    <CardBody className="mx-auto">
      <img alt="award" src="http://www.pngmart.com/files/3/Award-PNG-Photos.png" width="50px" />
      <p>Badge Name</p>
      <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
      <h2> {props.title} </h2>
      <p>{props.text}</p>
    </CardBody>
  </Card>
)

export default AwardCard;