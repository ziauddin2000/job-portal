import { useContext } from "react";
import AuthContext from "../AuthProvider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let { user, loading } = useContext(AuthContext);
  let location = useLocation();

  if (loading) {
    return (
      <div className="py-10 text-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
