import React, { Component } from "react";
import { Input, Select, Button } from "antd";
import styled from "styled-components";

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <>
        <Input.Group size="large" compact>
          <Input style={{ width: "50%" }} placeholder=" Search" />
          <Select defaultValue="All Categories">
            <Select.Option value="Zhejiang">Men</Select.Option>
            <Select.Option value="Jiangsu">Women</Select.Option>
          </Select>
          <Button size="large" type="primary" icon="search" />
        </Input.Group>
      </>
    );
  }
}

export default SearchBox;
