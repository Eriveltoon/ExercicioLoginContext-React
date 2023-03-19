import login from "./listUsuario";
import ListUsuario from "./listUsuario";

export default function BotaoLogar(){
    return(
        <div>
            <button className="btn btn-primary mt-2" onClick={login}>Login</button>
        </div>
    )
}