import React from 'react'
import { Timeline  } from 'antd';
import { CheckCircleTwoTone } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { Wrapper } from "../header/style"
import { TitleIntroduction } from "../introduction/style"

function Bootcamps(props) {

	return (
		<Wrapper>
			<TitleIntroduction>CURSOS, EVENTOS E BOOTCAMPS</TitleIntroduction>
			<Timeline mode="left">
		    	<Timeline.Item label="No momento">Treina Dev - Campus Code</Timeline.Item>
		    	<Timeline.Item 
		    		label="Abril/2020"
		    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
		    			Bootcamp React WoMakersCode
		    	</Timeline.Item>
		    	<Timeline.Item 
		    		label="Julho/2019"
		    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
		    			Monitoria de Programação
		    	</Timeline.Item>
		    	<Timeline.Item 
		    		label="Outubro/2019"
		    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
		    			Hackathon Unisys Mauá
		    	</Timeline.Item>
		    	<Timeline.Item 
		    		label="Dezembro/2018"
		    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
		    			Estágio de Eletronica
		    	</Timeline.Item>
		    	<Timeline.Item 
		    		label="Outubro/2018"  
		    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
		    			Hackathon Unisys Senai
		    	</Timeline.Item>
		  	</Timeline>
		</Wrapper>
	);
}

export default Bootcamps;