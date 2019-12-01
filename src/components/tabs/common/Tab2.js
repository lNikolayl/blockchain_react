import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Row, Col, Form} from 'react-bootstrap';

class Tab2 extends React.Component{
  state = {
    name: "John"
  }
  
  render(){
    return (
        <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Block Name
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="0">
            Ps
            </Form.Label>
            <Col sm="2">
            <Form.Control type="text" placeholder="name" controlId="1lineName"/>
            </Col>
            <Form.Label column sm="0">
            Ps
            </Form.Label>
            <Col sm="2">
            <Form.Control type="text" placeholder="value" controlId="1lineValue"/>
            </Col>
            
            <Form.Label column sm="0"></Form.Label>
        </Form.Group>
        
      
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
    );
  }
}
  
export default Tab2;
