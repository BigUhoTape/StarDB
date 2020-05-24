import React from "react";

import './App.css';
import SwapiService from "../../services/SwapiService";

import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ErrorButton from "../ErrorButton/ErrorButton";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import PeoplePage from "../PeoplePage/PeoplePage";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";

export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    isRandomPlanet: true,
    hasError: false
  };

  componentDidCatch() {
    console.log('error');
    this.setState({ hasError: true });
  }

  onRandomPlanetChange = () => {
    this.setState(({ isRandomPlanet }) => {
      const newBoll = !isRandomPlanet;
      return {
        isRandomPlanet: newBoll
      }
    })
  };


  render() {
    const { isRandomPlanet } = this.state;
    const randomPlanet = isRandomPlanet ? <RandomPlanet/> : null;

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <div>
        <Header />
        <button onClick={ this.onRandomPlanetChange }>Toggle Random Planet</button>
        <ErrorButton/>
        { randomPlanet }

        <PeoplePage/>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={ this.onPersonSelected }
              getData={ this.swapiService.getAllPlanets }
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={ this.state.selectedPerson }/>
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={ this.onPersonSelected }
              getData={ this.swapiService.getAllStarships }
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={ this.state.selectedPerson }/>
          </div>
        </div>
      </div>
    );
  }
}
