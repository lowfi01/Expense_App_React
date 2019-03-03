// Lets redirect users who are not logged in to public paths

import React from 'react';
import {connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  console.log(`Public Path Route logic : ${isAuthenticated ? 'redirect to dash' : ' render login'} `);
  return (
    <Route {...rest} component={(props) => (
          isAuthenticated ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      )}/>
  )
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
  })

export default connect(mapStateToProps)(PublicRoute);