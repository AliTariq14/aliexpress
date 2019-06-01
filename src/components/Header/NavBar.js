import React, { Component } from "react";
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item>Shopping Cart Box</Menu.Item>
          <Menu.Item>WishList</Menu.Item>
          <Menu.Item>Shopping Cart/Login</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
