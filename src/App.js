import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';
import Tab2 from './components/tabs/common/Tab2.js';
import Butter from './components/tabs/common/Butter.js';
import Test from './components/tabs/common/Test.js';

class App extends React.Component{
  state = {
    name: "John"
  }
  //console.log(JSON.parse(e.target.result));
  render(){
    return (
    <>
      <Container />
    </>
    );
  }
}
  
export default App;
