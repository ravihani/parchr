import React, { Component } from "react";
import { Row, Col } from "antd";

export class PageBanner extends Component {
constructor(props){
    super(props)
}

  render() {
    return (
      <div className="banner-outer">
        <div className="banner">
          <img
            src="https://careers.leidos.com/system/production/assets/122762/original/banner__overlay--page.png"
            className="banner__overlay banner__overlay--relative"
          />

          {/* <Row className="banner__breadcrumbs background-colored" gutter={[20, 20]}>
            <Col className="row">
              <div className="columns large-6 large-push-6 large-text-right space--medium">
                <br />
              </div>
              <div className="columns large-6 large-pull-6 space--medium">
                <a href="#">Home</a>&nbsp; / &nbsp;
                <a href="#">Careers</a>&nbsp; / &nbsp;
                <a href="#" id="back-to-search">
                  Job Search Results
                </a>
                &nbsp; / &nbsp;Software Developer
              </div>
            </Col>
            </Row> */}
            <Row className="banner__breadcrumbs background-colored"  >
            <Col  className="row">
                <h1>{this.props.title}</h1>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default PageBanner;
