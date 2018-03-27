import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
class ResultPresentation extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:props.id,
      name:props.name,
      organizationName:props.organization.name,
    }
    this.props=props;
  }
  render() {
    return (
      <div className="result-wrapper">
      {this.state.id}<br />
      {this.state.name}<br />
      {this.state.organizationName}<br />
      No - Maybe - Yes
      </div>
    );
  }
}
ResultPresentation.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  organizationName: PropTypes.string.isRequired
  // contactEmail: PropTypes.string.isRequired,
  // volunteersNeeded: PropTypes.bool.isRequired,
  // description: PropTypes.string.isRequired,
  // policeCheckRequired: PropTypes.bool.isRequired,
  // logoUrl: PropTypes.string.isRequired,
  // shortDescription: PropTypes.string.isRequired
};
export default ResultPresentation;
