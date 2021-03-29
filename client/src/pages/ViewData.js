import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SCREENINGS } from '../utils/queries';
import Auth from "../utils/auth";
// import { idbPromise } from '../utils/helpers';

function ViewData() {
    const loggedIn = Auth.loggedIn();
    const { loading, error, data } = useQuery(QUERY_SCREENINGS); //QUERY_ME needs to include forms, QUERY_ME_BASIC will have just standard info

    if (!data) {
        return <div>No forms have been filled out.</div>
    }
    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        console.error(error);
        return <div>Error!</div>
    }
    return (
        <div className="container">
            {loggedIn &&
                <div>
                    <h2>Here are the different forms you've completed:</h2>
                    <div className="row">
                        {data.screenings.map((screening) => (
                            <div className="col s12 m4">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">{screening.control}</span>
                                        <p>Screening Id:{screening._id}</p>
                                        <p>Patient symptoms:{screening.symptoms}</p>
                                        <p>Contact with others:{screening.contact}</p>
                                        <p>Positive covid test:{screening.positiveTest}</p>
                                        <p>Patient travelled:{screening.travel}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default ViewData;