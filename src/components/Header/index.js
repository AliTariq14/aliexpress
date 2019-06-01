import React, { Component } from "react";
import { Row, Col } from "antd";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";

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
            <SearchBox />
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
