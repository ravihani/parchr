import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { loginUserInfo } from "../../redux/UserRdx/UserActions";
import { connect } from "react-redux";
import { compose } from "redux";

export const AuthContext = React.createContext();

const withAuth = (WrappedComponent) => {
  class WithAuth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn : props.loggedIn, 
        authUser: props.authUser //JSON.parse(localStorage.getItem("authUser")),
      };

    }

    componentDidMount() {
    
      // this.authListener = this.props.firebase.onAuthListener(
      //   (authUser) => {
      //     console.log("i am here")
      //     debugger
      //     localStorage.setItem("authUser", JSON.stringify(authUser));
      //     this.setState({ authUser });
      //   },
      //   () => {
      //     localStorage.removeItem("authUser");
      //     this.setState({ authUser: null });
      //   }
      // );
    }

    componentWillUnmount() {
      //this.authListener();
    }

    render() {
      return (
        <AuthContext.Provider value={this.props.authUser}>
          <WrappedComponent   {...this.props} />
        </AuthContext.Provider>
      );
    }
  }

  return compose(connect(mapStateToProps, mapDispatchToProps), withFirebase)(WithAuth);
};

const mapStateToProps = (state) => {
  //console.log("mapState: ", state)
  return {
  loggedIn: state.loggedIn,
  authUser: state.authUser,
  }
};

const mapDispatchToProps = (dispatch) => {
  //console.log("mapDispatch: ", dispatch)

  return {
    loginUserInfo: () => dispatch(loginUserInfo()),
  };
};

export default (withAuth);
