import React, { useState, useEffect } from 'react'
import euae from '../assets/euae.jpeg';
import ConteudoInicial from '../ConteudoInicial';
function Home() {
  useEffect(() => {
      
    document.title = "Maurício 🔥 | Home";
  });



  return (

    <React.Fragment>
      

      <section class="text-gray-400 bg-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"></img>
      
    <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-between">
            <span class="text-sm font-light text-gray-600 dark:text-gray-400">Jan 11, 2022</span>
            
        </div>

        <div class="mt-2">
            <a href="#" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Sobre mim</a>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
            Brasileiro e paulista, sou profissional do TI com diversas skills pertinentes ao
desenvolvimento do setor de tecnologia e negócios de uma organização.
Três anos participando de implementação de softwares e ajudando em
possíveis soluções em infra. Realizando formação de Ciências Econômicas
pela Fundação Escola de Comércio Álvares Penteado e formado em
tecnologia pelo Instituto Federal do Amazonas. Iniciante em React.Js e no
universo front-end, estou descobrindo cada vez mais minha aptidão para a
área. Possuo conhecimento na realização da estrutura de arquivos como
repositórios deb em Apache e estruturação com shellscript. Saber avançado
em SQL, com triggers, procedures e joins pertinentes com certa experiência
em transações para o ERP. Trabalhando numa importadora e
comercializadora de aço inoxidável, obtive experiência entre diversos
setores da tecnologia e sua integração além de obter contato com diversos
tipos de pessoas e gêneros.


            </p>
        </div>
        
        <div class="flex items-center justify-between mt-4">
            

            <div class="flex items-center">
                <img class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={euae} alt="avatar"></img>
                <a class="font-bold text-gray-700  dark:text-gray-200">Maurício Bueno</a>
            </div>
        </div>
    </div>



  </div>
</section>



    </React.Fragment>




  );

}

export default Home;