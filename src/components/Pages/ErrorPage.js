import React from 'react'
import ImgErro from '../assets/Error-404.png'
function ErroPage(){
    return(
       
<div class='flex items-center justify-center min-h-screen'>
 <section class="text-center mx-6 lg:w-2/3">
	<img class="m-auto w-28 lg:w-48 rounded-full " src={ImgErro} />
	<h1 class="mt-2 mb-1 text-2xl lg:text-3xl">Oooops! Parece que a página não foi encontrada. </h1>
	<div>
		<p class="text-2xl">
			
            Contate o Maurício, vai! Ou acesse o menu principal acima. 😊
            <br></br>
			Meu <a class="text-indigo-500 font-semibold hover:underline hover:decoration-wavy" target="_blank" href="https://twitter.com/ichmauricio"> Twitter</a> para informações.
		</p>
		<p class="mt-4 text-lg text-indigo-600">M. Bueno</p>
	</div>
</section>
</div>



    )


}
export default ErroPage;