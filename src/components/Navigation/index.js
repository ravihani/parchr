import React, { Component, Fragment } from "react";
import { AuthContext, withAuth } from "../Authentication";
import { LoginOutlined } from "@ant-design/icons";
import { Button, Avatar, Menu, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import { SIGNUP, HOME, SEARCH, POST, PROFILE, LOGIN } from "./Routes";

const Navigation = (props) => (
  <AuthContext.Consumer>
    {(authUser) =>
      authUser ? (
        <AuthenticatedUserMenu user={authUser} {...props} />
      ) : (
        <AnonymusUser user={authUser} {...props} />
      )
    }
  </AuthContext.Consumer>
);

const AuthenticatedUserMenu = (props) => (
  <div className="header3-menu">
    <Menu mode="horizontal">
      <Menu.Item>
        <NavLink to={HOME} style={{ paddingRight: 20 }}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to={SEARCH} style={{ paddingRight: 20 }}>
          Search
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to={POST} style={{ paddingRight: 20 }}>
          Post
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to={PROFILE} style={{ paddingRight: 20 }}>
          <span style={{ paddingRight: 10 }}> {props.user.displayName} </span>
          <Avatar src={props.user.photoURL} style={{ height: 32 }}></Avatar>
        </NavLink>
      </Menu.Item>
    </Menu>
    <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
            >
              <div>Authenticated</div>
            </Drawer>
  </div>
);

const AnonymusUser = (props) => (
  <div className="header3-menu">
    <Menu mode="horizontal">
      <Menu.Item>
        <NavLink
          to={SIGNUP}
          style={{ paddingRight: 20 }}
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          Signup
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink
          to={LOGIN}
          style={{ paddingRight: 20 }}
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          <LoginOutlined /> Login
        </NavLink>
      </Menu.Item>
      {/* <MenuOutlined onClick={this.showDrawer} /> */}
    </Menu>
    <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
            >
              <div>Anonymus</div>
            </Drawer>
  </div>
);

export default Navigation;

// export class RootMenu extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       visible: false,
//     };
//   }

//   showDrawer = () => {
//     console.log(this.state);
//     this.setState(
//       {
//         visible: true,
//       },
//       console.log(this.state)
//     );
//   };

//   onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     return (
//       <Fragment>
//         <Row>
//           <Col className="gutter-row" span={3}>
//             <img src={logo} style={{ height: 70 }} />
//           </Col>
//           <Col className="gutter-row" span={11}></Col>
//           <Col
//             className="gutter-row"
//             span={9}
//             style={{
//               textAlign: "center",
//               alignSelf: "center",
//               alignItems: "center",
//             }}
//           >
//             <a href="/search" style={{ paddingRight: 20 }}>
//               Search
//             </a>
//             <a href="/Post" style={{ paddingRight: 20 }}>
//               Post
//             </a>
//             <a href="/Register" style={{ paddingRight: 20 }}>
//               Register
//             </a>
//             <a href="/login" style={{ paddingRight: 20 }}>
//               Login
//             </a>
//             <LoginOutlined style={{ paddingRight: 20 }} />
//             <MenuOutlined onClick={this.showDrawer} />
//           </Col>
//         </Row>
//         <Router>
//           <Drawer
//             width="70%"
//             onClose={this.onClose}
//             visible={this.state.visible}
//             bodyStyle={{ paddingBottom: 80 }}
//           >
//             <Menu>
//               <Menu.Item>
//                 <NavLink to="/">Home</NavLink>
//               </Menu.Item>
//               <Menu.Item>
//                 <NavLink to="/search">Search</NavLink>
//               </Menu.Item>
//               <Menu.Item>
//                 <NavLink to="/post">Post</NavLink>
//               </Menu.Item>
//               <Menu.Item>
//                 <NavLink to="/signup">Register</NavLink>
//               </Menu.Item>
//               <Menu.Item>
//                 <NavLink to="/login">Login</NavLink>
//               </Menu.Item>
//             </Menu>
//           </Drawer>
//           <Route path="/" component={Landing} />
//           <Route path="/search" component={Search} />
//           <Route path="/post" component={Post} />
//           <Route path="/signup" component={Signup} />
//           <Route path="/login" component={Login} />
//         </Router>
//       </Fragment>
//     );
//   }
// }

// export default withFirebase(RootMenu);
