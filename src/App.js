import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";
import Store from "./store";

import "./App.css";
import Header from "./components/header";
import Content from "./components/content";

function App() {
  return (
    <ReduxProvider store={Store}>
      <Router>
        <main>
          <Header></Header>
          <Content></Content>
        </main>
      </Router>
    </ReduxProvider>
  );
}

export default App;
