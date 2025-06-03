import { FunctionComponent } from "preact";

const LoginForm: FunctionComponent = () => 
    <form class="login-form" action="/" method="GET">
        <input type="text" name="username" placeholder="Introduce un nombre" />
        <input type="password" name="password" placeholder="Introduce una contraseña" />
        <button type="submit">Iniciar sesión</button>
    </form>

export default LoginForm;