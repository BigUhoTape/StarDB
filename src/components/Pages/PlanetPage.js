import React, { Component } from "react";
import { PlanetDetails, PlanetList } from "../SwComponents";
import Row from "../Row/Row";

export default class PlanetPage extends Component{
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
        left={<PlanetList onItemSelected={ this.onItemSelected }/>}
        right={<PlanetDetails itemId={selectedItem}/>}
      />
    );
  }
};
