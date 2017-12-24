import React from 'react';


const ProjectDetail = (props) => {

	return (
		
		<div>
			<a href={props.value.link} target="_blank" ><h2 className="Applications-title"><strong>{props.value.title}</strong></h2>
			<video className='videoTag' width='700' height='450' autoPlay loop muted>
    		<source  src={props.value.video} type='video/mp4' />
			</video>
			</a>
			<div>
				<p>{props.value.description}</p>
				<p><strong className='strong'>Tech Stack:</strong> {props.value.tech}</p>
			</div>

		</div>
	);
}

export default ProjectDetail;
				// <iframe src={props.value.gif} frameborder='0' scrolling='no' width='700' height='450' allowfullscreen></iframe>
// <blockquote class="imgur-embed-pub" lang="en" data-id="a/JymIb"><a href="//imgur.com/JymIb"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
// <img src={props.value.gif} alt="gif of the project"/>
// <a target="_blank" href={props.value.link}>
// 				<video className='video' autoPlay loop>
// 					<source src={props.value.video} type="video/mp4" />
// 				</video>
// 			</a>

// <a href={props.value.link} target="_blank" >
				// <iframe src={props.value.gif} frameBorder='0' scrolling='no' width='700' height='450' allowFullScreen ></iframe>
			// </a>


