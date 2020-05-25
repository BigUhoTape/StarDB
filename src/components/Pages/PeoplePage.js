import React, { Component } from "react";
import {PersonDetails, PersonList} from "../SwComponents";
import Row from "../Row/Row";

export default class PeoplePage extends Component{
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
        left={<PersonList onItemSelected={ this.onItemSelected }/>}
        right={<PersonDetails itemId={selectedItem}/>}
      />
    );
  }
};
