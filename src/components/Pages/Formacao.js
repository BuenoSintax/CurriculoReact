import React, { useEffect } from 'react'
import ConteudoInicial from '../ConteudoInicial';
import Timeline from '../Timeline/Timeline';

function Formacao(){
  useEffect(() => {
      
    document.title = "Maurício 🔥 | Formação";
  });

    return(

        <React.Fragment>
        <ConteudoInicial titulo="Formação" descricao="Aqui são as minhas formações"/>
        
<section>
    <div class="bg-gray-400 text-black py-8">
    <div class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <h1 class="text-xl ml-2 text-indigo-600 uppercase tracking-loose">Timeline</h1>
        
        <p class="text-sm md:text-base text-gray-50 mb-4">
          Aqui é a linha do tempo de toda minha fase acadêmica e de estudos que me esforcei durante estes anos.
        </p>
        
      </div>    
      

     
<Timeline/>
      


      
    </div>
  </div>

  
  </section>



        </React.Fragment>
    );

}

export default Formacao;