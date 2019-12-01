import React from 'react';
//import ReactDOM from 'react-dom';
//import Month from './Month';
//import Content from './Content';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Button} from 'react-bootstrap';
import {Accordion, Card, Button, Row, Col, Form} from 'react-bootstrap';

import Tab2 from "./Tab2";



class Butter extends React.PureComponent {
    state = {
        name: "John",
        tasks: []
      }
      
    add=(text)=>{
        var arr = this.state.tasks;
        arr.push (text);
        this.setState({tasks: arr});
       // <Form.Control type="text" placeholder="value" controlId="1lineValue"/>
       console.log("1")
    }
    componentDidUpdate() {console.log("1")}
    render(){

        return (
            <>
            <button onClick={this.add.bind (null, 'DefaultText')} className="btn new">Add</button>
            </>
        )
    };
}
  
export default Butter;
