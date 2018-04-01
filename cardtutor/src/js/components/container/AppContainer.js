import React, { Component } from "react";
import ReactDOM from "react-dom";
import HeaderContainer from "./HeaderContainer";

class AppContainer extends Component {
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
      <div>
          <HeaderContainer />
      </div>
    );
  }
}

export default AppContainer;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;