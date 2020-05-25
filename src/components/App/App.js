import React from "react";

import './App.css';
import SwapiService from "../../services/SwapiService";

import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
// import ErrorButton from "../ErrorButton/ErrorButton";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
// import PeoplePage from "../PeoplePage/PeoplePage";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Row from "../Row/Row";
import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import ItemList from "../ItemList/ItemList";
import {PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../SwComponents";
import {PersonDetails} from "../SwComponents/Details";
// import ItemDetails from "../ItemDetails/ItemDetails";

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

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        personId={11}
        getData={ getPerson }
        getImageUrl={ getPersonImage }
      >
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        personId={5}
        getData={ getStarship }
        getImageUrl={ getStarshipImage }
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
      <div>
        <Header />

            {/*<ItemList*/}
            {/*  onItemSelected={ this.onPersonSelected }*/}
            {/*  getData={ this.swapiService.getAllPlanets }*/}
            {/*>*/}
            {/*  { ({name}) => <span>{ name }</span> }*/}
            {/*</ItemList>*/}

            {/*<ItemList*/}
            {/*  onItemSelected={ this.onPersonSelected }*/}
            {/*  getData={ this.swapiService.getAllStarships }*/}
            {/*>*/}
            {/*  { ({name}) => <span>{ name }</span> }*/}
            {/*</ItemList>*/}

            {/* после обновления */}

            <PersonDetails itemId={5}/>
            <PlanetDetails itemId={3}/>
            <StarshipDetails itemId={2}/>

            <PersonList/>

            <StarshipList/>

            <PlanetList/>

      </div>
      </ErrorBoundry>
    );
  }
}
