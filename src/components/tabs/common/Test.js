import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';
import {Form} from 'react-bootstrap';

class Test extends Component {
    constructor(props) {
        super(props)
        this.addChild = this.addChild.bind(this)
        this.state = {
            components: [
                {
                    id:1, name: 'Some Name'
                }
            ]
        }
    }

    addChild() {
        // Изменение стейта спровоцирует перерисовку
        this.setState(this.state.concat([
            {id:2,name:"Another Name"}
        ]))
    }
    render() {
        return (
            <div>
                <h1>App main component! </h1>
                <button onClick={this.addChild}>Add component</button>
                { // здесь будет отрисовано необходимое кол-во компонентов
                    this.state.components.map((item) => (
                        <Form.Control key={item.id} name={item.name}/>
                    ))
                }
            </div>
        );
    }
}


export default Test;