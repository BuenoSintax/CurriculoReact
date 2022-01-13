import React from 'react'
import logoJS from '../assets/Javascript.png';
import logoReact from '../assets/logoreact.png';
import logoHTML from '../assets/Html.png';
import logoCSS from '../assets/csslogo.png';
import logoNODE from '../assets/logonode.png';
import logoJAVA from '../assets/logojava.png';
import logoGOOGLE from '../assets/logogoogle.png';
import CardConteudo from './CardConteudo';

function ConteudoCompet() {
    return (
        <React.Fragment>
        <section class="bg-stone-100 rounded-lg">
            <div class="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto  items-center max-w-6xl mx-auto">
              <div class="px-4 md:mr-6">
                <h3 class="text-4xl rounded-lg pr-6 sm:leading-snug tracking-tight font-bold text-gray-900">
                  Minhas aptidões e competências
                </h3>
                <p class="mt-4 rounded-lg text-stone-800 text-xl font-medium">
                  Certo, mas o que exatamente é: <span class="text-indigo-600 text-semi-bold"> Competência</span>?  
                  Por extensão: competência é “tomar a iniciativa e assumir a 
                  responsabilidade diante das situações profissionais com as quais nos deparamos. 
                  Consiste em um entendimento prático de situações, que se apoia em conhecimentos adquiridos e os transforma 
                  à medida que aumenta a diversidade de situações.
                </p>
              </div>

              
<div class="mx-10 pt-15">
   <div class="grid gap-6 mb-8 md:grid-cols-2">
              
   <CardConteudo fundo="bg-black" titulo="teste" conteudo="teste"/>    
              
            </div>
</div>
            



              {/* <div>
                <div class="absolute bg-gray-800 transform -translate-x-10 relative h-64">
                </div>
                <div class="transform md:rounded-md bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl -ml-4 -mt-44 p-12  space-y-2">
                  <div class="px-4 content-center sm:px-0 grid grid-cols-5 sm:grid-cols-4 gap-2 sm:gap-8 max-w-5xl mx-auto">
                                <img class="h-50" src={logoJS}></img>
                                <img src={logoHTML}></img>
                                <img src={logoReact}></img>
                                <img class="h-28 pb-2 ml-2"src={logoCSS}></img>
                                <img src={logoNODE}></img>
                                <img src={logoJAVA}></img>
                                <img class="pt-5" src={logoGOOGLE}></img>
                               
                         
                              </div>
                </div>
              </div> */}
            </div>
          </section>
          </React.Fragment>
    )
}

export default ConteudoCompet;
