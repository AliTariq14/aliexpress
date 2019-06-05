import React, { Component } from "react";
import { Button, Icon } from "antd";
import styled from "styled-components";

const RoundedSpan = styled.span`
  border-radius: 25px;
  background-color: red;
  width: 5px;
`;

const InLineDiv = styled.div`
  display: inline-block;
`;

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <InLineDiv>
          <Icon style={{ fontSize: "2.5em" }} type="shopping-cart" />
        </InLineDiv>

        <InLineDiv>
          <div>
            <RoundedSpan>0 </RoundedSpan>
          </div>
          <div>
            <Button size="small" type="link" ghost>
              Cart
            </Button>
          </div>
        </InLineDiv>
      </div>
    );
  }
}

export default Cart;
