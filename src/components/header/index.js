import React from 'react'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { GithubOutlined, MediumOutlined, LinkedinOutlined } from "@ant-design/icons";
import avatar from "../../assets/avatar.jpg"
import { Wrapper, DivAvatar, Infos, Principal, Icons,
		Avatar, Name, Profession, SubPrincipal, 
		Info, Title, Content } from "./style"

function Header(props) {

	return (
		<Wrapper>
			<DivAvatar>
				<Avatar src={avatar}/>
			</DivAvatar>

			<Principal>
				<SubPrincipal>
					<Title>
						<Name>Diana Regina</Name>
						<Profession>Web Developer & Front-end</Profession>
					</Title>
					<Icons>
						<GithubOutlined/>
						<MediumOutlined/>
						<LinkedinOutlined/>
					</Icons>
				</SubPrincipal>
				<hr/>
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
