import React, { Component } from "react";
import { Button, Typography, Icon, Divider } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InLineDiv = styled.div`
  display: inline-block;
  color: black;
`;
const CenteredDiv = styled.div`
  text-align: center;
`;

const HoverShow = styled.div`
   {
    z-index:2
    display:inline-block;
    position: absolute;
    background-color: red;
    width: 207px;
    height: 400px;
    padding-top:5em;
    right: 0;
    
  }
`;

class Login extends Component {
  state = {
    isHovered: false
  };

  toggleHover = () => {
    this.setState(prevState => ({ isHovered: !prevState.isHovered }));
  };

  render() {
    return (
      <div onMouseEnter={this.toggleHover}>
        {this.state.isHovered ? (
          <HoverShow id="hoverShow1" onMouseLeave={this.toggleHover}>
            <Typography.Text>Welcome to AliExpress.com</Typography.Text>
            <Button style={{ marginTop: "1em" }} type="primary" block>
              Primary
            </Button>

            <Divider />
            <Button type="primary" block>
              Primary
            </Button>
          </HoverShow>
        ) : (
          <></>
        )}

        <div>
          <InLineDiv>
            <Icon style={{ fontSize: "2.4em" }} type="user" />
          </InLineDiv>

          <InLineDiv>
            <span>
              <Button size="small" type="link" ghost>
                SignIn
              </Button>
            </span>
            <Divider type="vertical" />
            <span>
              <Button size="small" type="link" ghost>
                SignUp
              </Button>
            </span>

            <CenteredDiv>
              <Typography.Text>AliExpress</Typography.Text>
            </CenteredDiv>
          </InLineDiv>
        </div>
      </div>
    );
  }
}

export default Login;
