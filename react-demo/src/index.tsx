import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './index.css';

ReactDOM.render(
	<React.StrictMode>

		<header>
			<nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
				<div className="container">
					<a className="navbar-brand" href="/">Home</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
						<ul className="navbar-nav flex-grow-1">

							<div className="nav-item dropdown">
								<li>
									<a className="nav-link text-dark" href="/Groups">Groups</a>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</nav>
		</header>

		<div className="container">
			<main role="main" className="pb-3">
				<div className="text-center">
					<h1 className="display-4">Hello, React</h1>
				</div>
			</main>
		</div>

		<footer className="border-top footer text-muted">
			<div className="container">
				&copy; 2021 - React Demo
    		</div>
		</footer>

	</React.StrictMode>,
	document.getElementById('root')
);
