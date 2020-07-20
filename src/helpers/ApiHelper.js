import React, { Component } from "react";
import { AppConfig } from "./AppConfig";
import Axios from "axios";

export class ApiHelper extends Component {
  constructor(props) {
    super(props);

    let config = AppConfig.development;

    this.Yodlee = Axios.create({
      // baseURL: config.YODLEE_API_Endpoint,
      headers: {
          post: {
            "Api-Version": config.YODLEE_Version,
            "Content-Type": "application/x-www-form-urlencoded",
            loginName: "sbMem5f14e9a59430a1",
        clientId: config.YODLEE_ClientID,
        secret: config.YODLEE_ClientSecret,
    },
        },
    });
    this.state = {
      config: config,
    };
  }

  authenticate() {
    console.log(this.state.config.YODLEE_ClientID);
    console.log(this.state.config.YODLEE_ClientSecret);
    var data = {
      clientId: this.state.config.YODLEE_ClientID,
      secret: this.state.config.YODLEE_ClientSecret,
    };
    const result = this.Yodlee.post(
      `${this.state.config.YODLEE_API_Endpoint}/auth/token`,
      `clientId=${this.state.config.YODLEE_ClientID}&secret=${this.state.config.YODLEE_ClientSecret} `,
    //   { params: data }
    )
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(result);
  }

  render() {
    return <div></div>;
  }
}

export default ApiHelper;
