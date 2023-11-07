import React from 'react'




const Jokes = ({ isFetching, error }) => {

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }

      if (isFetching) {
        return <h2>Fetching person for ya!</h2>;
      }

    return (

    )
}
