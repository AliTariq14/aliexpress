import React, { Component } from "react";
import {
  Typography,
  Row,
  Col,
  Menu,
  Icon,
  Button,
  Dropdown,
  Divider
} from "antd";

import { Link } from "react-router-dom";

import Login from "./Login";
import Cart from "./Cart";
import WishList from "./WishList";
class NavBar extends Component {
  render() {
    return (
      <Row>
        <Col span={6}>
          <Cart />
        </Col>

        <Col span={7}>
          <WishList />
        </Col>

        <Col span={11}>
          <Login />
        </Col>
      </Row>
    );
  }
}

export default NavBar;

// <Dropdown.Button
//             size="large"
//             overlay={menu}
//             onVisibleChange={this.handleVisibleChange}
//             visible={this.state.visible}
//           >
//             <a className="ant-dropdown-link" href="#">
//               <Icon style={{ fontSize: "1em" }} type="user" />
//               SignUp <Divider type="vertical" />
//             </a>
//             <a className="ant-dropdown-link" href="#">
//               SignIn <br />
//             </a>
//             <a className="ant-dropdown-link" href="#">
//               <a className="ant-dropdown-link" href="#">
//                 My AliExpress
//               </a>
//             </a>
//           </Dropdown.Button>
