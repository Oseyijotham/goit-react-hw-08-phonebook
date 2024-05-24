import { useAuthHook } from '../../customHook/customHook';
//import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRouteRegister = ({ component: Component, redirectTo = '/' }) => {
  const { isRegistered } = useAuthHook();
  /*const { user } = useAuthHook();

    useEffect(() => {
      if (user.name !== null && user.email !== null) {
        
      }
    }, [user]);*/

  return isRegistered ? <Navigate to={redirectTo} /> : Component;
};
