import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker
// 		.register('/serviceWorker.js')
// 		.then(serviceWorker => {
// 			console.log('Service Worker registered: ', serviceWorker);
// 		})
// 		.catch(error => {
// 			console.error('Error registering the Service Worker: ', error);
// 		});
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register();
