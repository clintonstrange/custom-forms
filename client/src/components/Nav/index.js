import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.sidenav');
	Materialize.Sidenav.init(elems, {});
});

function Nav() {
	const loggedIn = Auth.loggedIn();
	const { data: userData } = useQuery(QUERY_ME);
	//console.log(userData);

	return (
		<>
			<div>
				{loggedIn && userData ? (
					<>
						<nav className='nav-wrapper blue darken-1'>
							<a href='/' className='brand-logo left margin-left'>
								Whatever Works 2.0
							</a>
							<a
								href='#!'
								data-target='mobile-demo'
								className='sidenav-trigger right'
							>
								<i className='material-icons'>menu</i>
							</a>
							<ul className='flex-row right hide-on-med-and-down'>
								<li className='mx-1'>
									<a href='/' onClick={() => Auth.logout()}>
										Logout
									</a>
								</li>
								<li>
									<Link to='/viewdata'>View Data</Link>
								</li>
								{userData?.me?.role === 'admin' ? (
									<li className='mx-1'>
										<a href='/signup'>Create Account</a>
									</li>
								) : null}
							</ul>
						</nav>

						<ul className='sidenav' id='mobile-demo'>
							<li className='mx-1'>
								<a href='/' onClick={() => Auth.logout()}>
									Logout
								</a>
							</li>
              <li>
									<Link to='/landing'>Forms</Link>
								</li>
							<li>
								<Link to='/viewdata'>View Data</Link>
							</li>
							{userData?.me?.role === 'admin' ? (
								<li className='mx-1'>
									<a href='/signup'>Create Account</a>
								</li>
							) : null}
						</ul>
					</>
				) : (
					<>
						<nav className='nav-wrapper blue darken-1'>
							<a href='/' className='brand-logo left margin-left'>
								Whatever Works 2.0
							</a>
							<a
								href='#!'
								data-target='mobile-demo'
								className='sidenav-trigger right'
							>
								<i className='material-icons'>menu</i>
							</a>
							<ul className='flex-row right hide-on-med-and-down'>
								<li className='mx-1'>
									<Link to='/login'>Login</Link>
								</li>
							</ul>
						</nav>

						<ul className='sidenav' id='mobile-demo'>
							<li className='mx-1'>
								<Link to='/login'>Login</Link>
							</li>
						</ul>
					</>
				)}
			</div>
		</>
	);
}

export default Nav;
