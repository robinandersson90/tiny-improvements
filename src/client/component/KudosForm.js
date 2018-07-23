import React from "react";
import { Col, Row, Container, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";

const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label>Give Kudos to</Label>
            <Input type="select" name="select" id="exampleSelect" >
            </Input>
        </FormGroup>
        <Form>
            <FormGroup>
                <Input type="text" placeholder="Kudos Title" />
            </FormGroup>
        </Form>
        <Form>
            <FormGroup>
                <Input type="textarea" placeholder="Kudos text" />
            </FormGroup>
        </Form>
    </Form>

)


export default KudosForm;