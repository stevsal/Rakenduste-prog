import React from "react";
//import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/Header.jsx";
import Pages from "./pages/index.jsx";
import "typeface-roboto";
import {Provider} from "react-redux";
import "./pages/main.css";
import configureStore from "./store/configureStore.js";
import { PersistGate } from "redux-persist/integration/react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const {store, persistor} = configureStore();

class App extends React.Component {

  render() {
    return(
      <>
        <ToastContainer enableMultiContainer position={toast.POSITION.BOTTOM_LEFT}/>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <Route path={"/"} component = {Header} />
              <Switch>
                <Route path="/" exact component={Pages.HomePage} />
                <Route path="/login" exact component={Pages.LoginPage}/>
                <Route path="/signup" exact component={Pages.SignupPage} />
                <Route path="/users/:userId" exact component={Pages.UserPage}/>
                <Route path="/products/:itemId" exact component={Pages.ItemPage} />
                <Route path="/checkout/cart" exact component={Pages.CartPage} />
                <Route component = {Pages.NotFound} />
              </Switch>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </>
    );
  }
}

export default App;
