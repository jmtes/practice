import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // Above, `...rest` gathers all the props that are not the component prop into an object called `rest`.
  // These include computedMatch, exact, location, and path.
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <Route
      // This passes all the props that are not component to the Route.
      {...rest}
      render={props => {
        // If user is not logged in, redirect to login page.
        // If they are logged in, render the component with the route props.
        return !isAuthenticated && !loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PrivateRoute;
