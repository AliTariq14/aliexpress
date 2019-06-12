import React, { Component } from "react";
import { Button, Typography, Icon, Divider } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InLineDiv = styled.div`
  display: inline-block;
  color: black;
`;
const AlignedDiv = styled.div`
  text-align: ${props => props.textAlign};
`;

const HoverDiv = styled.div`
  :hover {
    background-color: lightgrey;
    cursor: pointer;
  }
  padding-left: 1.8em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;
const HoverShow = styled.div`
   {
    z-index:2
    display:inline-block;
    position: absolute;
    background-color: white;
    width: 250px;
    
    padding-top:2.5em;
    right: 0;
    border-style:${props => props.border};    
  }
`;

class Login extends Component {
  state = {
    isHovered: false,
    color: "green",
    border: "none"
  };

  toggleHover = () => {
    this.setState(prevState => ({ isHovered: !prevState.isHovered }));
    if (this.state.isHovered) {
      this.setState({ color: "darkorange", border: "none" });
    } else {
      this.setState({ color: "white", border: "ridge" });
    }
  };

  render() {
    const style = {
      backgroundColor: this.state.color,
      borderStyle: this.state.border
    };

    return (
      <div onMouseEnter={this.toggleHover} style={style}>
        <div>
          <InLineDiv>
            <Icon style={{ fontSize: "2.4em" }} type="user" />
          </InLineDiv>

          <InLineDiv>
            <span>
              <Button size="small" type="link" style={{ color: "black" }} ghost>
                SignIn
              </Button>
            </span>
            <Divider type="vertical" style={{ backgroundColor: "black" }} />
            <span>
              <Button size="small" type="link" style={{ color: "black" }} ghost>
                SignUp
              </Button>
            </span>

            <AlignedDiv textAlign="center">
              <Typography.Text>AliExpress</Typography.Text>
            </AlignedDiv>
          </InLineDiv>
        </div>

        {this.state.isHovered ? (
          <HoverShow
            id="hoverShow1"
            onMouseLeave={this.toggleHover}
            border={this.state.border}
          >
            <div
              style={{
                textAlign: "center",
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <div style={{ textAlign: "left" }}>
                <Typography.Text>Welcome to AliExpress.com</Typography.Text>
              </div>

              <Button style={{ marginTop: "0.5em" }} type="primary" block>
                SignIn
              </Button>

              <div style={{ marginTop: "0.5em", textAlign: "left" }}>
                <Typography.Text>SignIn using</Typography.Text>
                <span>
                  <Icon type="facebook" style={{ padding: "0.25em" }} />
                </span>

                <span>
                  <Icon type="google" style={{ padding: "0.25em" }} />
                </span>
              </div>

              <Divider style={{ margin: "0.75em 0" }} />

              <div style={{ textAlign: "left" }}>
                <Typography.Text>New Customer ?</Typography.Text>
              </div>
              <Button type="primary" style={{ marginTop: "0.5em" }} block>
                Join Free
              </Button>
            </div>

            <div style={{ marginTop: "0.5em" }}>
              <HoverDiv>
                <Typography.Text>My Orders</Typography.Text>
              </HoverDiv>

              <HoverDiv>
                <Typography.Text>Message Center</Typography.Text>
              </HoverDiv>

              <HoverDiv>
                <Typography.Text>Wish List</Typography.Text>
              </HoverDiv>

              <HoverDiv>
                <Typography.Text>My Favourite Stores</Typography.Text>
              </HoverDiv>

              <HoverDiv>
                <Typography.Text>My Coupons</Typography.Text>
              </HoverDiv>
            </div>
          </HoverShow>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Login;
