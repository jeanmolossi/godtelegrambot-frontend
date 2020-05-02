import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import Groups from '~/pages/Groups';
import GroupOptions from '~/pages/GroupOptions';

import Products from '~/pages/Products';
import ProductOptions from '~/pages/ProductOptions';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registro" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/groups" component={Groups} isPrivate />
      <Route path="/group/:id/options" component={GroupOptions} isPrivate />

      <Route path="/products" component={Products} isPrivate />
      <Route path="/product/:id/options" component={ProductOptions} isPrivate />
    </Switch>
  );
}
