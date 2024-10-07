import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  const isAuthenticated = true;
  return isAuthenticated;
};

const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
