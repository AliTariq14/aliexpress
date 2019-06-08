import React, { Component } from "react";
import { Row, Col } from "antd";
import { CardContainer, SideBar, Slider } from "../../components";
import SideBarDrawer from "../../components/SideBar/SideBarDrawer";
import data from "../../fakeDataService/fakeDataService";
class HomePage extends Component {
  state = {
    openSideBar: false
  };

  handleSideBarHover = () => {
    this.setState(prevState => ({ openSideBar: !prevState.openSideBar }));
  };

  render() {
    console.log(data);
    return (
      <Row type="flex" justify="start">
        <SideBarDrawer
          open={this.state.openSideBar}
          onMouseLeave={this.handleSideBarHover}
        />
        <Col span={5}>
          <SideBar onMouseEnter={this.handleSideBarHover} />
        </Col>
        <Col span={14}>
          <Row type="flex">
            <Col span={24}>
              <div>
                <Slider />
              </div>
            </Col>
            <Col span={24}>
              <CardContainer />
            </Col>
          </Row>
        </Col>
        <Col span={5} />
      </Row>
    );
  }
}

export default HomePage;
