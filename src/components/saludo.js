import React, {Component, PropTypes} from 'react';

const style = {
	border: '1px red solid'
}

export default class HolaMundo extends Component {
	render() {
		const {name, country, date} = this.props;
		return <div style={style}>
					<h1>Hola {name}, tu nombre tiene {name.length+1} letras</h1>
					<h2>Fecha {date.hoy}</h2>
					<h2>Pais {country}</h2>
				</div>;
	}
}


HolaMundo.propTypes = {
	country: PropTypes.string.isRequired,
	date: PropTypes.object.isRequired
}

HolaMundo.defaultProps = {
	country: 'España',
	date: {
		hoy: 'ayer'
	}
}
