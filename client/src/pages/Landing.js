import React from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import Form from '../components/Form';

const Landing = () => {
	const loggedIn = Auth.loggedIn();
	const { data: userData } = useQuery(QUERY_ME);

	return (
		<>
			<div className='fit'>
				<div className='form-container'>
					{loggedIn && userData ? (
						<div>
							{/* <p>
							Welcome <span>{userData?.me?.username}</span>
						</p>
						<p>
							Authorization: <span>{userData?.me?.role.toUpperCase()}</span>
						</p> */}
							<h3 className='center-align'>COVID Screening Form</h3>
							<div>
								{userData?.me?.role === 'admin' ? (
									<div>
										<Form />
									</div>
								) : userData?.me?.role === 'read/write' ? (
									<div>
										<Form />
									</div>
								) : (
									<div>
										<p>
											if logged in and user does not have admin or read/write
											access, default to read only access
										</p>
									</div>
								)}
							</div>
						</div>
					) : (
						<h3>Please Login to Access your Forms!</h3>
					)}
				</div>
			</div>
		</>
	);
};

export default Landing;
