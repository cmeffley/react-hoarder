import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './PrivateRoute';
import Home from '../views/Home';
import MyStuff from '../views/MyStuff';
import AddNew from '../views/AddNew';

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} />} />
        <PrivateRoute exact path="/myStuff"
          user={user}
          component={() => <MyStuff user={user} />} />
        <PrivateRoute exact path="/addNew"
          user={user}
          component={() => <AddNew user={user} />} />
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
};
export default Routes;
