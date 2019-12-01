import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab} from 'react-bootstrap';
import LoadDocument from './tabs/tab1/LoadDocument'
import CreateDocument from './tabs/tab2/CreateDocument'

//import Form from './components/tabs/common/Form';

class Container extends React.Component{
  state = {
    currentTab: "load"
  }
  //this.props.defaultActiveKey - ...
  // REACT
  //this.setState({name: "Jorakh"})
  //componentDidMount() {console.log(this.props.nameProp)}    // - вызывается когда компонент замаунчем. после рендера
  //componentDidUpdate - ? вызывается когда компонент изменяется (когда вызывается рендер)?????
  //componentWillUnmount
/* JS JS SJ JS JS JS S J
  ppp = (a, Jooo) => {
    дела функции
  }
  */ 
 onSelect=(tabName)=>{
  //console.log(tabName);
  this.setState({currentTab: tabName})
 }
 /*
  componentDidMount() {         
    bsCustomFileInput.init();    //для инициализации input файла
  }
*/
  render(){
    return (

      <Tabs defaultActiveKey="load" id="uncontrolled-tab-example">
        <Tab eventKey="load" title="Load document">
          <LoadDocument />
        </Tab>
        <Tab eventKey="create" title="Create document">
          <CreateDocument />
        </Tab>
      </Tabs>
      
    );
  }
}
  
export default Container;
