import { FunctionalComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import CharacterList from "../components/CharacterList.tsx";

type Character = {
  name: string;
  id: string;
};

type Props = {
  characters: Character[];
};

// mirar con el ejemplo de valero, y actualizar la ruta en la isla

const CharacterForm2: FunctionalComponent<Props> = (props) => {

  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    // Limpiar el timeout anterior si existe
    if (timeout.current) clearTimeout(timeout.current);
    
    // Establecer un nuevo timeout para actualizar el estado después de 1 segundo
    timeout.current = setTimeout(() => {
      setSearchName(inputValue);
    }, 1000);

    // Limpiar el timeout al desmontar el componente
    // o al cambiar el valor de inputValue
    // Esto previene que se actualice el estado si el componente se desmonta
    // o si el usuario escribe algo nuevo antes de que se cumpla el timeout
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [inputValue]);

  // Filtra los personajes según el texto escrito
   const filtered = props.characters.filter((ch) =>
    ch.name.toLowerCase().includes(searchName.toLowerCase())
  );

 return (
    <>
      <form class="form-container" onSubmit={e => e.preventDefault()}>
        <input type="text" name="name" placeholder="Introduce un nombre"
          value={inputValue} onInput={e => setInputValue(e.currentTarget.value)} />
      </form>

      <div class="charactersContainer">
        <CharacterList characters={filtered} />
      </div>
    </>
  );
};


export default CharacterForm2;
/*
const CharacterForm: FunctionalComponent<Props> = (props) => {
  const [search, setSearch] = useState("");
  
  // Filtra los personajes según el texto escrito
  const filteredCharacters = props.characters.filter((ch) =>
    ch.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <form class="form-container" onSubmit={e => e.preventDefault()}>
        <input type="text" name="name"
          placeholder="Introduce un nombre" value={search}
          onInput={e => setSearch((e.target as HTMLInputElement).value)}
        />
      </form>

      <div class="charactersContainer">
        <CharacterList characters={filteredCharacters} />
      </div>
    </>
  );
};

export default CharacterForm;
*/
