import imageRickMorty from './img/rick-morty.png'
import './App.css';
import {useState} from "react";
import Characters from './components/Characters';

function App() {
const [characters,setCharacters]=useState(null);
//esta función lo que hace es mostrar los personajes al pulsar sobre el botón
const reqApi= async () =>{
  const api = await fetch("https://rickandmortyapi.com/api/character/?page=2")
  const characterApi = await api.json();
  console.log(characters);
  setCharacters(characterApi.results)
  
};

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Rick y Morty</h1>
      {characters ? (
        <Characters characters={characters}/>
      ):(
        <> 
        <img src={imageRickMorty} alt="Rick y Morty" className="img-home" />
        <button onClick={reqApi} className="btn-search"  > Buscar personajes</button>
        </> 
      )}
      </header>
    </div>
  );
}

export default App;