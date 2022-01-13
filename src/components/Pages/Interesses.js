import React, { useEffect } from 'react'

import ConteudoInicial from '../ConteudoInicial';
        
function Interesses(){
    useEffect(() => {
      
        document.title = "Maurício 🔥 | Interesses";
      });
    return(
        <React.Fragment>
        <ConteudoInicial titulo="Interesses" descricao="Aqui são meus interesses pessoais"/>
        <h2>Hello sou a pagina interesses</h2>
        </React.Fragment>
    );

}

export default Interesses;