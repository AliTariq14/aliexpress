import React, { Component } from "react";
import { Input, Select, Button, Divider } from "antd";
import styled from "styled-components";

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <Input.Group size="large" compact>
            <Input style={{ width: "50%" }} placeholder=" Search" />
            <Select defaultValue="All Categories">
              <Select.Option value="Zhejiang">Men</Select.Option>
              <Select.Option value="Jiangsu">Women</Select.Option>
            </Select>
            <Button size="large" type="primary" icon="search" />
          </Input.Group>
        </div>
        <div>
          <Button style={{ paddingLeft: "0" }} size="small" type="link" ghost>
            button 1
          </Button>
          <Divider type="vertical" />
          <Button size="small" type="link" ghost>
            button 2
          </Button>
          <Divider type="vertical" />
          <Button size="small" type="link" ghost>
            button 3
          </Button>
          <Divider type="vertical" />
          <Button size="small" type="link" ghost>
            button 4
          </Button>
        </div>
      </>
    );
  }
}

export default SearchBox;
