import React from 'react'
//import { Card } from 'antd';
//import 'antd/dist/antd.css';
import { Title, Index, Content } from "./style"
import { TitleIntroduction, Paragraphy } from "../introduction/style"
import { Wrapper } from "../header/style"

function Expertise(props) {

	return (
		<Wrapper>
			<TitleIntroduction>VALORES</TitleIntroduction>

			<Content>
				<Index>01</Index>
				<Title>GIT E GITHUB</Title>
			</Content>
			<Paragraphy>Ferramenta exencial para qualquer programador. Utilizo muito nos meus projetos 
					individuais e em time. Hoje não consigo acreditar que carregava meus códigos em 
					pen-drives na faculdade. 
			</Paragraphy>

			<Content>
				<Index>02</Index>
				<Title>DOCUMENTAÇÃO</Title>
			</Content>
			<Paragraphy>Hoje o dev consegue dar passos gigantes em pouco tempo porque um dia vários deles 
					se deram ao trabalho de desenvolver e documentar. Por isso, tenho o costume de documentar 
					todos os meus projetos, inclusive os perrengues. 
			</Paragraphy>

			<Content>
				<Index>03</Index>
				<Title>BOAS PRÁTICAS</Title>
			</Content>
			<Paragraphy>Códigos são mais lidos que escritos. Por isso, acredito na importancia em manter o 
					código organizado, padronizado e fácil de entender.
			</Paragraphy>

			<Content>
				<Index>04</Index>
				<Title>TDD</Title> 
			</Content>
			<Paragraphy>Depois de descobrir o Raby on Rails, não consigo mais pensar em desenvolver uma 
					aplicação sem escrever testes. Fazemos isso o tempo todo, por que não escrever um 
					algoritmo e deixar que a aplicação teste tudo pra voce? Não é "perda de tempo", testes 
					trazem segurança e poupam sim tempo a longo prazo. 
			</Paragraphy>

			<Content>
				<Index>05</Index>
				<Title>FOCO</Title>
			</Content>
			<Paragraphy>Com centenas de linguagens, frameworks e libs surgindo todos os dias a vontade de ser 
					o "mago" e estudar tudo é grande. Mas, acredito que pra ser execente no que faz precisamos focar 
					em poucas coisas e aplicar muito.
			</Paragraphy>

			<Content>
				<Index>06</Index>
				<Title>ORGANIZAÇÃO</Title>
			</Content>
			<Paragraphy>Com organização não andamos, pulamos. Exige muito mais esforço para manter do que começar, 
					mas tras muitos beneficios pra sí e pro time.
			</Paragraphy> 
		</Wrapper>
	);
}

export default Expertise;
