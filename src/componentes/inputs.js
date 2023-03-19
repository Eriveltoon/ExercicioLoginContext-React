import React from "react";


export default function logar(){
    return(
        <div>
            Usuario: <input type="text" className="form-control mt-2"/>
            Senha: <input type="password" className="form-control  mt-2"/>
        </div>
    );
}

/*export default function login(){
    const db = useContext(UsuarioContext);

    if(db.nome == "Erivelton" && db.senha == "123456"){
        return(
            <div>
                {db.nome}
            </div>
        );
    }
}*/


