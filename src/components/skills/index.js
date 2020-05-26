import React from 'react'
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import { Wrapper } from "../header/style"
import { TitleIntroduction } from "../introduction/style"
import { ProgressSkills, Resource, Lenguage, Framework, Message } from "./style"

function Skills(props) {

	return (
		<Wrapper>
			<div>
				<TitleIntroduction>SKILLS</TitleIntroduction>
				<Message>Os indicadores abaixo mostram a frequência com que trabalho com essas 
						tecnologias e não servem como uma métrica de conhecimento
				</Message>
			</div>
			<ProgressSkills>
				<Lenguage>HTML</Lenguage>
				<Progress percent={70} status="active" strokeColor="orange" showInfo={false}/>
				<Lenguage>CSS</Lenguage>
				<Progress percent={70} status="active" strokeColor="orange" showInfo={false}/>
				<Lenguage>Java Script</Lenguage>
				<Progress percent={50} status="active" strokeColor="orange" showInfo={false}/>
				<Lenguage>Python</Lenguage>
				<Progress percent={10} status="active" strokeColor="orange" showInfo={false}/>

				<Framework>React</Framework>
				<Progress percent={80} status="active" strokeColor="violet" showInfo={false}/>
				<Framework>Ruby e Ruby on Rails</Framework>
				<Progress percent={80} status="active" strokeColor="violet" showInfo={false}/>
				<Framework>Antdesign</Framework>
				<Progress percent={60} status="active" strokeColor="violet" showInfo={false}/>

				<Resource>Git e GitHub</Resource>
				<Progress percent={90} status="active" strokeColor="black" showInfo={false}/>
				<Resource>Linux</Resource>
				<Progress percent={30} status="active" strokeColor="black" showInfo={false}/>
			</ProgressSkills>
		</Wrapper>
	);
}

export default Skills;
