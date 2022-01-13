import React, { useEffect } from 'react'
import ConteudoCompet from '../CompetenciasConteudo/ConteudoCompet';
import ConteudoInicial from '../ConteudoInicial';
function Competencias(){
    useEffect(() => {
      
        document.title = "Maurício 🔥 | Competências";
      });
    return(

        <React.Fragment>
        <ConteudoInicial titulo="Competências" descricao="Aqui são minhas competências"/>
        <ConteudoCompet/>
        </React.Fragment>
    );

}

export default Competencias;