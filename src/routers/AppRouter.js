import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


import ExpenseDashBoard from '../components/ExpenseDashBoard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';


const NextPage = (props) => <div> <h3>Page Underconstruction</h3> </div>;


const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Header />
    <Switch>
      <Route exact path="/" component={ExpenseDashBoard}/>
      <Route path="/expense" component={ExpenseDashBoard} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/create" component={AddExpensePage}/>
      <Route component={NextPage} />
    </Switch>
    </div>
  </BrowserRouter>
);


export default AppRouter;