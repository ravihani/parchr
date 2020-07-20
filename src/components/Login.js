import React, { Component, useReducer, PureComponent, useEffect } from "react";
import { PageHeader, Button, Avatar, Comment, Tooltip } from "antd";
import { GooglePlusOutlined } from "@ant-design/icons";
import { withAuth } from "./Authentication";
import Logout from "./Logout";
import { connect, useSelector, useDispatch } from "react-redux";
import { loginUserInfo } from "../redux/UserRdx/UserActions";
import { compose } from "redux";
import { withRouter } from "react-router";
import ApiHelper from "../helpers/ApiHelper";

export const Login = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { authUser, firebase } = props;
  //console.log(state, props);

  useEffect(() => {
    return () => {
      
    }
  }, [])

  return (
    <div className="container">
      {/* <small>You are running this application in <b>{process.env.REACT_APP_COMPANY}</b> mode.</small> */}
      <Button onClick={()=> getToken() }>Get Token</Button>
      <PageHeader title="Login" subTitle=" to post your request">
        {authUser ? (
          <React.Fragment>
            <Comment
              author={authUser.displayName}
              avatar={<Avatar src={authUser.photoURL} />}
              content={authUser.photoURL}
            />
            <Logout {...props} />
          </React.Fragment>
        ) : (
          <Button
            onClick={
              () =>
                props.firebase.signInWithGoogle().then((authUsr) => {
                  dispatch(loginUserInfo(authUsr.user));
                    props.history.push("/home")
                })
              //googleSignIn(props.firebase, dispatch)
            }
          >
            <GooglePlusOutlined /> Login
          </Button>
        )}
      </PageHeader>

    </div>
  );
};

// const googleSignIn = (fire, dispatch) => {
//   // fire.signInWithGoogle().then((authUser) => {
//   //   //const { displayName, email, photoURL, uid, _lat } = authUser.user;
//   //   //localStorage.setItem("authUser", JSON.stringify(authUser));
//   //   //dispatch(loginUserInfo());
//   //   //this.setState({ authUser });
//   // });
// };

// const mapStateToProps = (state) => {
//   console.log("mapState: ", state)
//   return {
//   loggedIn: state.loggedIn,
//   authUser: state.authUser,
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   console.log("mapDispatch: ", dispatch)

//   return {
//     loginUserInfo: () => dispatch(loginUserInfo()),
//   };
// };
// const composedRdxAndFire = compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withAuth
// );

const getToken = () => {
  console.log("Testing Yodlee")    
  let apiHelper = new ApiHelper();
  apiHelper.authenticate();


}


export default Login;
