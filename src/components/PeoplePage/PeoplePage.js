import React from "react";
import './PeoplePage.css';
import SwapiService from "../../services/SwapiService";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import Row from "../Row/Row";

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

    const itemList = (
      <ItemList
        onItemSelected={ this.onPersonSelected }
        getData={ this.swapiService.getAllPeople }
        renderItem={(item) => `${item.name}/${item.gender},${item.birthYear}` }
      />
    );

    const personDetails = (
      <PersonDetails personId={ selectedPerson }/>
    );

    return (
      <Row left={itemList} right={personDetails}/>
    );
  }

}
