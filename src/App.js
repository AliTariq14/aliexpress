import React from "react";
import "antd/dist/antd.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Slider from "./components/Slider";
import Header from "./Header";
import HomePage from "./HomePage";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
