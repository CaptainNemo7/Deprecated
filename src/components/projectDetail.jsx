import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

class ProjectDetail extends React.Component {
	
render() {
	let outPut;
	if (this.props.id % 2 === 0) {
		outPut = <div>
		<a href={this.props.value.link} target="_blank" >
			<h2 className="Applications-title"><strong>{this.props.value.title}</strong></h2>
		</a>
		<Grid>
			<Row>
				<Col xs={4}  lg={7} >
					<a href={this.props.value.link} target="_blank" >
						<video className='videoTag' width='700' height='450' autoPlay loop muted>
							<source  src={this.props.value.video} type='video/mp4' />
						</video>
					</a>
				</Col>
				<Col xs={10} lg={5} >
					<div>
						<p>{this.props.value.description}</p>
						<p><strong className='strong'>Tech Stack:</strong> {this.props.value.tech}</p>
					</div>
				</Col>
			</Row>
		</Grid>
	</div>
	} else {
		outPut = <div>
		<a href={this.props.value.link} target="_blank" >
			<h2 className="Applications-title"><strong>{this.props.value.title}</strong></h2>
		</a>
		<Grid>
			<Row>
				<Col xs={10} lg={5} >
					<div>
						<p>{this.props.value.description}</p>
						<p><strong className='strong'>Tech Stack:</strong> {this.props.value.tech}</p>
					</div>
				</Col>
				<Col xs={4}  lg={7} >
					<a href={this.props.value.link} target="_blank" >
						<video className='videoTag' width='700' height='450' autoPlay loop muted>
							<source  src={this.props.value.video} type='video/mp4' />
						</video>
					</a>
				</Col>
			</Row>
		</Grid>
	</div>
	} 
	return (
		<div>
			{outPut}
		</div>
	);
}
}

export default ProjectDetail;


