import React from "react";
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import { WithSwapiService } from './../HocHelpers';

const StarshipDetails = ({ itemId, getData, getImageUrl}) => {
  return (
    <ItemDetails
      personId={itemId}
      getData={getData}
      getImageUrl={getImageUrl}
    >
      <Record field="model" label="Model"/>
      <Record field="costInCredits" label="Cost In Credits"/>
      <Record field="length" label="Length"/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default WithSwapiService(mapMethodsToProps)(StarshipDetails);
