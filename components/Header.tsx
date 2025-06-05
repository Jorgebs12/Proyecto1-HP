import { FunctionComponent } from "preact/src/index.d.ts";

const Header: FunctionComponent = () => {
    return ( 
        <div class="Header">
            <div> <a href="/characters"> Listado de Personajes</a> </div>
            <div> <a href="/"> Cerrar Sesion</a> </div>
        </div> 
    )
}

export default Header;