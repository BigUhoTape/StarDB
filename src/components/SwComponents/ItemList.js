import React from "react";
import ItemList from "../ItemList/ItemList";
import { withData , WithSwapiService} from '../HocHelpers';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        { fn }
      </Wrapped>
    );
  }
};

const renderName = ({ name }) => <span>{ name }</span>;
const renderModelAndName = ({ model, name }) => <span>{ name } ({ model })</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};

const PersonList = WithSwapiService(withData(
                      withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);

const PlanetList = WithSwapiService(withData(
                      withChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);

const StarshipList = WithSwapiService(withData(
                      withChildFunction(ItemList, renderModelAndName)), mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
}
