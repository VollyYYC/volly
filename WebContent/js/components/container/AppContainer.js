import React, { Component } from "react";
import ReactDOM from "react-dom";
import SplashContainer from "./SplashContainer";
import FormContainer from "./FormContainer";

class AppContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      appIndex:0
    }
    this.nextPage=this.nextPage.bind(this);
  }
  nextPage(){
    this.setState({
      appIndex:this.state.appIndex+1
    })
  }
  render(){
    switch(this.state.appIndex){
      case 0:
      return(
        <SplashContainer nextPage={this.nextPage} />
      );
      case 1:
      return(
        <FormContainer />
      );
    }
  }
}
export default AppContainer;
const wrapper = document.getElementById("app-container");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
