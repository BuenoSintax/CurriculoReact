import React from 'react';
import {Link} from 'react-router-dom';
import mauLogo from './assets/Mauricio.png';
import linkedin from './assets/Linkedin.png';
import github from './assets/Github.png';
function Navbar(){
return(

	



<nav class="bg-gray-300 shadow shadow-gray-300 w-100 px-8 md:px-auto">

	<div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		{/* <!-- Logo --> */}
			<div class=" md:order-1">
					<img src={mauLogo} class="w-20 h-20"></img>
			</div>
		
			<div class="text-gray-900  order-3 w-full md:w-auto md:order-2">
				<ul class="2xl:flex xl:flex lg:flex md:flex xl:text-lg font-semibold justify-between">
					<li class="md:px-4 sm:px-1 md:py-2 hover:text-black"> <Link to="/experiencia">Experiência</Link> </li>
					<li class="md:px-4 md:py-2 hover:text-black"> <Link to="/formacao">Formação</Link> </li>
					<li class="md:px-4 md:py-2 text-indigo-700 hover:text-black"><Link to="/"> Mauricio </Link> </li>
					<li class="md:px-4 md:py-2 hover:text-black"> <Link to="/competencias">Competencias</Link> </li>
					<li class="md:px-4 md:py-2 hover:text-black"> <Link to="/interesses">Interesses</Link> </li>
					</ul>
			</div>
		
			<div class="flex order-2 md:order-3">
			<a class="mx-5" href="https://github.com/BuenoSintax">
			<img src={github} class=" w-7 h-7">
				
			</img>
			</a>
			<a href="https://www.linkedin.com/in/mauricio-buenol/">
			<img src={linkedin} class=" w-7 h-7">
				
			</img>
			</a>
			
			</div>
	</div>
</nav>







);



}
export default Navbar;