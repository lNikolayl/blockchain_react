import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card, Button, Form} from 'react-bootstrap';
import FieldForm from './FieldForm';
import {contract_address, contract_abi} from '../../../../config.js'
import Web3 from 'web3'
import Eth from 'web3-eth'
//import Form from './components/tabs/common/Form';

class DocumentViwer extends React.Component{
  state = {
		account: '',
	//	tasks: "",
		data: [
			{
				"blockName": "Header",
				"blockFields": []
			},
			{
				"blockName": "Body",
				"blockFields": []
			},
			{
				"blockName": "Footer",
				"blockFields": []
			}
		]
	} 
	componentWillMount () {
		this.loadData()
	}

	componentDidMount () {
		if(this.props.data) {
			this.setState({data: this.props.data})
		}
	}

	addField = (index) => {
		let data = this.state.data;
		let newField = {fieldName: "", fieldValue: ""}
		data[index].blockFields.push(newField);
		this.setState({
			data: data
		});
	}

	removeField = (fieldIndex,blockIndex) => {
		let data = this.state.data;
		data[blockIndex].blockFields.splice(fieldIndex,1)
		this.setState({
			data: data
		});
	}
	changeFieldName = (blockIndex,fieldIndex,name) =>{
		let data = this.state.data;
		data[blockIndex].blockFields[fieldIndex].fieldName=name.target.value;
		this.setState({
			data: data
		})
	}

	changeFieldValue = (blockIndex,fieldIndex,value) =>{
		let data = this.state.data;
		data[blockIndex].blockFields[fieldIndex].fieldValue=value.target.value;
		this.setState({
			data: data
		})
	}
	async loadData(){
		const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
		const accounts = await web3.eth.getAccounts()
		this.setState({account: accounts[0]})
		const documents =  new web3.eth.Contract (contract_abi, contract_address)
		this.setState({documents})
	
		//this.setState({tasks: task})
		console.log(documents);
	}
	saving =()=>{
		let firstArray =[];
		this.state.data.forEach((item)=>{
			let secondArray = [];
			item.blockFields.forEach((el)=>{
				secondArray.push([el.fieldName,el.fieldValue])
			});
			firstArray.push(secondArray);
		});
		//loadData();
		const task = this.state.documents.methods.createDoc(firstArray).send({from: this.state.account, gas:1000000}).then((res)=>{
			this.state.documents.methods.get(0).call().then((doc)=>{
				console.log(doc)
			})
		})
		console.log(task);
		console.log(firstArray);
	}

  render(){
    return (
			<>
				<Accordion>
					{this.state.data.map((item,blockIndex)=>{
						return (
							<Card>
								<Card.Header>
									<Accordion.Toggle as={Button} variant="link" eventKey={blockIndex}>
										{item.blockName}
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey={blockIndex}>
									<Card.Body>	
										{!this.props.isLoaded && (
											<Button variant="primary" onClick={()=>{this.addField(blockIndex)}}>Add</Button>
										)}									
										{item.blockFields.map((field, fieldIndex)=>{
											return (
												<FieldForm changeFieldValue={this.changeFieldValue} changeFieldName={this.changeFieldName} removeField={this.removeField} fieldIndex={fieldIndex} blockIndex={blockIndex} data={field} disabled={this.props.isLoaded ? true : false}/>												
											)
										})}
									</Card.Body>
								</Accordion.Collapse>
							</Card>	
						)
					})}					
				</Accordion> 
				<Button onClick={()=>{this.saving()}} variant="primary">Save</Button>				
			</>     
    );
  }
}
  
export default DocumentViwer;
