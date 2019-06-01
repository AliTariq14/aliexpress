import React, { Component } from "react";
import { Row, Col } from "antd";
import NavBar from "./NavBar";
import SerachBox from "./SearchBox";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <Row type="flex" justify="start">
          <Col span={6}>
            <h3> AliExpress Logo</h3>
          </Col>
          <Col span={10}>
            <SerachBox />
          </Col>

          <Col span={8}>
            <NavBar />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
