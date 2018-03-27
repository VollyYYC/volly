import React, { Component } from "react";
import ReactDOM from "react-dom";
import CarouselContainer from "./CarouselContainer";
import SelectSkills from "./SelectSkills";

const API = 'http://vollyapp.azurewebsites.net/api/search';
const API_ALL = 'http://vollyapp.azurewebsites.net/api/opportunities';

// let header = new Headers({
//     'Content-Type': 'application/json'
// });
// let sentData={
//     method:'GET',
//     timeout:20000,
//     header: header
// };
class FormContainer extends Component {
constructor(props){
  super(props);
  this.state={
    renderResults:false,
    results:[]
  }
  this.submitForm=this.submitForm.bind(this);
}
submitForm(skills,categories){
  if(skills===null&&categories===null){
    console.log('IS NULL')
    fetch(API_ALL)//, sentData)
    .then(response=>response.json())
    .then(json=>this.setState({
      renderResults:true,
      results:json
    }));
  }else{
    console.log('not null')
    // fetch(API, sentData)
    // .then(response=>response.json())
    // .then(data=>this.setState({
    //   renderResults:true,
    //   results:data
    // }));
  }
}
render() {
  return this.state.renderResults?(
    <CarouselContainer
    results={this.state.results}
    />
  ):(
    <SelectSkills
    selectOption={true}
    submitForm={this.submitForm}
    />
  );
}
}
export default FormContainer;
