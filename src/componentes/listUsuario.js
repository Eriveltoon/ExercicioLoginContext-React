import React from "react";
import { useContext } from "react";
import { UsuarioContext } from "../usuarioContext";


export default function login(){
    const db = useContext(UsuarioContext);

    if(db.nome == "Erivelton" && db.senha == "123456"){
        return(
            <div>
                {db.nome}
            </div>
        );
    }
}