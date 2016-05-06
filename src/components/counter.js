import React, {Component, PropTypes} from 'react';

const style = {
	border: '1px red solid'
}

const styleButton = {
	padding: '10px',
	color: 'red',
	backgroundColor: 'green'
}

export default class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			count: props.initialCount
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			count: this.state.count+1
		});
	}

	render() {
		return (
			<div style={style}>
				<button style={styleButton} onClick={this.handleClick}>{this.state.count} clicks</button>
			</div>
		);
	}
}

Counter.propTypes = {
	initialCount: PropTypes.number
};
Counter.defaultProps = {
	initialCount: 0
};