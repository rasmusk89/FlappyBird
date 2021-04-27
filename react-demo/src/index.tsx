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
import Groups from './views/Groups';
import Home from './views/Home';

const SimpleRouter = (): JSX.Element => {
	const route = window.location.pathname;
	if (route === '/Groups') {
		return <Groups />
	}
	return <Home />
}

ReactDOM.render(
	<React.StrictMode>
		<Header />

		<div className="container">
			<main role="main" className="pb-3">
				<SimpleRouter />
			</main>
		</div>

		<Footer />

	</React.StrictMode>,
	document.getElementById('root')
);
