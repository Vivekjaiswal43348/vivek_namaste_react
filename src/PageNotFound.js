import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const routeErr = useRouteError();
  console.log("routeErr:", routeErr);
  return (
    <div style={{textAlign: 'center'}}>
        <h1>Hmm, it looks like you are trying to access the page not available</h1>
        <h4 style={{color: 'red'}}>{`Error message: ${routeErr.error.message}`}</h4>
        <h4>{`Error status: ${routeErr.statusText}`}</h4>
    </div>
  )
}

export default ErrorPage