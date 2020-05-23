import React from "react";
import SwapiService from "../../services/SwapiService";

import './RandomPlanet.css';

import Spiner from "../Spiner/Spiner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class RandomPlanet extends React.Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(() => {
      this.updatePlanet();
    }, 5000);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (err) => {
    this.setState({ error: true, loading: false })
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random()*20) + 2;
    this.swapiService.getPlanet(id)
      .then(planet => this.onPlanetLoaded(planet))
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const spinner = loading ? <Spiner/> : null;
    const content = !loading && !error ? <PlanetView planet={ planet }/> : null;
    const errorIndicator = error ? <ErrorIndicator/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { errorIndicator }
        { spinner }
        { content }
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const {id ,name, population, rotationPeriod, diameter} = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="random planet"/>
      <div>
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{ population }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{ rotationPeriod }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{ diameter }</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
};
