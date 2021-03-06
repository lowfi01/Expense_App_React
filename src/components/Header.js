import React from 'react';
import ReactGA from 'react-ga';
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
        <button className="button button--link" onClick={ () => {
          ReactGA.event({
            category: 'User',
            action: 'Logout',
            label: 'User has Logged out',
            dimension5: 'testing5'
          });
          props.startLogout();
          }}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
