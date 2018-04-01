import React, { Component } from "react";
import ReactDOM from "react-dom";

class HeaderContainer extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div id="header">d</div>
    );
  }
}

export default HeaderContainer;
