import React, { useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';

function ViewData() {
    const [state, dispatch] = useStoreContext();
    const { forms } = state;

    const { loading, data: formData } = useQuery(QUERY_ME); //QUERY_ME needs to include forms, QUERY_ME_BASIC will have just standard info

    // useEffect(() => {

    // })

    return (
        <div>
            <h2>Here are the different form you've completed:</h2>
            {forms.map(item => {
                const container = {};

                container._id = item._id;
                container.symptoms = item.symptoms;
                container.contact = item.contact;
                container.positiveTest = item.positiveTest;
                container.travel = item.travel;

                return container;
            })}
        </div>
    );
}

export default ViewData;