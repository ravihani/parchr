import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Drawer, Menu} from 'antd'
import App from "../App";
import Search from "./Search";
import Post from "./Post";
import Signup from "./Signup";
import Login from "./Login";
import Landing from "./Landing";

export class AppRoutes extends Component {

  render() {
    return (
      <Router>
        <Drawer
          width="50%"
          onClose={this.props.onClose}
          visible={this.props.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Menu>
            <Menu.Item>
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/search">Search</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/post">Post</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/signup">Register</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/login">Login</NavLink>
            </Menu.Item>
          </Menu>
        </Drawer>
        <Route path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route path="/post" component={Post} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Router>
    );
  }
}

export default AppRoutes;
