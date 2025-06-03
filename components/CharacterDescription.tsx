import { FunctionalComponent } from "preact/src/index.d.ts";

type Character = {
    id?: string;
    name: string;
    image?: string;
    house?: string;
    species?: string;
    patronus?: string;
    gender?: string;
    alternate_names?: string[];
};

const CharacterDescription: FunctionalComponent<{ character: Character }> = ({ character }) => (
    <div class="character-description">
        <h2>{character.name}</h2>
        {character.image && <img src={character.image} alt={character.name} />}
        {character.house && <p>Casa: {character.house}</p>}
        {character.species && <p>Especie: {character.species}</p>}
        {character.patronus && <p>Patronus: {character.patronus}</p>}
        {character.gender && <p>Género: {character.gender}</p>}
        {character.alternate_names && character.alternate_names.length > 0 && (
            <p>
                Nombres alternativos: {character.alternate_names.join(", ")}
            </p>
        )}

    </div>
);
export default CharacterDescription;