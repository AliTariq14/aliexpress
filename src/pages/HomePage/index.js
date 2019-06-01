import React, { Component } from "react";
import { Row, Col } from "antd";
import { CardContainer, SideBar, Slider } from "../../components";

class HomePage extends Component {
  render() {
    const divColor = { backgroundColor: "yellow" };
    const height = { height: "100%" };
    const columnContainer = { height: "40%", backgroundColor: "grey" };
    return (
      <div className="homepage">
        <Row style={height} type="flex" justify="start">
          <Col span={5}>
            <SideBar />
          </Col>
          <Col span={14}>
            <Row type="flex" style={height}>
              <Col style={{ height: "250px" }} span={24}>
                <Slider />
              </Col>
              <Col style={columnContainer} span={24}>
                <CardContainer />
              </Col>
            </Row>
          </Col>
          <Col span={5} style={divColor} />
        </Row>
      </div>
    );
  }
}

export default HomePage;
