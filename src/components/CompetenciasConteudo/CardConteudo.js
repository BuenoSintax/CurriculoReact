import React from 'react'

function CardConteudo(props) {
    return (
        <div class={"min-w-0 p-4 bg-indigo-400 rounded-lg  shadow-xs "}>
            <h4 class="mb-4 font-semibold text-gray-900 ">
                {props.titulo}
            </h4>
            <p class="text-gray-800">
               {props.conteudo}
            </p>
        </div>
    )
}

export default CardConteudo
