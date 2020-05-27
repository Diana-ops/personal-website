import React from 'react'
import { Timeline  } from 'antd';
import 'antd/dist/antd.css';
import { Wrapper } from "../header/style"
import { TitleIntroduction } from "../introduction/style"

function Education(props) {

	return (
		<Wrapper>
			<TitleIntroduction>FORMAÇÃO</TitleIntroduction>
			<Timeline>
		    	<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
		    	<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
		    	<Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
		    	<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
		  	</Timeline>
		</Wrapper>
	);
}

export default Education;
