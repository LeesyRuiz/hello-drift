import React from 'react'
import { Link } from 'react-router-dom';



class Home extends React.Component {
	render() {
		return (
			<div className='home-container'>
				<h1>Drift</h1>

				<Link className='button' to='/drift'>
					drift
				</Link>
			</div>
		);
	}
}

module.exports = Home;
