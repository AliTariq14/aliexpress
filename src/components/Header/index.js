import React, { Component } from "react";
import { Row, Col, Typography } from "antd";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerDiv = styled.div`
  padding: 1.2em;
  background-color: darkorange;
`;
const StyledImg = styled.img`
  height: 100%;
  padding: 0;
`;

class Header extends Component {
  render() {
    return (
      <ContainerDiv>
        <Row type="flex" justify="start">
          <Col span={6}>
            <Link to="/">
              <StyledImg src="/images/logo.png" alt="Smiley face" />
            </Link>
          </Col>
          <Col span={10}>
            <SearchBox />
          </Col>
          <Col span={8}>
            <NavBar />
          </Col>
        </Row>
      </ContainerDiv>
    );
  }
}

export default Header;
export { default as NavBar } from "./NavBar";
export { default as SearchBox } from "./SearchBox";
