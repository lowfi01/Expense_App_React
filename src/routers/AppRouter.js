import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ExpenseDashBoard from '../components/ExpenseDashBoard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Login from '../components/Login';
import Header from '../components/Header';

// createHistory
export const history = createHistory();

const NotFoundPage = (props) => <div> <h3>Page Underconstruction</h3> </div>;

const AppRouter = () => (
  <Router history={history}>
    <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/dashboard" component={ExpenseDashBoard} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/create" component={AddExpensePage}/>
      <Route component={NotFoundPage} />
    </Switch>
    </div>
  </Router>
);


export default AppRouter;