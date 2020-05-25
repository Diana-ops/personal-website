import React from 'react'
//import { Card } from 'antd';
//import 'antd/dist/antd.css';
import { Paragraphy, TitleIntroduction } from "./style"
import { Wrapper } from "../header/style"

function Introduction(props) {

	return (
		<Wrapper>
		    <TitleIntroduction>Um pouco sobre mim</TitleIntroduction>
			<Paragraphy>
				Diana Regina é formada em Tecnologia em Mecatronica Industrial na Fatec, onde conheceu a área de programação e decidiu ser Frontend.
				Participou do Bootcamp de React da WoMakersCode e Treina Dev da Campus Code. Está sempre a procura de boas ideias e de desenvolver projetos 
				organizados e com boas práticas. 
			</Paragraphy>
		</Wrapper>
	);
}

export default Introduction;
