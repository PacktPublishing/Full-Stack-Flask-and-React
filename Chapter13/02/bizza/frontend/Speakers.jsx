import React, { useState, useEffect } from 'react'; 

import axios from 'axios';  

const Speakers = () => { 

  const [error, setError] = useState(null);  

  useEffect(() => { 

    axios.get('/api/v1/speakers') 

      .then(response => { 

        // handle success 

      })      .catch(error => { 

        switch (error.response.status) { 

           case 404: 

            setError('Resource not found.'); 

            break; 

           case 400: 

            setError('Bad request'); 

            break; 

          case 500: 

            setError('An internal server error occurred.'); 

            break; 

          default: 

            setError('An unexpected error occurred.'); 

            break; 

        } 

      }); 

  }, []);  

  return ( 

    <div> 

      {error ? <p>{error}</p> : <p>No error</p>} 

    </div> 

  ); 

};  

export default Speakers; 