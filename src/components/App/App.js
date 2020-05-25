import React from "react";

import './App.css';
import SwapiService from "../../services/SwapiService";

import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import {SwapiServiceProvider} from '../SwapiServiceContext';
import DummySwapiService from "../../services/DummySwapiService";
import { PeoplePage, StarshipPage, PlanetPage } from './../Pages';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      console.log(Service.name);

      return {
        swapiService: new Service()
      }
    })
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div>
              <Header onServiceChange={ this.onServiceChange }/>

              <RandomPlanet/>

              <Route path="/people" component={ PeoplePage }/>
              <Route path="/planets" component={ PlanetPage }/>
              <Route path="/starships" component={ StarshipPage }/>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
