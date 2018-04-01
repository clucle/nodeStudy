import React, { Component } from "react";
import ReactDOM from "react-dom";

class Card extends Component {
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
      <div>{this.props.name} T{this.props.age}</div>
    );
  }
}

export default Card;
