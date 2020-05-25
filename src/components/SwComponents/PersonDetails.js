import React from "react";
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import { WithSwapiService } from './../HocHelpers';

const PersonDetails = ({ itemId, getData, getImageUrl }) => {
  return (
    <ItemDetails
      personId={itemId}
      getData={getData}
      getImageUrl={getImageUrl}
    >
      <Record field="gender" label="Gender"/>
      <Record field="eyeColor" label="Eye Color"/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

export default WithSwapiService(mapMethodsToProps)(PersonDetails);
