import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';

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
