
import { Navigate, Outlet } from "react-router-dom";
import useAuth from '../hooks/useAuth'
import { useLocation } from "react-router-dom";

const PrivateRoute = () => {
 const location = useLocation();
  let {user} = useAuth();
 
  return user ? <Outlet /> :
   <Navigate to="/signin" state={{from: location}} replace />;
};
export default PrivateRoute;
