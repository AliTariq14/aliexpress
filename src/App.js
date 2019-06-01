import React from "react";
import "antd/dist/antd.css";
import { Header } from "./components";
import { HomePage } from "./pages";

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
