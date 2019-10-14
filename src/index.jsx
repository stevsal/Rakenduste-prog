import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Homepage from "./homepage.jsx";
import Itempage from "./Itempage.jsx";

const root = document.getElementById("app");




ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={Homepage}>
    </Route>
    <Route path="/products/:itemId" exact component={Itempage}>
    </Route>
  </BrowserRouter>
 ,
  root
);
