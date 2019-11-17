import React from "react";
import {Link} from "react-router-dom";
import {userIcon} from "./icons.js";
import {cartIcon} from "./icons.js";
import "./header.css";
import PropTypes from "prop-types";

console.log(userIcon);

const Header = ({token, user}) => {
  console.log("header", token, user);
  return(
    <div className="main-header">
      <div className="container">
          <h1 className="logo">
            <Link to={"/"}>
              <img src="/images/logo.png" width="300" height="300" />
            </Link>
          </h1>
           <div className="header-buttons">
             {user.email && <WelcomeIcon user = {user} />}
             {!user.email && <LoginRegisterIcon />}
             <div className={"header-button"}>
               <img src={cartIcon} />
               <div>
                 <div className={"header-button-text"}>Cart</div>
               </div>
             </div>
           </div>
         </div>
    </div>
  );
};

Header.propTypes = {
    token: PropTypes.string,
    user: PropTypes.object,
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

  WelcomeIcon.propTypes = {
    user: PropTypes.object.isRequired
  };

export default Header;
