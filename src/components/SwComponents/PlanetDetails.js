import React from "react";
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';

import {SwapiServiceConsumer} from './../SwapiServiceContext';

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

export default PlanetDetails;
