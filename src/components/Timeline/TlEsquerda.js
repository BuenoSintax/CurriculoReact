import React from 'react';

 function TlEsquerda(props) {
  return (
    <React.Fragment>
      {/* Começo esquerda */}
      <div class="flex flex-row-reverse md:contents">
        <div
          /* Fundo background */
          class="bg-gray-900 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
        >
          <h3 class="font-semibold text-lg mb-1">{props.local}</h3>
          <h3 class=" text-sm mb-1">{props.data}</h3>
          <p class="leading-tight text-justify">
            {props.conteudo}
          </p>
        </div>
        <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
          <div class="h-full w-6 flex items-center justify-center">
            {/* Faixa central */}
            <div class="h-full w-1 bg-black pointer-events-none"></div>
          </div>
          <div
            /* Bolinha */
            class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-600 shadow"
          ></div>

        </div>

      </div>

      {/* Fim esquerda */}



    </React.Fragment>
  )
}
export default TlEsquerda;