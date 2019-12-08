import React from "react";
import {Link} from "react-router-dom";
import {userIcon} from "./icons.js";
import {cartIcon} from "./icons.js";
import "./header.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ItemProps } from "../pages/CartPage.jsx";
import { UserPropTypes } from "../store/reducer.js";
import * as selectors from "../store/selectors.js";

console.log(userIcon);

const Header = ({user, cart}) => {
  return(
    <div className="main-header">
      <div className="container">
          <h1 className="logo">
            <Link to={"/"}>
              <img src="/images/logo.png" width="300" height="300" />
            </Link>
          </h1>
           <div className="header-buttons">
             {user && <WelcomeIcon user = {user} />}
             {!user && <LoginRegisterIcon />}
             <Link className={"header-button"} to={"/checkout/cart"}>
               <img src={cartIcon} />
               <div>
                 <div className={"header-button-text"}>Cart</div>
               </div>
               <Badge>{cart.length}</Badge>
             </Link>
           </div>
         </div>
    </div>
  );
};

Header.propTypes = {
    token: PropTypes.string,
    user: PropTypes.shape(UserPropTypes),
    cart: PropTypes.arrayOf(ItemProps).isRequired,
  };

  const Badge = ({children}) => {
      if(children === 0) return null;
      return (
      <span className={"badge"}>
        {children}
      </span>
    );
  };
  Badge.propTypes = {
    children: PropTypes.number.isRequired,
  };

const LoginRegisterIcon = () => (
  <Link className={"header-button"} to={"/login"}>
    <img src={userIcon}/>
    <div className={"header-button-text"}>Login/signup</div>
  </Link>
);

const WelcomeIcon = ({user}) => (
    <Link className={"header-button"} to={`/users/${user._id}`}>
      <img src = {userIcon} />
      <div className={"header-button-text"}>Welcome, {user.email}</div>
    </Link>
  );

  const mapStateToProps = (store) => {
      return {
        cart: selectors.getCart(store),
        user: selectors.getUser(store),
      };
    };
  WelcomeIcon.propTypes = {
    user: PropTypes.shape(UserPropTypes),
  };

export default connect(mapStateToProps)(Header);
