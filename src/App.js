import { useState } from "react";
import './App.css';
import imageRickMorty from './img/rick-morty.png';
import Characters from './components/Characters';
import Locations from './components/Locations';

function App() {
  const [characters, setCharacters] = useState(null); //personajes
  const [locations, setLocations] = useState(null); //  localizaciones
  const [showCharacters, setShowCharacters] = useState(true); // para alternar entre personajes y localizaciones

  //obtener personajes
  const reqApiCharacters = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character/?page=2");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };

  //obtener localizaciones
  const reqApiLocations = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/location");
      const locationApi = await api.json();
    setLocations(locationApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick y Morty</h1>
        
    
        <div className="btn-container">
          <button onClick={() =>
            { setShowCharacters(true); reqApiCharacters(); }} className="btn-search">
            Buscar personajes
          </button>

          <button onClick={() =>
            { setShowCharacters(false); reqApiLocations(); }} className="btn-search">
            Buscar localizaciones
          </button>
        </div>

        {showCharacters ? ( characters ? ( <Characters characters={characters} />  
         ) : (
            <img src={imageRickMorty} alt="Rick y Morty" className="img-home" /> )
         ) : (
          locations ? ( <Locations locations={locations} />
         ) : (
            <img src={imageRickMorty} alt="Rick y Morty" className="img-home" /> )
        )}
      </header>

    </div>
  );
}

export default App;