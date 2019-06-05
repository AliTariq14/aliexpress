import React, { Component } from "react";
import { Icon } from "antd";
import styled from "styled-components";

const InLineDiv = styled.div`
  display: inline-block;
`;

class WishList extends Component {
  state = {};
  render() {
    return (
      <div className="wishList">
        <InLineDiv>
          <Icon style={{ fontSize: "2.5em" }} type="heart" />
        </InLineDiv>

        <InLineDiv>
          <div>Wish</div>
          <div>List</div>
        </InLineDiv>
      </div>
    );
  }
}

export default WishList;
