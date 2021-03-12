import React, { Component } from 'react'

class Service extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.name}</h3>
				<h6>${this.props.price}</h6>
				<p>{this.props.description}</p>
			</div>
		)
	}
}

export default Service