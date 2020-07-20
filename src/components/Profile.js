import React, { Component, useReducer, PureComponent } from "react";
import { PageHeader, Button, Avatar, Comment, Tooltip } from "antd";
import { withAuth } from "./Authentication";
import { connect, useSelector, useDispatch } from "react-redux";
import Logout from "./Logout";

export const Profile = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  //console.log(state,props);

  return (
    <div className="container">
      <PageHeader title="Profile" subTitle=" ">
        {state.authUser ? (
          <React.Fragment>
            <Comment
              author={state.authUser.displayName}
              avatar={<Avatar src={state.authUser.photoURL} />}
              content={state.authUser.photoURL}
            />
            <Logout {...props} />

          </React.Fragment>
        ) : (
          <div></div>
        )}
      </PageHeader>
    </div>
  );
};

export default Profile;
