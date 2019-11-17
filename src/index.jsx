import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import Itempage from "./pages/Itempage.jsx";
import Header from "./components/Header.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import UserPage from "./pages/UserPage.jsx";

class App extends React.Component {
  state = {
    token: null,
    user: {
      email:null,
      _id: null,
      createdAt: null,
    },
  };
handleLogin = ({token, user}) => {
  this.setState( {
    user, token
  });
};

  render() {
    return(
      <BrowserRouter>
      <Route
      path={"/"}
      render = { (props) =>
        <Header
        {...props}
        token={this.state.token}
        user={this.state.user}
       />}
      />
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
      <Route
        path="/users/:userId"
        exact
        render = { (props) => {
          return <UserPage {...props} user = {this.state.user} />;
        }}
      />
    <Route path="/products/:itemId" exact component={Itempage} />
    </BrowserRouter>
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
