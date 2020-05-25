import React from "react";
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import { WithSwapiService } from './../HocHelpers';

const PlanetDetails = ({ itemId, getData, getImageUrl}) => {
  return (
    <ItemDetails
      personId={itemId}
      getData={getData}
      getImageUrl={getImageUrl}
    >
      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation Period"/>
      <Record field="diameter" label="Diameter"/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
};

export default WithSwapiService(mapMethodsToProps)(PlanetDetails);
