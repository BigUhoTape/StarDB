import React from "react";
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';

import {SwapiServiceConsumer} from './../SwapiServiceContext';

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

export default StarshipDetails;
