import React from "react";

import './PeoplePage.css';
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class PeoplePage extends React.Component{
  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (id) => {
    console.log(id);
    this.setState({
      selectedPerson: id
    })
  };

  render() {
    const { selectedPerson, hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator/>
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={ this.onPersonSelected }/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId={ selectedPerson }/>
        </div>
      </div>
    );
  }

}
