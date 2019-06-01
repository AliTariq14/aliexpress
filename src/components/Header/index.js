import React, { Component } from "react";
import { Row, Col } from "antd";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";

class Header extends Component {
  render() {
    return (
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
    );
  }
}

export default Header;
export { default as NavBar } from "./NavBar";
export { default as SearchBox } from "./SearchBox";
