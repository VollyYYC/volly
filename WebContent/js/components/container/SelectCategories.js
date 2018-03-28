import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
const API='http://vollyapp.azurewebsites.net/api/categories';
class SelectCategories extends Component{
  constructor(props){
    super(props)
    this.state={
      categories:[],
      showOptions:props.selectOption,
      selectedCategoryIDs:[],
      submitForm:props.submitForm,
      setCategories:props.setCategories
    }
    this.showAll=this.showAll.bind(this)
    this.showCategorySelection=this.showCategorySelection.bind(this)
    this.skipFilter=this.skipFilter.bind(this)
    this.toggleSelect=this.toggleSelect.bind(this)
    this.setCategories=this.setCategories.bind(this)
  }
  componentDidMount(){
    fetch(API)
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}));
  }
  skipFilter(){
    this.state.setCategories([]);
  }
  showCategorySelection(){
    this.setState({
      showOptions:false,
      selectedCategoryIDs:[],
    });
  }
  setCategories(){
    this.state.setCategories(this.state.selectedCategoryIDs);
  }
  showAll(){
    this.state.submitForm(null,null);
  }
  toggleSelect(e){
    if(e.target.checked){
      let arrayvar = this.state.selectedCategoryIDs
      arrayvar.push(e.target.value)
      this.setState({ selectedCategoryIDs: arrayvar })
    }else{
      let filteredArray = this.state.selectedCategoryIDs.filter(item => item !== e.target.value);
      this.setState({selectedCategoryIDs: filteredArray});
    }
  }
  render(){
    const content = this.state.showOptions?(
      <div>
      <button type='button' onClick={this.showAll}>Show me everything</button>
      <button type='button' onClick={this.showCategorySelection}>Select categories</button>
      <button type='button' onClick={this.skipFilter}>Skip filter</button>
      </div>
    ):(
      this.state.categories.map((item,i)=>(
        <span>
        <input
        onChange={this.toggleSelect.bind(this)}
        type='checkbox'
        id={item.id}
        value={item.id}
        name='categories'
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
       {this.state.showOptions?'':<button type='button' onClick={this.setCategories}>Next</button>}
      </div>
    );
  }
}
SelectCategories.propTypes = {
  setCategories: PropTypes.func.isRequired
};
export default SelectCategories;
