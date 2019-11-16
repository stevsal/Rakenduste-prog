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
              <img src="/images/logo.png" width="300" height="300" />
            </Link>
          </h1>
           <div className="header-buttons">
             <div className={"header-button"}>
               <img src={userIcon}/>
               <div className={"header-button-text"}>Login/signup</div>
             </div>
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

export default Header;
