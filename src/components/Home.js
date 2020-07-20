import React, { Fragment, useState } from "react";
import { Card, Row, Col, PageHeader, Avatar, Divider } from "antd";
import NewsSources from "../data/Sources.json";
import { List } from "antd/lib/form/Form";
import Meta from "antd/lib/card/Meta";
import Axios from "axios";

const Home = (props) => {
  const [News, setNews] = useState([]);
  const [status, setStatus] = useState({ loading: false });

  return (
    <Fragment>
      <div className="Page-wrapper banner">
        <div className="Page banner-page">
          <div className="banner-title-wrapper" data-edit="childWrapper">
            <h1 name="title" className="banner-title" style={{ opacity: 1, transform: `translate(10px, 10px)`  }}>
              <span>
                <span>
                  <span>
                    <p>Parchr</p>
                  </span>
                </span>
              </span>
            </h1>
            <div
              name="explain"
              className="banner-explain"
              style={{ opacity: 1 }}
            >
              <span>
                <span>
                  <p>Turn your credentials into opportunities</p>
                </span>
              </span>
            </div>
            <div
              name="content"
              className="banner-content"
              style={{ opacity: 1 }}
            >
              <span>
                <span>
                  <p>
                    Detailed description of the product, such as what is the
                    text
                  </p>
                </span>
              </span>
            </div>
            <div
              name="button"
              className="banner-button-wrapper"
              style={{ opacity: 1 }}
            >
              <a
                href="#"
                data-edit="link,text"
                className="ant-btn banner-button ant-btn-primary"
              >
                <span>
                  <span>
                    <p>Get Started</p>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="banner-image" style={{ opacity: 1 }}>
            <img
              src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ"
              width="100%"
              alt="img"
            />
          </div>
        </div>
      </div>

      <div className="Page-wrapper">
        <div className="Page banner0-page">
          <div className="banner0-title-wrapper" data-edit="childWrapper">
            <h1 name="title" className="banner0-title" style={{ opacity: 1 }}>
              News Feed
            </h1>
            <Row>
        <Col span={8}>
          <div style={{ height: "100vh", overflowY: "scroll" }}>
            {NewsSources.map((source, idx) => (
              <Card
                hoverable
                onClick={(e) => {
                  //News = loadNews(source.SourceRSS);
                  Axios.get(source.SourceRSS)
                    .then((resp) => {
                      var data = new window.DOMParser().parseFromString(
                        resp.data,
                        "text/xml"
                      );
                      let retNews = data.querySelectorAll("item");
                      console.log(retNews);
                      setNews(retNews);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                <Avatar src={source.SourceLogo} />{" "}
                <a href={source.SourceRSS}>{source.SourceName}</a> <br />
                <br />
                {source.SourceDescription}
              </Card>
            ))}
          </div>
        </Col>
        <Col
          span={16}
          style={{ paddingLeft: 15, height: "100vh", overflowY: "auto" }}
        >
          {Array.from(News).map((item, idx) => {
            var title = item.querySelector("title").innerHTML;
            var description = item.querySelector("description").innerHTML;
            var readMore = item.querySelector("link").textContent;
            var pubDate = item.querySelector("pubDate")
              ? item.querySelector("pubDate").textContent
              : "";
            //var guid = item.querySelector("guid").textContent;
            debugger;
            return (
              <div>
                <h3>{title}</h3>
                <p>{pubDate}</p>
                <p>{description}</p>
                <Divider dashed />
              </div>
            );
          })}
        </Col>
      </Row>


          </div>
        </div>
      </div>

    </Fragment>
  );
};

const loadNews = (url) => {
  let retNews = [];
  let newsNodes = null;

  Axios.get(url)
    .then(
      (resp) => {
        var data = new window.DOMParser().parseFromString(
          resp.data,
          "text/xml"
        );
        retNews = data.querySelectorAll("item");

        newsNodes = retNews.map((item) => {
          var title = item.querySelector("title").innerHTML;
          var description = item.querySelector("description").innerHTML;
          var readMore = item.querySelector("link").textContent;
          var pubDate = item.querySelector("pubDate").textContent;
          var guid = item.querySelector("guid").textContent;
          console.log(title);
          return (
            <li>
              <h3>{title}</h3>
              <h5>{description}</h5>
              {/* <div title={title} description={description} /> */}
            </li>
          );
        });
      },
      () => newsNodes
    )
    .catch((err) => {
      console.log(err);
    });
};

export default Home;
