import React from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { GithubOutlined, MediumOutlined, LinkedinOutlined } from "@ant-design/icons";
import avatar from "../../assets/avatar.jpg"
import { Wrapper, DivAvatar, Infos, Principal, Icons,
		Avatar, Name, Profession, SubPrincipal, TitlePrincipal,
		Info, Title, Content, Ancora } from "./style"

function Header(props) {

	return (
		<Wrapper>
			<DivAvatar>
				<Avatar src={avatar}/>
			</DivAvatar>

			<Principal>
				<SubPrincipal>
					<TitlePrincipal>
						<Name>Diana Regina</Name>
						<Profession>Web Developer & Front-end</Profession>
					</TitlePrincipal>
					<Icons>
						<Ancora className="ancora" href="https://github.com/Diana-ops"><GithubOutlined/>GITHUB</Ancora>
						<Ancora className="ancora" href="https://medium.com/@dianareginadr19"><MediumOutlined/>MEDIUM</Ancora>
						<Ancora className="ancora" href="https://www.linkedin.com/in/diana-regina-a96840173/"><LinkedinOutlined/>LINKEDIN</Ancora>
					</Icons>
				</SubPrincipal>
				<hr style={{ width: "80%", borderColor: "white"}}/>
				<Infos>
					<Info>
						<Title>Location</Title>
						<Content>Santo André - SP - Brazil</Content>
					</Info>
					<Info>
						<Title>Email</Title>
						<Content>dianaregina22@outlook.com.br</Content>
					</Info>
				</Infos>
			</Principal>
		</Wrapper>
	);
}

export default Header;
