import React, { Component } from "react";
import ReactDOM from "react-dom";
import CarouselContainer from "./CarouselContainer";
import SelectSkills from "./SelectSkills";
import SelectCategories from "./SelectCategories";

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
    results:[],
    selectIndex:0,
    skills:[],
    categories:[]
  }
  this.submitForm=this.submitForm.bind(this)
  this.setSkills=this.setSkills.bind(this)
  this.setCategories=this.setCategories.bind(this)
}
setCategories(c){
  console.log(c)
  this.setState({
    categories:c,
    selectIndex:this.state.selectIndex+1
  })
}
setSkills(s){
  console.log(s)
  this.setState({
    skills:s,
    selectIndex:this.state.selectIndex+1
  })
}
submitForm(skills,categories){
  if(skills===null&&categories===null){
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
  if(this.state.renderResults){
    return(
      <CarouselContainer
      results={this.state.results}
      />
    )
  }
  switch(this.state.selectIndex){
    case 0:
    return(
      <SelectSkills
      selectOption={true}
      submitForm={this.submitForm}
      setSkills={this.setSkills}
      />
    )
    case 1:
    return(
      <SelectCategories
      selectOption={true}
      submitForm={this.submitForm}
      setCategories={this.setCategories}
      />
    )
    case 2:
    return(
      <div>LAST PAGE!!</div>
    )
    }
  }
}
export default FormContainer;
