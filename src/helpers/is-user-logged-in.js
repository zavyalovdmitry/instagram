import PropTypes from 'prop-types';
import { Route, Redirect, Router } from 'react-router-dom';

export default function IsUserLoggedIn({ user, loggeInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggeInPath,
                state: { from: location }
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

IsUserLoggedIn.propTypes = {
  user: PropTypes.object,
  loggeInPath: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};
