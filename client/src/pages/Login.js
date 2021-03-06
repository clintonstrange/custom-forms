import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
	const [formState, setFormState] = useState({
		email: '',
		password: ''
	});
	const [login, { error }] = useMutation(LOGIN);

	const handleFormSubmit = async event => {
		event.preventDefault();
		try {
			const mutationResponse = await login({
				variables: {
					email: formState.email,
					password: formState.password
				}
			});
			const token = mutationResponse.data.login.token;
			Auth.login(token);
			console.log(mutationResponse);
			console.log(token);
		} catch (e) {
			console.log(e);
		}
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value
		});
	};

	return (
		<>
			<div className='fit login-parent'>
				<div className='my-1'>
					<div id='card-custom'>
						<h5 className='center-align'>Welcome to whatever works!</h5>
						<form onSubmit={handleFormSubmit}>
							<div className='flex-row space-between my-2'>
								<label htmlFor='email'>Email address:</label>
								<input
									name='email'
									type='email'
									id='email'
									onChange={handleChange}
								/>
							</div>
							<div className='flex-row space-between my-2'>
								<label htmlFor='pwd'>Password:</label>
								<input
									placeholder='******'
									name='password'
									type='password'
									id='pwd'
									onChange={handleChange}
								/>
							</div>

							{error ? (
								<div>
									<p className='error-text'>
										The provided credentials are incorrect
									</p>
								</div>
							) : null}
							<div className='flex-row center-align'>
								<button
									type='submit'
									className='waves-effect waves-light btn blue darken-1 login-btn'
								>
									<i className='material-icons center'>send</i>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
