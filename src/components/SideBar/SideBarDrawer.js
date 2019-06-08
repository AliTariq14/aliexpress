import React, { Component } from "react";

import styled from "styled-components";
import data from "../../fakeDataService/fakeDataService";
const StyledDrawer = styled.div`
  background-color: ${props => props.backgroundColor};
  height: ${props => props.height}em;
  display: inline-block;
  position: absolute;

  * {
    color: ${props => props.textColor};
  }
`;
const StyledDiv = styled.div`
  position: absolute;
  z-index: 2;
  background-color: #fc0;
  height: 32em;
  width: 79.3%;
  left: 265px;
`;

class SideBarDrawer extends Component {
  state = {};

  // handleDisplay = () => {
  //   if (this.props.open == false) {
  //     this.setState({ diplay: "none" });
  //   }
  // };
  render() {
    // this.handleDisplay();
    if (this.props.open == false) return <></>;
    return (
      <StyledDiv onMouseLeave={this.props.onMouseLeave}>
        <div />
      </StyledDiv>
      // <StyledDrawer height="36" backgroundColor="grey">
      //   hello
      // </StyledDrawer>
    );
  }
}

export default SideBarDrawer;
