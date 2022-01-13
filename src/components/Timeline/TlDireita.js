import React from 'react'

function TlDireita(props) {
    return (
        <React.Fragment>
            {/* Inicio direita */}
            <div class="flex md:contents">
                <div class="col-start-5 col-end-6  md:mx-auto relative">
                    <div class="h-full w-6 flex items-center justify-center">
                        <div class="h-full w-1 bg-black pointer-events-none"></div>
                    </div>
                    <div
                        class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-600 shadow-xl"
                    ></div>
                </div>
                <div
                    class="bg-gray-900  col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-xl opacity-75"
                >
                    <h3 class="font-semibold text-lg mb-1">{props.local}</h3>
                    <h3 class="font-semibold text-sm mb-1">{props.data}</h3>
                    <p class="leading-tight text-justify">
                        {props.conteudo}
                    </p>
                </div>
            </div>
            {/* Fim direita */}


        </React.Fragment>
    )
}

export default TlDireita;
