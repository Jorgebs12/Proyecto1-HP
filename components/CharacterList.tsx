import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

type Character = {
  id: string; 
  name: string;
  image?: string;
  house?: string;
};

const CharacterList: FunctionalComponent<{ characters: Character[] }> = ({ characters }) => {
  const [view, setView] = useState<"list" | "grid">("list");

  return (
    <div>
      <button onClick={() => setView(view === "list" ? "grid" : "list")}>
        Cambiar a vista {view === "list" ? "cuadrícula" : "listado"}
      </button>
      <ul class={`character-list ${view === "grid" ? "grid-view" : "list-view"}`}>
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
    </div>
  );
}
export default CharacterList;