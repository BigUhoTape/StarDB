import React from "react";

import './App.css';

import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ErrorButton from "../ErrorButton/ErrorButton";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import PeoplePage from "../PeoplePage/PeoplePage";

export default class App extends React.Component {
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
      </div>
    );
  }
}
