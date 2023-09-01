import React, { useState, useEffect } from 'react'; 

import axios from 'axios'; 

import ErrorPage from './ErrorPage'; 

  

const Speakers= () => { 

    const [error, setError] = useState(null); 

  

    useEffect(() => { 

        axios.get('/api/v1/speakers') 

            .then(response => { 

                // handle success 

            }) 

            .catch(error => { 

                setError(error.response.data.error); 

            }); 

    }, []); 

  

    if (error) { 

        return <ErrorPage error={error} />; 

    } 

  

    return ( 

        // rest of your application 

    ); 

}; 

  

export default Speakers; 