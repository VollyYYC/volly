import React, { Component } from "react";
import ReactDOM from "react-dom";

const API = 'http://vollyapp.azurewebsites.net/api/skills';
let header = new Headers({
    'Content-Type': 'application/json'
});
let sentData={
    method:'GET',
    timeout:20000,
    header: header
};

class SelectSkills extends Component{
  constructor(props){
    super(props)
    this.state={
      skills:[],
      selectOption:props.selectOption,
      skillIDs:null,
      submitForm:props.submitForm
    }
    this.showAll=this.showAll.bind(this)
  }
  componentDidMount(){
    fetch(API, sentData)
    .then(response=>response.json())
    .then(data=>this.setState({skills:data}));
  }
  showAll(){
    this.state.submitForm(null,null);
  }
  render(){
    const content = this.state.selectOption?(
      <div>
      <button type='button' onClick={this.showAll}>Show me everything</button>
      <button type='button'>Select skills</button>
      <button type='button'>Skip filter</button>
      </div>
    ):(
      this.state.skills.map((item,i)=>(
      <span>
      <input
      type='checkbox'
      id={'skill_'+item.id}
      value={'skill_'+item.id}
      name='skills'
      className='input-checkbox'/>
      <label
      for={'skill_'+item.id}>{item.name}
      </label>
      </span>
    ))
  )
  return (
    <div>
     {content}
    </div>
  );
  }
}
export default SelectSkills;
