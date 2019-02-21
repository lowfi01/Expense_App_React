import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const Login = (props) => {
  const onClick = () => {
    // props.history.push('/expense')
    props.startLogin();
  }
  return (
    <div>
      <button onClick={onClick} >Login</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
  })

export default connect(undefined, mapDispatchToProps)(Login);