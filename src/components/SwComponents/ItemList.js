import React from "react";
import ItemList from "../ItemList/ItemList";
import { withData , WithSwapiService} from '../HocHelpers';

const withChildFunction = (fn) => (Wrapped) => {
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

const PersonList = WithSwapiService(mapPersonMethodsToProps)(
                    withData(withChildFunction(renderName)(ItemList)));

const PlanetList = WithSwapiService(mapPlanetMethodsToProps)(
                      withData(withChildFunction(renderName)(ItemList)));

const StarshipList = WithSwapiService(mapStarshipMethodsToProps)(
                        withData(withChildFunction(renderModelAndName)(ItemList)));

export {
  PersonList,
  PlanetList,
  StarshipList
}
