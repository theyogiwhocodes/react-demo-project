import React from "react";
import "./App.css";
import Header from "./components/header";
import Content from "./components/content";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Header></Header>
        <Content></Content>
      </main>
    </Router>
  );
}

export default App;
