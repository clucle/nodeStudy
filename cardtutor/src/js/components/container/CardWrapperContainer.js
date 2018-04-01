import React, { Component } from "react";
import ReactDOM from "react-dom";

import Card from './Card'

class CardWrapperContainer extends Component {
  constructor() {
    super();
    this.state = {
      cardData: [
        {
          name: '1',
          age: '1'
        },
        {
          name: '2',
          age: '2'
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const mapToComponents = (datas)=> {
      return datas.map((data, i) => {
        return (<Card 
          name={data.name}
          age={data.age} />
        );
      });
    }
    return (
      <div>{mapToComponents(this.state.cardData)}</div>
    );
  }
}

export default CardWrapperContainer;
