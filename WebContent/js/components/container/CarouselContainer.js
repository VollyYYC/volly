import React, { Component } from "react";
import ReactDOM from "react-dom";
import ResultContainer from "../presentational/ResultPresentation";
import BagContainer from "./BagContainer";

// const API = 'GetOrganizations';
class CarouselContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      results:props.results
    }
  }
  render() {
    const content = this.state.results.map(
      (result,i)=>(
        <ResultContainer
        id={result.id}
        name={result.name}
        organization={result.organization}
        category={result.category}
        volunteerType={result.volunteerType}
        skillRequired={result.skillRequired}
        />
      )
    );
    return (
      <div id="main-wrapper">
		    <div id="heading-wrapper">
			     <div id="logo-wrapper">
				       <img id='logo-main' src='img/logo-main.png' />
			     </div>
			     <div id="bag-wrapper"><BagContainer /></div>
			     <div class="heading">These charities need your help:</div>
		    </div>
		    <div id="carousel-wrapper">
          <div id='scrollLeft'>&lt;</div>
          <div id='scrollRight'>&gt;</div>
            {content}
		   </div>
	    </div>
    );
  }
}
export default CarouselContainer;
