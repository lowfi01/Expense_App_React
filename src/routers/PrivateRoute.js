// lets render the routes that only logged in users can use

import React from 'react'
import { connect } from 'react-redux'; // we need to user redux store
import { Route, Redirect } from 'react-router-dom'; // we need to route users

import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest  // this will contain everything we did not destructor
}) => {
  console.log(`Private Path Route logic : ${isAuthenticated ? 'Render component' : 'Redirecting to login'} `);
  return <Route {...rest} component={(props) => (
    isAuthenticated ? (
          <div>
            <Header />
            <Component {...props}/>
          </div>
        ) : (
          <Redirect to="/" />
        )
  )} />
}

// // this will return the route me want
// export const PrivateRoute = (props) => {
//   console.log('PrivateRoute props: ', props);
//   return <Route {...props}/>
// }

// lets pull the auth uid and store it as a boolean
const mapStateToProps = (state) => ({
    // as state.auth.uid is undefined we need a boolean so we will use !! twice
    isAuthenticated: !!state.auth.uid
  })

export default connect(mapStateToProps)(PrivateRoute);