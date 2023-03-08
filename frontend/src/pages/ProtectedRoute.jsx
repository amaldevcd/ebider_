import React from 'react';
import { Route } from 'react-router-dom'; //Redirect
// import { useUserContext } from '../context/user_context'
import { useAuth } from '../context/AuthProvider';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <></>//<Redirect to='/'></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;
