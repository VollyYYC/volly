import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const API = 'http://vollyapp.azurewebsites.net/api/skills';
class SelectSkills extends Component{
  constructor(props){
    super(props)
    this.state={
      skills:[],
      showOptions:props.selectOption,
      selectedSkillIDs:[],
      submitForm:props.submitForm,
      setSkills:props.setSkills
    }
    this.showAll=this.showAll.bind(this)
    this.showSkillSelection=this.showSkillSelection.bind(this)
    this.skipFilter=this.skipFilter.bind(this)
    this.toggleSelect=this.toggleSelect.bind(this)
    this.setSkills=this.setSkills.bind(this)
  }
  componentDidMount(){
    fetch(API)
    .then(response=>response.json())
    .then(data=>this.setState({skills:data}));
  }
  skipFilter(){
    this.state.setSkills([]);
  }
  showSkillSelection(){
    this.setState({
      showOptions:false,
      selectedSkillIDs:[],
    });
  }
  setSkills(){
    this.state.setSkills(this.state.selectedSkillIDs);
  }
  showAll(){
    this.state.submitForm(null,null);
  }
  toggleSelect(e){
    if(e.target.checked){
      let arrayvar = this.state.selectedSkillIDs
      arrayvar.push(e.target.value)
      this.setState({ selectedSkillIDs: arrayvar })
    }else{
      let filteredArray = this.state.selectedSkillIDs.filter(item => item !== e.target.value);
      this.setState({selectedSkillIDs: filteredArray});
    }
  }
  render(){
    const content = this.state.showOptions?(
      <div>
      <button type='button' onClick={this.showAll}>Show me everything</button>
      <button type='button' onClick={this.showSkillSelection}>Select skills</button>
      <button type='button' onClick={this.skipFilter}>Skip filter</button>
      </div>
    ):(
      this.state.skills.map((item,i)=>(
      <span>
      <input
      onChange={this.toggleSelect.bind(this)}
      type='checkbox'
      id={item.id}
      value={item.id}
      name='skills'
      className='input-checkbox'/>
      <label
      for={item.id}>{item.name}
      </label>
      </span>
    ))
  )
  return (
      <div>
       {content}
       {this.state.showOptions?'':<button type='button' onClick={this.setSkills}>Next</button>}
      </div>
    );
  }
}
SelectSkills.propTypes = {
  setSkills: PropTypes.func.isRequired
};
export default SelectSkills;
