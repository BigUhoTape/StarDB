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
import PersonDetails, { Record } from "../PersonDetails/PersonDetails";
// import ItemList from "../ItemList/ItemList";
// import PersonDetails from "../PersonDetails/PersonDetails";

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
      <PersonDetails
        personId={11}
        getData={ getPerson }
        getImageUrl={ getPersonImage }
      >
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
      </PersonDetails>
    );

    const starshipDetails = (
      <PersonDetails
        personId={5}
        getData={ getStarship }
        getImageUrl={ getStarshipImage }
      >
      </PersonDetails>
    );

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <ErrorBoundry>
      <div>
        <Header />
        <Row
          left={personDetails}
          right={starshipDetails}
        />

        {/*<button onClick={ this.onRandomPlanetChange }>Toggle Random Planet</button>*/}
        {/*<ErrorButton/>*/}
        {/*{ randomPlanet }*/}

        {/*<PeoplePage/>*/}

        {/*<div className="row mb2">*/}
        {/*  <div className="col-md-6">*/}
        {/*    <ItemList*/}
        {/*      onItemSelected={ this.onPersonSelected }*/}
        {/*      getData={ this.swapiService.getAllPlanets }*/}
        {/*      renderItem={(item) => item.name }*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="col-md-6">*/}
        {/*    <PersonDetails personId={ this.state.selectedPerson }/>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className="row mb2">*/}
        {/*  <div className="col-md-6">*/}
        {/*    <ItemList*/}
        {/*      onItemSelected={ this.onPersonSelected }*/}
        {/*      getData={ this.swapiService.getAllStarships }*/}
        {/*      renderItem={(item) => item.name }*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="col-md-6">*/}
        {/*    <PersonDetails personId={ this.state.selectedPerson }/>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      </ErrorBoundry>
    );
  }
}
