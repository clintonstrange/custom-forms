import React, { useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';

function DisplayData() {
    const [state, dispatch] = useStoreContext();
    const { forms } = state;

    const { loading, data: formData } = useQuery(QUERY_ME); //QUERY_ME needs to include forms, QUERY_ME_BASIC will have just standard info

    // useEffect(() => {

    // })

    return (
        
    );
}
