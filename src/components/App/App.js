import React from "react";

import './App.css';
import SwapiService from "../../services/SwapiService";

import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import {PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../SwComponents";
import {PersonDetails} from "../SwComponents";
import {SwapiServiceProvider} from '../SwapiServiceContext';
import DummySwapiService from "../../services/DummySwapiService";

export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    isRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService()
  };

  componentDidCatch() {
    console.log('error');
    this.setState({hasError: true});
  }

  onRandomPlanetChange = () => {
    this.setState(({isRandomPlanet}) => {
      const newBoll = !isRandomPlanet;
      return {
        isRandomPlanet: newBoll
      }
    })
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
    const {isRandomPlanet} = this.state;
    const randomPlanet = isRandomPlanet ? <RandomPlanet/> : null;

    const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.state.swapiService;

    const personDetails = (
      <ItemDetails
        personId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        personId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model"/>
        <Record field="costInCredits" label="Cost In Credits"/>
        <Record field="length" label="Length"/>
      </ItemDetails>
    );

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div>
            <Header onServiceChange={ this.onServiceChange }/>

            <PersonDetails itemId={5}/>
            <PlanetDetails itemId={3}/>
            <StarshipDetails itemId={5}/>

            <PersonList/>

            <StarshipList/>

            <PlanetList/>

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
