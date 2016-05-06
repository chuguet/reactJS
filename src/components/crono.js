import React, {Component, PropTypes} from 'react';
import {extractTimeParts} from '../lib/utils'

const Header = (props) => (
		<div className="header">
			<h2>{props.name}</h2>
		</div>
	)
const Screen = ({time}) => (
		<div className="timer">
			<span className="timer-hours">{time.hours}</span>:
			<span className="timer-minutes">{time.minutes}</span>:
			<span className="timer-seconds">{time.seconds}</span>:
			<span className="timer-seconds">{time.milliseconds}</span>
		</div>
	)
class Buttons extends Component {
	render() {
		const {onStart, onStop} = this.props;
		return (
				<div className="actions">
					<button onClick={onStop}>STOP</button>
					<button onClick={onStart}>START</button>
				</div>
			)
	}
}


export default class Crono extends Component {

	constructor(props) {
		super(props);
		this.handleStart = this.handleStart.bind(this);
		this.handleStop = this.handleStop.bind(this);
		this.state = {
				isRunning: false,
				start: 0,
				currentTime: 0
		};
	}

	handleStart() {
		if(!this.state.isRunning) {
			this.setState({
				isRunning: true,
				start: Date.now()
			});
			this._interval = setInterval(() => this.setState({
				currentTime: Date.now()
			}),16)
		}
	}

	handleStop() {
		if(this.state.isRunning) {
			clearInterval(this._interval);
			this.setState({
				isRunning: false
			});
		} else {
			this.setState({
				start: 0,
				currentTime: 0
			});
		}
	}

	render() {
		const elapsedTime = this.state.currentTime - this.state.start,
					timeParts = extractTimeParts(elapsedTime);
		return (
			<div className="crono">
				<Header name="Cronómetro"/>
				<div className="content">
					<Screen time = {timeParts}/>
					<Buttons onStart={this.handleStart} onStop={this.handleStop}/>
				</div>
			</div>
		);
	}
}

Buttons.propTypes = {
	onStart: PropTypes.func.isRequired,
	onStop: PropTypes.func.isRequired
}
