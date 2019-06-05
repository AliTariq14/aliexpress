import React from "react";
import "antd/dist/antd.css";
import { Header } from "./components";
import { HomePage } from "./pages";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </>
    );
  }
}

export default App;
