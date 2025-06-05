import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharactersList from "../../components/CharacterList.tsx";
import axios from "npm:axios"; 
import CharacterForm from "../../islands/CharacterForm.tsx";

type Character = {
    id: string;
    name: string;
    image?: string;
    house?: string;
};

export const handler: Handlers<{ characters: Character[] }> = {
  async GET(_req: Request, ctx: FreshContext) {
    
    const response = await axios.get("https://hp-api.onrender.com/api/characters");
    const characters: Character[] = response.data;

    return ctx.render({ characters });
  },
};

const Page = (props: PageProps<{ characters: Character[] }>) => (
    <div>
        <h1 class="title"> Personajes de Harry Potter</h1>
          <CharacterForm characters={props.data.characters} />
    </div>
);

        //<CharactersList characters={props.data.characters} />


export default Page;