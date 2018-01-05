import React from 'react';
import ProjectDetail from './projectDetail.jsx';
import caesarVideo from '../videos/CaesarCipher.mp4';
import cliffMovieVideo from '../videos/ironman.mp4';
import cryptoTracker from '../videos/CryptoTracker.mp4';

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			projects: [
				{	title:'Caesar Cipher',
					link: 'https://caesarcipherdemo.herokuapp.com',
					video: caesarVideo,
					description: 'This is a Caesar Cipher, one of the earliest known forms of encryption. This program encrypts, decrypts and brute forces through given ciphers. I built the front-end with React and React-Bootstrap and the server is made with Node.js/Express. It is currently live on Heroku. I also built my own algorithims for the encryption and decryption.',
					tech: 'HTML, CSS, Javascript, React, React-Bootstrap, Node.js/Express, Webpack, Babel'
				},
				{	title:'Crypto Tracker',
					link: 'https://github.com/CaptainNemo7/CryptoTracker',
					video: cryptoTracker,
					description: 'The Crypto Tracker is a smartphone app built for both iOS and Android phones. I chose to use React-Native in order to easily reach both Android and iOS users with one build. It displays up to date information about the most popular crypto currencies',
					tech: 'React-Native, Axios, Numeral.js, React-Navigation, Babel'
				},
				{	title:'Cliff\'s Movie DB',
					link: 'https://cliffsmoviedb.herokuapp.com/',
					video: cliffMovieVideo,
					description: 'An advanced movie database that gives users access to movie data. Using feature-driven development, I created the ads component front-end with React and Redux and the backend with Node.js/Express.',
					tech: 'HTML, CSS, Javascript, React, Redux, Node.js/Express, MongoDB, Mongoose, Axios, Webpack'
				},
			],
		}
	}

	render() {

		return (
			<div>
				{this.state.projects.map((project) => {
					return <ProjectDetail 
										key={project.title}
										value = {project}
									/>
					})
				}
			</div>
		)
	}
}

export default Projects;