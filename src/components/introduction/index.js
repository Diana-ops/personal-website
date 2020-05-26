import React from 'react'
//import { Card } from 'antd';
//import 'antd/dist/antd.css';
import { Paragraphy, TitleIntroduction } from "./style"
import { Wrapper } from "../header/style"

function Introduction(props) {

	return (
		<Wrapper>
		    <TitleIntroduction>SOBRE MIM</TitleIntroduction>
		    <div>
				<Paragraphy>
					Sou formada em Tecnologia em Mecatronica Industrial na Fatec, onde conheci a 
					área de programação e decidi ser Frontend.
				</Paragraphy>
				<Paragraphy>
					Participei do Bootcamp de React da WoMakersCode e Treina Dev da Campus Code. 
					Estou sempre a procura de boas ideias e de desenvolver projetos organizados e 
					com boas práticas. 
				</Paragraphy>
			</div>
		</Wrapper>
	);
}

export default Introduction;
