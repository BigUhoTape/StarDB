import React from "react";

import './PeoplePage.css';
import SwapiService from "../../services/SwapiService";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class PeoplePage extends React.Component{
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
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
          <ItemList
            onItemSelected={ this.onPersonSelected }
            getData={ this.swapiService.getAllPeople }
            renderItem={(item) => `${item.name}/${item.gender},${item.birthYear}` }
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={ selectedPerson }/>
        </div>
      </div>
    );
  }

}
