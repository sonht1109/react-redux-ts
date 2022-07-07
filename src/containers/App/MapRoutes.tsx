import React from 'react';
import { Route } from 'react-router-dom';
import routes from 'utils/routes';

export default function MapRoutes() {
  return (
    <>
      {React.Children.toArray(
        routes.map(r => (
          <Route exact path={r.path}>
            {r.component}
          </Route>
        )),
      )}
    </>
  );
}
