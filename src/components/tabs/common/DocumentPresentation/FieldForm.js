import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Form, Col, Row} from 'react-bootstrap';

//import Form from './components/tabs/common/Form';

class FieldForm extends React.Component{
  state = {
	} 

	componentDidMount() {
		console.log()
	}
	
  render(){
    return (
			<Form.Group as={Row} controlId="formPlaintextPassword">
				<Form.Label column sm="0">
					Field name:
				</Form.Label>
				<Col sm="2">
					<Form.Control onChange={(name)=>{this.props.changeFieldName(this.props.blockIndex, this.props.fieldIndex, name)}}disabled={this.props.disabled} value={this.props.data.fieldName} type="text" as="input" placeholder="Type field name..."/>
				</Col>
				<Form.Label column sm="0">
					Field value:
				</Form.Label>
				<Col sm="2">
					<Form.Control onChange={(value)=>{this.props.changeFieldValue(this.props.blockIndex, this.props.fieldIndex, value)}} disabled={this.props.disabled} value={this.props.data.fieldValue} type="text" as="input" placeholder="Type filed value..."/>
				</Col>
				<Col sm="2">
					<Button variant="primary" onClick={()=>{this.props.removeField(this.props.fieldIndex,this.props.blockIndex)}}>Remove</Button>
				</Col>
			</Form.Group>
    );
  }
}
  
export default FieldForm;
