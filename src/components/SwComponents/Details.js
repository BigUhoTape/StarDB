import React from "react";
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';

import {SwapiServiceConsumer} from './../SwapiServiceContext';

const PersonDetails = ({itemId}) => {

  return (
    <SwapiServiceConsumer>
      {
        ({getPerson, getPersonImage}) => {
          return (
            <ItemDetails
              personId={itemId}
              getData={getPerson}
              getImageUrl={getPersonImage}
            >
              <Record field="gender" label="Gender"/>
              <Record field="eyeColor" label="Eye Color"/>
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

const PlanetDetails = ({itemId}) => {

  return (
    <SwapiServiceConsumer>
      {
        ({getPlanet, getPlanetImage}) => {
          return (
            <ItemDetails
              personId={itemId}
              getData={getPlanet}
              getImageUrl={getPlanetImage}
            >
              <Record field="population" label="Population"/>
              <Record field="rotationPeriod" label="Rotation Period"/>
              <Record field="diameter" label="Diameter"/>
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = ({itemId}) => {

  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship, getStarshipImage }) => {
          return (
            <ItemDetails
              personId={itemId}
              getData={getStarship}
              getImageUrl={getStarshipImage}
            >
              <Record field="model" label="Model"/>
              <Record field="costInCredits" label="Cost In Credits"/>
              <Record field="length" label="Length"/>
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
