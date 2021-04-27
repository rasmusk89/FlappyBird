import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
	<React.StrictMode>
		<Header />

		<div className="container">
			<main role="main" className="pb-3">
				<div className="text-center">
					<h1 className="display-4">Hello, React</h1>
				</div>
			</main>
		</div>

		<Footer />

	</React.StrictMode>,
	document.getElementById('root')
);
