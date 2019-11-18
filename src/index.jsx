import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import Itempage from "./pages/Itempage.jsx";
import Header from "./components/Header.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import store from "./store";
import CartPage from "./pages/CartPage.jsx";
import "./pages/main.css";
console.log("hello", store);

const authDefaultValue = {
  token: null,
  user: {
    email:null,
    _id: null,
    createdAt: null,
  },
};
export const AuthContext = React.createContext(authDefaultValue);

class App extends React.Component {
  state = authDefaultValue;
handleLogin = ({token, user}) => {
  this.setState( {
    user, token
  });
};

  render() {
    return(
      <AuthContext.Provider value = {this.state}>
        <BrowserRouter>
          <Route path={"/"} component = {Header} />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route
              path="/login"
              exact
              render={ (props) =>
                <LoginPage
                  {...props}
                onLogin={this.handleLogin}
              />}
            />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/users/:userId" exact component={UserPage}/>
            <Route path="/products/:itemId" exact component={Itempage} />
            <Route path="/checkout/cart" exact component={CartPage} />
            <Route component = {NotFound} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    );
  }
}

const root = document.getElementById("app");

/*ReactDOM.render(
  <BrowserRouter>
    <Route path={"/"} component = {Header} />
    <Route path="/" exact component={Homepage}>
    </Route>
    <Route path="/login" exact component={LoginPage} />
    <Route path="/signup" exact component={SignupPage} />
    <Route path="/users/:userId" exact component={UserPage} />
    <Route path="/products/:itemId" exact component={Itempage}>
    </Route>
  </BrowserRouter>
 ,
  root
);*/

ReactDOM.render(<App />, root);
