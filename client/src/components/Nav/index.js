import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<div class='nav-wrapper'>
					<a href='/' class='brand-logo center'>
						Whatever Works 2.0
					</a>
					<ul className='flex-row'>
						<li className='mx-1'>
							{/* this is not using the Link component to logout or user and then refresh the application to the start */}
							<a href='/' onClick={() => Auth.logout()}>
								Logout
							</a>
						</li>
					</ul>
				</div>
			);
		} else {
			return (
				<div class='nav-wrapper blue darken-2'>
					<a href='/' class='brand-logo center'>
						Whatever Works 2.0
					</a>
					<ul id='nav-mobile' className='flex-row right hide-on-med-and-down'>
						<li className='mx-1'>
							<Link to='/login'>Login</Link>
						</li>
						<li className='mx-1'>
							<Link to='/signup'>Create Account</Link>
						</li>
					</ul>
				</div>
			);
		}
	}

	return <nav>{showNavigation()}</nav>;
}

export default Nav;
