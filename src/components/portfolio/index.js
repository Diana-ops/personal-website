import React from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { Wrapper } from "../header/style"
import { TitleIntroduction } from "../introduction/style"

function Portfolio(props) {

	const { Meta } = Card;
	return (
		<Wrapper>
			<TitleIntroduction>CURSOS, EVENTOS E BOOTCAMPS</TitleIntroduction>
			<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt="example" src="https://user-images.githubusercontent.com/46378210/80231326-9a603980-8629-11ea-8798-eabacda99982.png"/>}
			>
			<Meta title="Certificates for Everyone" description="Plataforma para gerar certificados em bootcamps e eventos com React"/>
			</Card>

			<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt="example" src="https://user-images.githubusercontent.com/46378210/80231326-9a603980-8629-11ea-8798-eabacda99982.png"/>}
			>
			<Meta title="Headhunters" description="Plataforma de contratação desenvolvida em Ruby On Rails"/>
			</Card>

			<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt="example" src="https://user-images.githubusercontent.com/46378210/80231326-9a603980-8629-11ea-8798-eabacda99982.png"/>}
			>
			<Meta title="Rental Cars" description="Sistema de locação de carros desenvolvido em Ruby On Rails"/>
			</Card>

			<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt="example" src="https://user-images.githubusercontent.com/46378210/80231326-9a603980-8629-11ea-8798-eabacda99982.png"/>}
			>
			<Meta title="Ecomerce" description="Ecomerce de produtos de realidade virtual em React"/>
			</Card>

			<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt="example" src="https://user-images.githubusercontent.com/46378210/80231326-9a603980-8629-11ea-8798-eabacda99982.png"/>}
			>
			<Meta title="Plants" description="Interface para contra de plantas em HTML, CSS e JavaScript"/>
			</Card>
		</Wrapper>
	);
}

export default Portfolio;
