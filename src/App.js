import React from "react";
import "antd/dist/antd.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <HomePage />
      </>
    );
  }
}

export default App;
