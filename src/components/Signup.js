import React, { Component, Fragment } from "react";
import { PageHeader, Button } from "antd";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <PageHeader title="Signup" subTitle=" "></PageHeader>
        </div>
      </Fragment>
    );
  }
}

export default Signup;
