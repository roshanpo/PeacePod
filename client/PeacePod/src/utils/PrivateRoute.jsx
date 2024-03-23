
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ Component }) => {
 
  let {user} = useContext(AuthContext);
 // Your authentication logic goes here...
 
  return user ? <Component /> : <Navigate to="/signin" />;
};
export default PrivateRoute;
