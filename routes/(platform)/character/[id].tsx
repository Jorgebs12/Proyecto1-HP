import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterDescription from "../../../components/CharacterDescription.tsx";
import Axios from "axios";

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

export const handler: Handlers<{ character: Character }> = {
    async GET(_req: Request, ctx: FreshContext) {
        
        const {id} = ctx.params;   

        try {
            const response = await Axios.get(`https://hp-api.onrender.com/api/character/${id}`);
            const character: Character = response.data[0];

            return ctx.render({ character });
        
        } catch (error) {
            return new Response(`Character not found${error}`, { status: 404 });
        }
    },
};

const Page = (props: PageProps<{ character: Character }>) => {
    
    const { character } = props.data;
    
    return ( 
        <CharacterDescription character={character} />
    );
}
export default Page;