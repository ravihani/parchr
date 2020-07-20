import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { LOGIN } from "./Routes";

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
    // console.log(loggedIn)
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => (
        loggedIn ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={LOGIN}
            // to={{
            //   pathname: { LOGIN },
            //   state: { prevLocation: path, error: "Login to access the page." },
            // }}
          />
        )
      )} 
    />
  );
};

export default ProtectedRoute;
