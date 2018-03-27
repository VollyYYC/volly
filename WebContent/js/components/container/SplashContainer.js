import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
class SplashContainer extends Component{
  constructor(props){
    super(props);
    let beginTimer = setInterval(
      function(){
        document.getElementById('app-container').className+='show';
        clearInterval(beginTimer);
      }, 1000);
      let nextPageTimer = setInterval(
        function(){
          clearInterval(nextPageTimer);
          props.nextPage();
        },5000);
  }
  render(){
    return (
      <div id='div-splash'><img id='splash-logo-main' src='img/logo-main.png'/><div class=''>Connecting you to nearby non-profits</div></div>
    );
  }
}
SplashContainer.propTypes = {
  nextPage: PropTypes.func.isRequired
};
export default SplashContainer;
