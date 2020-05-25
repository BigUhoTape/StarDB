import React, { Component } from "react";
import { StarshipDetails, StarshipList } from "../SwComponents";
import Row from "../Row/Row";

export default class StarshipPage extends Component{
  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    console.log(selectedItem);
    this.setState({ selectedItem })
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<StarshipList onItemSelected={ this.onItemSelected }/>}
        right={<StarshipDetails itemId={selectedItem}/>}
      />
    );
  }
};
