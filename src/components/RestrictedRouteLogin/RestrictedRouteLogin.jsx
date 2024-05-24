import { useAuthHook } from '../../customHook/customHook';
//import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRouteLogin = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuthHook();
  /*const { user } = useAuthHook();

    useEffect(() => {
      if (user.name !== null && user.email !== null) {
        
      }
    }, [user]);*/

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
