import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab} from 'react-bootstrap';
import DocumentViewer from '../common/DocumentPresentation/DocumentViewer'

//import Form from './components/tabs/common/Form';

class LoadDocument extends React.Component{
  state = {
	} 
	
 	onChange=(e)=>{
		let files=e.target.files;
		//console.log("data file",files);
		let reader= new FileReader();
		reader.readAsText(files[0]);
		
		reader.onload=(e)=>{
			this.setState({
				currentFile:files[0],
				jsonDocument: JSON.parse(e.target.result)
			})
			console.log(JSON.parse(e.target.result))
		}
 	}
 /*
  componentDidMount() {         
    bsCustomFileInput.init();    //для инициализации input файла
  }
*/
  render(){
    return (
			<>
				<div className="input-group">
					<div className="input-group-prepend">
							<span className="input-group-text" id="inputGroupFileAddon01">
							Upload
							</span>
					</div>
					<div className="custom-file">
							<input
							type="file"
							className="custom-file-input"
							id="inputGroupFile01"
							onChange={(e)=>this.onChange(e)}
							aria-describedby="inputGroupFileAddon01"
							/>
							<label className="custom-file-label" htmlFor="inputGroupFile01">
							{this.state.currentFile ? this.state.currentFile.name : "Choose file"}  
							</label>
					</div>
				</div> 
				{this.state.currentFile && (this.state.jsonDocument) && (
					<DocumentViewer data={this.state.jsonDocument} isLoaded={true}/> 
				)} 
			</>   
    );
  }
}
  
export default LoadDocument;
