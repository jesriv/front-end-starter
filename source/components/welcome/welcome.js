import React from 'react';
import ReactDOM from 'react-dom';

require('./welcome.css');


ReactDOM.render(
	<div className="box box--welcome">
		<h1 className="h1">Welcome!</h1>
		<p>This is a very basic starting point.</p> 
	</div>

	, document.getElementById('root')
);