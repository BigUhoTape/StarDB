import React from "react";

import './App.css';

import Header from "../Header/Header";
import ItemList from "../ItemList/ItemList";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import PersonDetails from "../PersonDetails/PersonDetails";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

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
