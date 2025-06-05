/** routes/(platform)/house/[house].tsx */
import { Handlers, PageProps } from "$fresh/server.ts";
import HouseList from "../../../components/HouseList.tsx";

type Character = {
    name: string;
    image?: string;
    house?: string;
} 

export const handler: Handlers<{ characters: Character[] }> = {
  async GET(_req, ctx) {

    const { house } = ctx.params;
    
    try {
      const res = await fetch(`https://hp-api.onrender.com/api/characters/house/${house}`);
    
      if (!res.ok) throw new Error("No se encontraron personajes");
      const data: Character[] = await res.json();

      console.log(data);
      console.log(res)
    
      return ctx.render({ characters: data });
    
    } catch (err) {
      return new Response(`Error al buscar personajes ${err}`, { status: 404 });
    }
  },
};

const Page = (props: PageProps<{ characters: Character[] }>) => {
  const { characters } = props.data;
  return (
    <HouseList houses={characters} />
  );
}

export default Page;
