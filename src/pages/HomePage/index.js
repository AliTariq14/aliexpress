import React, { Component } from "react";
import { Row, Col } from "antd";
import { CardContainer, SideBar, Slider } from "../../components";

class HomePage extends Component {
  render() {
    return (
      <Row type="flex" justify="start">
        <Col span={5}>
          <SideBar />
        </Col>
        <Col span={14}>
          <Row type="flex">
            <Col span={24}>
              <Slider />
            </Col>
            <Col span={24}>
              <CardContainer />
            </Col>
          </Row>
        </Col>
        <Col span={5} />
      </Row>
    );
  }
}

export default HomePage;
