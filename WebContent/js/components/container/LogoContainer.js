import React, { Component } from "react";
import ReactDOM from "react-dom";
class LogoContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="logo-full">
       <div className="text-intro">
        Connecting you to nearby non-profits
       </div>
      </div>
    );
  }
}
export default LogoContainer;
const wrapper = document.getElementById("logo-wrapper");
wrapper ? ReactDOM.render(<LogoContainer />, wrapper) : false;
