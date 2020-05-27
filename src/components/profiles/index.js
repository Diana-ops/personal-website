import React from 'react'
//import { Card } from 'antd';
import { GithubOutlined, MediumOutlined, LinkedinOutlined, ForkOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { TitleIntroduction } from "../introduction/style"
import { Wrapper } from "../header/style"
import { Title, Index, Content, Paragraphy } from "../expertise/style"

function Profiles(props) {

	return (
		<Wrapper>
			<TitleIntroduction>PROFILES</TitleIntroduction>
			
			<Content>
				<GithubOutlined/>
				<Title>GIT E GITHUB</Title>
			</Content>
			<Paragraphy>Repositórios com todos os meus projetos</Paragraphy>

			<Content>
				<MediumOutlined/>
				<Title>MEDIUM</Title>
			</Content>
			<Paragraphy>Meus artigos sobre tecnologia</Paragraphy>

			<Content>
				<LinkedinOutlined/>
				<Title>LINKEDIN</Title>
			</Content>
			<Paragraphy>Perfil no Linkedin</Paragraphy>

			<Content>
				<ForkOutlined/>
				<Title>DEV</Title>
			</Content>
			<Paragraphy>Perfil no Linkedin</Paragraphy>
		</Wrapper>
	);
}

export default Profiles;