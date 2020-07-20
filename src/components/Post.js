import React, { Component } from "react";
import { PageHeader } from "antd";

export class Post extends Component {
  render() {
    return (
      <div className="container">
        <PageHeader title="Post" subTitle=" your trip"></PageHeader>
      </div>
    );
  }
}

export default Post;
