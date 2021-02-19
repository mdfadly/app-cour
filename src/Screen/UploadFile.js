import React, { Component } from "react";
import {connect} from 'react-redux'
class UploadFile extends Component {
  constructor() {
    super();
    this.state = {
        selectedFiles:undefined,
        file:"",
    };
  }
  handleselectedFile = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };
  openFile(event) {
    this.setState({
        selectedFiles: event.target.files,
    });
    let input = event.target;

    let reader = new FileReader();
    reader.onload = function () {
      let text = reader.result;
      console.log(reader.result.substring(0));
    };
    reader.readAsText(input.files[0]);
  }
  handleUpload = (id) => {
    console.log(this.state.file);
    let currentFile = this.state.selectedFiles[0];
    console.log(currentFile.split('\t\t').map(entry => {
        const obj = {}
        entry.split('\n').forEach(keyValue => {
          const split = keyValue.split(": ")
          const key = split[0]
          const value = split[1]
          obj[key] = key === "Stars" ? value.split(", ") : value
        })
        return obj
      }))
  }
  render() {
    return (
      <div className="import-film container">
        <div className="import-form">
          <h3>Choose file to import</h3>
          <input
            type="file"
            name=""
            id=""
            onChange={(event) => this.openFile(event)}
          />
          <button onClick={this.handleUpload}>Upload</button>
        </div>

        <div>
          <h5>Total Order</h5>
          <p>
            {this.props.order}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
      order : state.totalOrder
  }
}
export default connect(mapStateToProps)(UploadFile)