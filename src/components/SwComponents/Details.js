import React from "react";
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import SwapiService from "../../services/SwapiService";

const swapiService = new SwapiService();

const {
  getPlanet,
  getPerson,
  getStarship,
  getPersonImage,
  getStarshipImage,
  getPlanetImage
} = swapiService;

const PersonDetails = ({ itemId }) => {

  return (
    <ItemDetails
      personId={itemId}
      getData={ getPerson }
      getImageUrl={ getPersonImage }
    >
      <Record field="gender" label="Gender"/>
      <Record field="eyeColor" label="Eye Color"/>
    </ItemDetails>
  );
};

const PlanetDetails = ({ itemId }) => {

  return (
    <ItemDetails
      personId={itemId}
      getData={ getPlanet }
      getImageUrl={ getPlanetImage }
    >
      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation Period"/>
      <Record field="diameter" label="Diameter"/>
    </ItemDetails>
  );
};

const StarshipDetails = ({ itemId }) => {

  return (
    <ItemDetails
      personId={itemId}
      getData={ getStarship }
      getImageUrl={ getStarshipImage }
    >
      <Record field="model" label="Model"/>
      <Record field="costInCredits" label="Cost In Credits"/>
      <Record field="length" label="Length"/>
    </ItemDetails>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
