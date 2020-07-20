import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import { withAuth, AuthContext } from "./components/Authentication";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "antd/lib/input/Search";
import Post from "./components/Post";
import Signup from "./components/Signup";
import { Login } from "./components/Login";
import { Row, Col } from "antd";
import logo from "./logo.png";
import { Provider } from "react-redux";
import { AppStore } from "./redux/AppStore";
import { withFirebase } from "./components/Firebase";
import Profile from "./components/Profile";
import Home from "./components/Home";
import ProtectedRoute from "./components/Navigation/ProtectedRoute";

const App = (props) => (
  // <AuthContext.Consumer>
  //   {
  //   (authUser) =>{
  //     console.log(props)
  //     return (
  <Router>
    <div>
      <Row className="header3">
        <Col className="gutter-row " span={3}>
          <div className="header3-logo">
            <img src={logo}  style={{ height: 55, padding:10 }} />
          </div>
        </Col>
        <Col className="gutter-row" span={3}></Col>
        <Col
          className="gutter-row"
          span={17}
          style={{
            textAlign: "right",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Navigation {...props} />
        </Col>
      </Row>
      <Route path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <ProtectedRoute path="/search" component={Search} {...props} />
      <ProtectedRoute path="/post" component={Post} {...props} />
      <Route path="/signup" component={Signup} />
      <ProtectedRoute path="/profile" component={Profile} {...props} />
      <Route
        path="/login"
        render={(prp) => <Login firebase={props.firebase} {...prp} />}
      />
    </div>
  </Router>
  //   )
  //         }
  //   }
  // </AuthContext.Consumer>
);

export default withAuth(App);
