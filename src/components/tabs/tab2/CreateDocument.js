import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DocumentViewer from '../common/DocumentPresentation/DocumentViewer'
import {Tabs, Tab} from 'react-bootstrap';

//import Form from './components/tabs/common/Form';

class CreateDocument extends React.Component{
  state = {
	} 
	
  render(){
    return (
			<>
				<DocumentViewer />
			</>      
    );
  }
}
  
export default CreateDocument;
