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
            <h2>Here are the different form you've completed:</h2>
            {data.map((screening, index) => (
                <div key={index}>
                    <h4>{screening.control}</h4>
                    <p>{screening.symptoms}</p>
                    <p>{screening.contact}</p>
                    <p>{screening.positiveTest}</p>
                    <p>{screening.travel}</p>
                </div>
            ))}
        </div>
    );
}

export default ViewData;