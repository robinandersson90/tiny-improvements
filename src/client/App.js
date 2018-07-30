import React, { Component } from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";
import AwardCard from './component/AwardCard';
import axios from "axios";
import KudosForm from './component/KudosForm';

class App extends Component {
  state = {
    users: [],
    awards: [],
    kudosText: "",
    kudosTitle: "",
    Giver: "",
    Sender: "",
  }

  updateKudosText = event => {
    this.setState({ kudosText: event.target.value });
  }
  updateKudosTitle = event => {
    this.setState({ kudosTitle: event.target.value });
  }
  updateGiver = event => {
    this.setState({ kudosGiver: event.target.value });
  }
  updateSender = event => {
    this.setState({ kudosSender: event.target.value });
  }


  postData = () => {
    axios.post("/api/kudos", {
      Giver: this.state.kudosGiver,
      Sender: this.state.kudosSender,
      kudosTitle: this.state.kudosTitle,
      kudosText: this.state.kudosText,
    })
      .then(response => {
        this.setState({
          awards: response.data
        })
      })
  }

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
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>Tiny Progress</h1>
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
          <Col md="12" lg="9">
            {this.state.awards.map(elem => <AwardCard title={elem.title} text={elem.comment} />)}
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <KudosForm
              users={this.state.users}
              kudosText={this.state.kudosText}
              kudosTitle={this.state.kudosTitle}
              updateKudosText={this.updateKudosText}
              updateKudosTitle={this.updateKudosTitle}
              Giver={this.state.Giver}
              kudosGiver={this.state.updateGiver}
              Sender={this.state.Sender}
              kudosSender={this.state.updateSender}

            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;