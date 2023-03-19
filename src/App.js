import React from "react";
import Inputs from "./componentes/inputs";
import BotaoLogin from "./componentes/botaoLogin";
import {usuario} from "./data/usuario";
import { UsuarioContext } from "./usuarioContext";

function App() {
  return (
    <div className="container">
      <UsuarioContext.Provider value={usuario}>
        <Inputs/>
        <BotaoLogin/>
      </UsuarioContext.Provider>
    </div>
  );
}

export default App;
