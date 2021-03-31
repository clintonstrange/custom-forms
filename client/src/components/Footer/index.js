import React from 'react';
import Auth from '../../utils/auth';
// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';

function Footer() {
	const loggedIn = Auth.loggedIn();
	const { data: userData } = useQuery(QUERY_ME);
	//console.log(userData);

	return (
		<div>
			{loggedIn && userData ? (
				<footer class='page-footer blue darken-1'>
					<div class='container'>
						<div class='row'>
							<div class='col l6 s12'>
								<h5 class='white-text'>Footer Content</h5>
								<p class='grey-text text-lighten-4'>
									You can use rows and columns here to organize your footer
									content.
								</p>
							</div>
							<div class='col l4 offset-l2 s12'>
								<h5 class='white-text'>Links</h5>
								<ul>
									<li>
										<a class='grey-text text-lighten-3' href='/'>
											Home
										</a>
									</li>
									<li>
										<a class='grey-text text-lighten-3' href='/landing'>
											Forms
										</a>
									</li>
									<li>
										<a class='grey-text text-lighten-3' href='#!'>
											View Data
										</a>
									</li>
									<li>
										<a class='grey-text text-lighten-3' href='#!'>
											Contact Us
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class='footer-copyright'>
						<div class='container'>© 2021 Whatever Works 2.0</div>
					</div>
				</footer>
			) : (
				<footer class='page-footer blue darken-1'>
					<div class='container'>
						<div class='row'>
							<div class='col l6 s12'>
								<h5 class='white-text'>Footer Content</h5>
								<p class='grey-text text-lighten-4'>
									You can use rows and columns here to organize your footer
									content.
								</p>
							</div>
							<div class='col l4 offset-l2 s12'>
								<h5 class='white-text'>Links</h5>
								<ul>
									<li>
										<a class='grey-text text-lighten-3' href='/'>
											Home
										</a>
									</li>
									<li>
										<a class='grey-text text-lighten-3' href='/login'>
											Login
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class='footer-copyright'>
						<div class='container'>© 2021 Whatever Works 2.0</div>
					</div>
				</footer>
			)}
		</div>
	);
}

export default Footer;
