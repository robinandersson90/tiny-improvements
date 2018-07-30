import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const KudosForm = props => (
  <Form>
    <FormGroup>
      <Label>Give Kudos to</Label>
      <Input type="select" onChange={props.kudosGiver} value={props.Giver}>
        {props.users.map(element => <option>{element.name}</option>)}
      </Input>
    </FormGroup>
    <FormGroup>
    <Label>Kudos Given By</Label>
      <Input type="select" onChange={props.kudosSender} value={props.Sender}>
        {props.users.map(element => <option>{element.name}</option>)}
      </Input>
    </FormGroup>
    <FormGroup>
      <Input type="text" onChange={props.updateKudosTitle} value={props.kudosTitle} />
    </FormGroup>
    <FormGroup>
      <Input type="textarea" onChange={props.updateKudosText} value={props.kudosText} />
    </FormGroup>
    <FormGroup>
      <Button onClick={props.postData}> Submit </Button>
    </FormGroup>
  </Form>

)

export default KudosForm;