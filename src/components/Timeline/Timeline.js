import React from 'react'
import TlDireita from './TlDireita';
import TlEsquerda from './TlEsquerda';
function Timeline() {
    return (
        <div class="container">
          <div
            class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
              <TlDireita local="Fundação Escola de Comércio Álvares Penteado" data="2021-2025" conteudo="Bacharelado em Ciências Econômicas"/>
              <TlEsquerda local="Rocketseat" data="2021-2022" conteudo="framework React.Js Avançado"/>
              <TlDireita local="Rocketseat" data="2020-2021" conteudo="framework React.Js básico"/>
              <TlEsquerda local="Udemy" data="2019-2021" conteudo="framework React.Js"/>
              <TlDireita local="Udemy" data="2019-2021" conteudo="linguagens/marcações HTML / CSS / Javascript"/>
              <TlEsquerda local="Google INC." data="2019-2019" conteudo="G-Suite Manager by Google"/>
              <TlDireita local="Instituto Federal do Amazonas" data="2014-2017" conteudo="Técnico em Tecnologia da Informação"/>
              <TlEsquerda local="Rocketseat" data="2020-2021" conteudo="servidor Node Js Básico"/>
          
            
            
           
           










          </div>
        </div>
    )
}

export default Timeline;
