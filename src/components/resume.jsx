import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

const Resume = (props) => {

	return (
		<div className="Resume">
			<Grid>
				<Row>
					<Col xs={6} md={4} >
						<a target="_blank" href="https://github.com/CaptainNemo7">Github</a>
					</Col>
					<Col xs={6} md={4} >
						<a target="_blank" href="https://docs.google.com/document/d/1KSkjVjyoDxd_het5wFj_MD3Qia_rboluYMGf2e9Ak3k/edit?usp=sharing"
									>Resume</a>
					</Col>
					<Col xs={6} md={4} >
						<a target="_blank" href="https://www.linkedin.com/in/carter-chavez-37a18964/">LinkedIn</a>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}

export default Resume;