import React from 'react';
import Auth from '../../utils/auth';
// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';

function Body() {
	const loggedIn = Auth.loggedIn();
	const { data: userData } = useQuery(QUERY_ME);
	//console.log(userData);

	return (
		<div>
			{loggedIn && userData ? (
				<div className='row body-display'>
					<div className='col s12 m4'>
						<div className='card'>
							<div className='card-image'>
								{/* image from https://www.oogazone.com/wp-content/uploads/2018/06/best-free-data-analysis-design-concept-vector-library.jpg */}
								<img
									src='https://static.vecteezy.com/system/resources/previews/000/547/940/original/data-analysis-illustration-vector.jpg'
									alt=''
								/>
								<span className='card-title'>Card Title</span>
							</div>
							<div className='card-content'>
								<p>
									I am a very simple card. I am good at containing small bits of
									information. I am convenient because I require little markup
									to use effectively.
								</p>
							</div>
							<div className='card-action'>
								<a href='/'>This is a link</a>
							</div>
						</div>
					</div>
					<div className='col s12 m4'>
						<div className='card'>
							<div className='card-image'>
								<img
									src='https://static.vecteezy.com/system/resources/previews/000/540/087/original/vector-analysis-word-lettering-illustration.jpg'
									alt=''
								/>
								<span className='card-title'>Card Title</span>
							</div>
							<div className='card-content'>
								<p>
									I am a very simple card. I am good at containing small bits of
									information. I am convenient because I require little markup
									to use effectively.
								</p>
							</div>

							<div className='card-action'>
								<a href='/'>This is a link</a>
							</div>
						</div>
					</div>
					<div className='col s12 m4'>
						<div className='card'>
							<div className='card-image'>
								<img
									src='https://static.vecteezy.com/system/resources/previews/000/547/754/non_2x/data-analysis-line-icons-illustration-vector.jpg'
									alt=''
								/>
								<span className='card-title'>Card Title</span>
							</div>
							<div className='card-content'>
								<p>
									I am a very simple card. I am good at containing small bits of
									information. I am convenient because I require little markup
									to use effectively.
								</p>
							</div>
							<div className='card-action'>
								<a href='/'>This is a link</a>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className='row body-display'>
					<div className='col s12 m4'>
						<div className='card'>
							<div className='card-image'>
								{/* image from https://www.oogazone.com/wp-content/uploads/2018/06/best-free-data-analysis-design-concept-vector-library.jpg */}
								<img
									src='https://static.vecteezy.com/system/resources/previews/000/547/940/original/data-analysis-illustration-vector.jpg'
									alt=''
								/>
								<span className='card-title'>Card Title</span>
							</div>
							<div className='card-content'>
								<p>
									I am a very simple card. I am good at containing small bits of
									information. I am convenient because I require little markup
									to use effectively.
								</p>
							</div>
							<div className='card-action'>
								<a href='/'>This is a link</a>
							</div>
						</div>
					</div>
					<div className='col s12 m4'>
						<div className='card'>
							<div className='card-image'>
								<img
									src='https://static.vecteezy.com/system/resources/previews/000/540/087/original/vector-analysis-word-lettering-illustration.jpg'
									alt=''
								/>
								<span className='card-title'>Card Title</span>
							</div>
							<div className='card-content'>
								<p>
									I am a very simple card. I am good at containing small bits of
									information. I am convenient because I require little markup
									to use effectively.
								</p>
							</div>

							<div className='card-action'>
								<a href='/'>This is a link</a>
							</div>
						</div>
					</div>
					<div className='col s12 m4'>
						<div className='card'>
							<div className='card-image'>
								<img
									src='https://static.vecteezy.com/system/resources/previews/000/547/754/non_2x/data-analysis-line-icons-illustration-vector.jpg'
									alt=''
								/>
								<span className='card-title'>Card Title</span>
							</div>
							<div className='card-content'>
								<p>
									I am a very simple card. I am good at containing small bits of
									information. I am convenient because I require little markup
									to use effectively.
								</p>
							</div>
							<div className='card-action'>
								<a href='/'>This is a link</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Body;
