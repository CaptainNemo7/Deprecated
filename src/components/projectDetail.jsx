import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

const ProjectDetail = (props) => {

	return (	
		<div>
			<a href={props.value.link} target="_blank" >
				<h2 className="Applications-title"><strong>{props.value.title}</strong></h2>
			</a>
			<Grid>
				<Row>
					<Col lg={7} >
						<a href={props.value.link} target="_blank" >
							<video className='videoTag' width='700' height='450' autoPlay loop muted>
    						<source  src={props.value.video} type='video/mp4' />
							</video>
						</a>
					</Col>
					<Col lg={5} >
						<div>
							<p>{props.value.description}</p>
							<p><strong className='strong'>Tech Stack:</strong> {props.value.tech}</p>
						</div>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}

export default ProjectDetail;


