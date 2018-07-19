import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const router = (
  <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);
