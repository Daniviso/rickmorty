
export default function Characters(props) {
 const {characters} =props; //que coja toda la inforación con los porps de app.js a través de los que recibimos en esta función

  return (
  <div className="characters">
      <h1>Personajes</h1>
      <span className="black-home">Volver a la home</span>
      <div className="container-characters">
        {characters.map((character, index)=>(
          <div className="character-container" key={index}>
            <div>
            <img src={character.image} alt={character.name}/>
          </div>
            <div>
            <h3>{character.name}</h3>
            <h6>
              {character.status === "Alive" ? (
                <>
                <span className="Alive" />
                Alive
                </>
              ) : (
                <>
                <span className="dead" />
                Dead
                </>
              )}
            </h6>
            <p className="test-grey"><span>Episodios:</span> </p>
            <span>{character.episode.length}</span>
            </div>
         </div>
      ))}
    </div>
  </div>
  );
}
