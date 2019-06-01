import React, { Component } from "react";
import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

class SideBar extends Component {
  state = {
    items: [
      { id: 1, name: `Men's Clothing` },
      { id: 2, name: `Women's Clothing` },
      { id: 3, name: `Electronics` },
      { id: 4, name: `Sports Wear` },
      { id: 5, name: `Home Appliances` },
      { id: 6, name: `Tech Gear` },
      { id: 7, name: `Auto Parts` },
      { id: 8, name: `Kitchen Accesories` },
      { id: 9, name: `Toys` },
      { id: 10, name: `Kid's Wear` }
    ]
  };
  render() {
    return (
      <div className="sideBar">
        <Menu mode="vertical">
          {this.state.items.map(i => (
            <SubMenu key={i.id} title={<span>{i.name}</span>}>
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Iteom 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          ))}
        </Menu>
      </div>
    );
  }
}

export default SideBar;
