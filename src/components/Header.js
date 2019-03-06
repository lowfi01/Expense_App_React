import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = (props) => (

  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard" activeClassName="is-active">
          <h1>Expensify</h1>
        </Link>
        <button onClick={props.startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
