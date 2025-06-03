import { FunctionalComponent } from "preact/src/index.d.ts";

type Character = {
  id: string; 
  name: string;
  image?: string;
  house?: string;
};

const CharacterList: FunctionalComponent<{ characters: Character[] }> = ({ characters }) => {
  return (
    <ul class="character-list">
      
      {characters.map((character) => (  
        <li key={character.id} class="character-list-item">
          <a href={`/character/${character.id}`}>
            <h2>{character.name}</h2>
            {character.image && <img src={character.image} alt={character.name} />}
            {character.house && <p>Casa: {character.house}</p>}
          </a>
        </li>
      ))}

    </ul>
  );
}
export default CharacterList;