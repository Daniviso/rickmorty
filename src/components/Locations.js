import React from 'react';

const Locations = ({ locations }) => {
  return (
    <div className="characters">
    <h1>Localizaciones</h1>
    <div className="black-home">
    <div className="container-characters">
      {locations.map((location) => (
         <div className="container-characters">
        <div  key={location.id} className="location">
          <h3>{location.name}</h3>
     <p>Tipo: {location.type}</p>
     <p>Dimensión: {location.dimension}</p>
     <p>Descripción: {location.residents.length} habitantes</p>
        </div>
        </div>  
         
      ))}
    </div>
    </div> 
    </div>
  );
};

export default Locations;

