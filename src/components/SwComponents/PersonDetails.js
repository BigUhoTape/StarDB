import React from "react";
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import { WithSwapiService } from './../HocHelpers';

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;

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
};

export default WithSwapiService(PersonDetails);
