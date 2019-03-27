import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const Login = (props) => {
  const onClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Login',
      label: 'User has logged in'
    });
    // props.history.push('/expense')
    props.startLogin();
  }

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify App</h1>
        <p>Its time to get your expenses under control.</p>
        <button className="button" onClick={onClick} >Login with Google</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
  })

export default connect(undefined, mapDispatchToProps)(Login);