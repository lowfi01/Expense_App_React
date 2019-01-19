// Higher Order Component (HOC) - a component that renders another component
// - we are able to reuse code
// - use render hijacking
// - use prop manipulation
// - abstract state


import React from 'react';
import ReactDom from 'react-dom';

// Basic Component
const Info = (props) => (
    <div>
      <h1>Info</h1>
      <p>This is info: {props.info}</p>
    </div>
  )

// Higher order component
// Argument passed is the component we want to wrap
// We return a new component that includes the wrapped component
const withAdminWarning = (WrappedComponent) => {
  console.log('');
  return (props) => (
     <div>
      { props.isAdmin && <p>This is private info</p> }
      <WrappedComponent {...props}/>
      {
        // use spread operation to add all keyvalue pairs as attributes to the component
        // Now our wrapped component will have access to he info string I passed
      }
    </div>
  )
};


const AdminInfo = withAdminWarning(Info); // Pass the component & receive a new Component + data from the HOC


// Higher Order Component
const requireAuthentication = (WrappedComponent) => (props) =>  (
    <div>
     <h1>Authenticationed</h1>
      {props.isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
          <p>Please login to view info </p>
        )}
    </div>
  )


const AuthInfo = requireAuthentication(Info);


// ReactDom.render( <AdminInfo isAdmin={true} info="This is some random info" />, document.getElementById('app') );
ReactDom.render( <AuthInfo isAuthenticated={false} info="This is some random info" />, document.getElementById('app') );
