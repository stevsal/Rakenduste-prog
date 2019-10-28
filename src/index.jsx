import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route
} from "react-router-dom";
//import Homepage from "./homepage.jsx";
import Itempage from "./Itempage.jsx";
import LiveTest1 from "./LiveTest1.jsx";

const root = document.getElementById("app");




ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={LiveTest1}>
    </Route>
    <Route path="/products/:itemId" exact component={Itempage}>
    </Route>
  </BrowserRouter>
 ,
  root
);
