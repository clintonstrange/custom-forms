import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';

function Nav() {
	const loggedIn = Auth.loggedIn();
	const { data: userData } = useQuery(QUERY_ME);

	function showNavigation() {
		if (loggedIn && userData) {
			return (
				<div className='nav-wrapper blue darken-1'>
					<a href='/' class='brand-logo left'>
						Whatever Works 2.0
					</a>
					<ul className='flex-row right'>
						<li className='mx-1'>
							<a href='/' onClick={() => Auth.logout()}>
								Logout
							</a>
						</li>
						<li className='margin-right'>DATA RENDERING LINK HERE</li>
						{userData.me.role === 'admin' ? (
							<div>
								<li className='mx-1'>
									<a href='/signup'>Create Account</a>
								</li>
							</div>
						) : null}
					</ul>
				</div>
			);
		} else {
			return (
				<div className='nav-wrapper blue darken-1'>
					<a href='/' class='brand-logo left margin-left'>
						Whatever Works 2.0
					</a>
					<ul className='flex-row right'>
						<li className='mx-1'>
							<Link to='/login'>Login</Link>
						</li>
					</ul>
				</div>
			);
		}
	}

	return <nav>{showNavigation()}</nav>;
}

export default Nav;
