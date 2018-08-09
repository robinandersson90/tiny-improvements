import React, { Component } from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";
import AwardCard from './components/AwardCard';
import axios from "axios";


class App extends Component {
  state = {
    users: [],
    awards: [],
    sender: "",
    receiver: "",
    comment: "",
    title: "",
    emaillookup: "",
  }

  //Button to submit calls all the MVP's with more than 3 Badges. 
  getMVP = () => {
    axios.get("/api/mvp/")
      .then(response => {
        this.setState({
          awards: response.data
        })
      })
  };
  useremail = event => {
    this.setState({ emaillookup: event.target.value });
  };
  searchemail = () => {
    axios.get("/api/searchemail/" + this.state.emaillookup)
      .then(response => {
        this.setState({
          awards: response.data
        })
      })
  };

  componentDidMount = () => {
    axios.get("/api/kudos")
      .then(response => {
        this.setState({
          awards: response.data
        })
      })

    axios.get("/api/users")
      .then(response => {
        this.setState({
          users: response.data
        })
      })
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>🇸🇪 Robins Final Project🇸🇪</h1>
          </Col>
        </Row>
        <Row>
          <Col md="12" lg="4">
            <Form>
              <FormGroup>
                <Label>🏆 Most Valuable Coders🏆</Label>
                <br />
                <br />
                <Button onClick={this.getMVP}>See the MVP's</Button>
              </FormGroup>
            </Form>
          </Col>
          <Col md="12" lg="4">
            <Form>
              <FormGroup>
                <Label>🥅 Filter by Receivers 🥅</Label>
                <Input type="select" onChange={this.receiverFilter}>
                  <option>Please select a person!</option>
                  {this.state.users.map(elem => <option>{elem.name}</option>)}
                </Input>
                <Button onClick={this.recFilter}>Receivers</Button>
              </FormGroup>
            </Form>
          </Col>
          <Col md="12" lg="4">
            <Form>
              <FormGroup>
                <Label>🏒 Filter by Senders 🏒</Label>
                <Input type="select" onChange={this.senderFilter}>
                  <option>Please select a person!</option>
                  {this.state.users.map(elem => <option>{elem.name}</option>)}
                </Input>
                <Button onClick={this.sendFilter}>Senders</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Card>
              <CardBody className="mx-auto">
                <Button color="success">Give Kudos</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="3">
            <Form>
              <FormGroup>
                <Label>Search by email</Label>
                <Input type="text" onChange={this.useremail}>
                </Input>
                <Button onClick={this.searchemail}>Search for user</Button>
              </FormGroup>
            </Form>
          </Col>
          <Col md="12" lg="6">
          </Col>
        </Row>
        <Row>
          <Col md="12">
            {this.state.awards.map(elem => (
              <AwardCard title={elem.name}
                key={elem.id}
                sender={elem.sender__r.Name}
                receiver={elem.receiver__r.Name}
                text={elem.comment__c} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;