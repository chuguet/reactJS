import React from 'react';
import ReactDOM from 'react-dom';
import HolaMundo from './components/saludo';
import Counter from './components/counter';
import Crono from './components/crono';
import Buscador from './components/buscador/index';

window.onload = function(){
	ReactDOM.render(
		<div>
			<HolaMundo country="France" name="carlos"/>
			<Counter/>
			<Crono/>
			<Buscador/>
		</div>
		, document.body);
}
