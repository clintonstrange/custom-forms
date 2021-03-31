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
				<footer className='page-footer blue darken-1'>
					<div className='container'>
						<div className='row'>
							<div className='col l6 s12'>
								<h5 className='white-text'>Footer Content</h5>
								<p className='grey-text text-lighten-4'>
									You can use rows and columns here to organize your footer
									content.
								</p>
							</div>
							<div className='col l4 offset-l2 s12'>
								<h5 className='white-text'>Links</h5>
								<ul>
									<li>
										<a className='grey-text text-lighten-3' href='/'>
											Home
										</a>
									</li>
									<li>
										<a className='grey-text text-lighten-3' href='/landing'>
											Forms
										</a>
									</li>
									<li>
										<a className='grey-text text-lighten-3' href='#!'>
											View Data
										</a>
									</li>
									<li>
										<a className='grey-text text-lighten-3' href='#!'>
											Contact Us
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='footer-copyright'>
						<div className='container'>© 2021 Whatever Works 2.0</div>
					</div>
				</footer>
			) : (
				<footer className='page-footer blue darken-1'>
					<div className='container'>
						<div className='row'>
							<div className='col l6 s12'>
								<h5 className='white-text'>Footer Content</h5>
								<p className='grey-text text-lighten-4'>
									You can use rows and columns here to organize your footer
									content.
								</p>
							</div>
							<div className='col l4 offset-l2 s12'>
								<h5 className='white-text'>Links</h5>
								<ul>
									<li>
										<a className='grey-text text-lighten-3' href='/'>
											Home
										</a>
									</li>
									<li>
										<a className='grey-text text-lighten-3' href='/login'>
											Login
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='footer-copyright'>
						<div className='container'>© 2021 Whatever Works 2.0</div>
					</div>
				</footer>
			)}
		</div>
	);
}

export default Footer;
