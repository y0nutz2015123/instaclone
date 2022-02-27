import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const ProtectedRoute = ({ user, children, location }) => {
  return user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: ROUTES.LOGIN,
        state: { from: location },
      }}
    />
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
};
