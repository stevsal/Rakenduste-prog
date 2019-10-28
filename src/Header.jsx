import React from "react";
import {Link} from "react-router-dom";
import {userIcon} from "./icons.js";
import {cartIcon} from "./icons.js";
import "./header.css";

console.log(userIcon);

const Header = () => {
  return(
    <div className="main-header">
      <div className="container">
          <h1 className="logo">
            <Link to={"/"}>
              <img src="/images/logo.png" width="170" height="95" />
            </Link>
          </h1>
           <div className="header-buttons">
             <img src={userIcon}/>
             <button>Login/signup</button>
             <img src={cartIcon} />
             <button>Cart</button>
           </div>
         </div>
    </div>
  );
};

export default Header;
