import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const IsUserLoggedIn = ({ user, loggedInPath, children, location }) => {
  return !user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: loggedInPath,
        state: { from: location },
      }}
    />
  );
};

export default IsUserLoggedIn;

IsUserLoggedIn.propTypes = {
  user: PropTypes.object,
  loggedInPath: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
