<<<<<<< HEAD
import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";
import Form from "../components/Form";
import Footer from "../components/Footer";
=======
import React from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import Form from '../components/Form';
>>>>>>> jake/styleupdates

const Landing = () => {
	const loggedIn = Auth.loggedIn();
	const { data: userData } = useQuery(QUERY_ME);

<<<<<<< HEAD
  return (
    <div>
      <div className="form-container">
        {loggedIn && userData ? (
          <div>
            {/* <p>
=======
	return (
		<>
			<div className='fit'>
				<div className='form-container'>
					{loggedIn && userData ? (
						<div>
							{/* <p>
>>>>>>> jake/styleupdates
							Welcome <span>{userData?.me?.username}</span>
						</p>
						<p>
							Authorization: <span>{userData?.me?.role.toUpperCase()}</span>
						</p> */}
<<<<<<< HEAD
            <h3 className="center-align">COVID Screening Form</h3>
            <div>
              {userData?.me?.role === "admin" ? (
                <div>
                  <Form />
                </div>
              ) : userData?.me?.role === "read/write" ? (
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
      <div className="form-footer">
        <Footer />
      </div>
    </div>
  );
=======
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
>>>>>>> jake/styleupdates
};

export default Landing;
