import React from "react";

import './App.css';

import Header from "../Header/Header";
import ItemList from "../ItemList/ItemList";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import PersonDetails from "../PersonDetails/PersonDetails";

export default class App extends React.Component {
  state = {
    isRandomPlanet: true
  };

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

    return (
      <div>
        <Header />
        <button onClick={ this.onRandomPlanetChange }>Toggle Random Planet</button>
        { randomPlanet }
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}
