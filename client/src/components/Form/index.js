import React from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import AdminForm from '../AdminForm';
// import { idbPromise } from "../utils/helpers"

const Form = () => {
	const loggedIn = Auth.loggedIn();
	const { data: userData } = useQuery(QUERY_ME);

	return (
		<div className='container'>
			{loggedIn && userData ? (
				<div>
					<h2 className='center-align'>COVID Screening Form</h2>
					<p>
						Welcome <span>{userData.me.username}</span>
					</p>
					<p>
						Authorization: <span>{userData.me.role.toUpperCase()}</span>
					</p>
					<div>
						{userData.me.role === 'admin' ? (
							<div>
								<p>admin render Check</p>
								<AdminForm />
							</div>
						) : userData.me.role === 'read/write' ? (
							<div>
								<p>read/write render check</p>
								<AdminForm />
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
				<div>
					<h4 className='center-align welcome-header'>
						Created to capture all of your data input needs!
					</h4>
					<br></br>
					<br></br>
					<div class='row'>
						<div class='col s12 m4'>
							<div class='card'>
								<div class='card-image'>
									{/* image from https://www.oogazone.com/wp-content/uploads/2018/06/best-free-data-analysis-design-concept-vector-library.jpg */}
									<img
										src='https://static.vecteezy.com/system/resources/previews/000/547/940/original/data-analysis-illustration-vector.jpg'
										alt=''
									/>
									<span class='card-title'>Card Title</span>
								</div>
								<div class='card-content'>
									<p>
										I am a very simple card. I am good at containing small bits
										of information. I am convenient because I require little
										markup to use effectively.
									</p>
								</div>
								<div class='card-action'>
									<a href='#'>This is a link</a>
								</div>
							</div>
						</div>
						<div class='col s12 m4'>
							<div class='card'>
								<div class='card-image'>
									<img
										src='https://static.vecteezy.com/system/resources/previews/000/540/087/original/vector-analysis-word-lettering-illustration.jpg'
										alt=''
									/>
									<span class='card-title'>Card Title</span>
								</div>
								<div class='card-content'>
									<p>
										I am a very simple card. I am good at containing small bits
										of information. I am convenient because I require little
										markup to use effectively.
									</p>
								</div>

								<div class='card-action'>
									<a href='#'>This is a link</a>
								</div>
							</div>
						</div>
						<div class='col s12 m4'>
							<div class='card'>
								<div class='card-image'>
									<img
										src='https://static.vecteezy.com/system/resources/previews/000/547/754/non_2x/data-analysis-line-icons-illustration-vector.jpg'
										alt=''
									/>
									<span class='card-title'>Card Title</span>
								</div>
								<div class='card-content'>
									<p>
										I am a very simple card. I am good at containing small bits
										of information. I am convenient because I require little
										markup to use effectively.
									</p>
								</div>
								<div class='card-action'>
									<a href='#'>This is a link</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Form;
