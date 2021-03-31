import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorkerRegistration';

let deferredPrompt; // Allows to show the install prompt
const installButton = document.getElementById('install_button');

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register();
