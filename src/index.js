import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PostContent from "./Components/Post/PostContent";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={App} />
      <Route path="/post/:id" component={PostContent} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
