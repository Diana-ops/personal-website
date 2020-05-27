import React from 'react'
import { Timeline  } from 'antd';
import { CheckCircleTwoTone } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { Wrapper } from "../header/style"
import { TitleIntroduction } from "../introduction/style"

function Education(props) {

	return (
		<>
			<TitleIntroduction>FORMAÇÃO</TitleIntroduction>
			<Timeline mode="left">
				<Timeline.Item 
		    		label="Dezembro/2019"
		    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
		    			Técnologo em Mecatronica Industrial
		    	</Timeline.Item>
		    	<Timeline.Item 
		    		label="Dezembro/2017"
		    		dot={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "16px"}}/>}>
		    			Técnico em Eletronica
		    	</Timeline.Item>
		  	</Timeline>
		</>
	);
}

export default Education;
