import React from 'react';
import ReactDOM from 'react-dom';
import HolaMundo from './components/saludo';
import Counter from './components/counter';
import Crono from './components/crono';

window.onload = function(){
	ReactDOM.render(
		<div>
			<HolaMundo country="France" name="carlos"/>
			<Counter/>
			<Crono/>
		</div>
		, document.body);
}