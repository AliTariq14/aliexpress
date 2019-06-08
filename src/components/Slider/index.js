import React, { Component } from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const StyledCarousel = styled(Carousel)`
  background-color: ${props => props.backgroundColor};
  height: ${props => props.height}em;
  div {
    height: ${props => props.height}em;
  }
  * {
    color: ${props => props.textColor};
  }
`;
const StyledDiv = styled.div`
  position: absolute;
  z-index: 1;
  background-color: #6f0;
  height: 250px;
  width: 350px;
  top: 40px;
  left: 40px;
`;

class Slider extends Component {
  render() {
    return (
      <StyledCarousel
        height="32"
        backgroundColor="green"
        textColor="white"
        autoplay
        dots={false}
      >
        <div>
          <h2>1</h2>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </StyledCarousel>
    );
  }
}

export default Slider;
