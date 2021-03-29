import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SCREENINGS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

function ViewData() {
    const [screeningData, setScreeningData] = useState();

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
        <div>
            <h2>Here are the different forms you've completed:</h2>
            <div className="row">
                {data.screenings.map((screening) => (
                    <div className="col s12 m2">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text" key={screening._id}>
                                <span className="card-title">{screening.control}</span>
                                <p>{screening.symptoms}</p>
                                <p>{screening.contact}</p>
                                <p>{screening.positiveTest}</p>
                                <p>{screening.travel}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewData;