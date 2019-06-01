import React, { Component } from "react";
import { Input } from "antd";

const Search = Input.Search;

class SerachBox extends Component {
  state = {};
  render() {
    return (
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton
      />
    );
  }
}

export default SerachBox;
