import React, { Component } from "react";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { withFirebase } from "./Firebase";
import { logoutUserInfo } from "../redux/UserRdx/UserActions";
import { useSelector, useDispatch } from "react-redux";

const Logout = (props) => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(state, props)
  return (
    <div>
      <Button
        onClick={() => {
          console.log(props);
          props.firebase.signOut();
          dispatch(logoutUserInfo())
          props.history.push("/home")
        }}
      >
        <LogoutOutlined /> Logout
      </Button>
    </div>
  );
};

export default withFirebase(Logout);
