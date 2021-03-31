import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Signup from './pages/Signup';
import Landing from './pages/Landing';

let deferredPrompt; // Allows to show the install prompt
const installButton = document.getElementById('install_button');

const client = new ApolloClient({
	request: operation => {
		const token = localStorage.getItem('id_token');
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : ''
			}
		});
	},
	uri: '/graphql'
});

window.addEventListener('appinstalled', evt => {
	console.log('appinstalled fired', evt);
});

//  intercept the beforeinstallprompt event which is fired when the PWA meets to install criteria. In this event event handler, we need to keep a reference to the event and show the install button.
window.addEventListener('beforeinstallprompt', e => {
	console.log('beforeinstallprompt fired');
	// Prevent Chrome 76 and earlier from automatically showing a prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	deferredPrompt = e;
	// Show the install button
	installButton.hidden = false;
	installButton.addEventListener('click', installApp);
});

// listen for the app installed event to perform any additional setup when the install finished
window.addEventListener('appinstalled', evt => {
	console.log('appinstalled fired', evt);
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div>
					<StoreProvider>
						<Nav />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/signup' component={Signup} />
							<Route exact path='/landing' component={Landing} />
							<Route component={NoMatch} />
						</Switch>
					</StoreProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}

// function that shows the install prompt
function installApp() {
	// Show the prompt
	deferredPrompt.prompt();
	installButton.disabled = true;

	// Wait for the user to respond to the prompt
	deferredPrompt.userChoice.then(choiceResult => {
		if (choiceResult.outcome === 'accepted') {
			console.log('PWA setup accepted');
			installButton.hidden = true;
		} else {
			console.log('PWA setup rejected');
		}
		installButton.disabled = false;
		deferredPrompt = null;
	});
}

export default App;
