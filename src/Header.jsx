import React from "react";
import {Link} from "react-router-dom";


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
             <button>Login/signup</button>
             <button>Cart</button>
           </div>
         </div>
    </div>
  );
};

export default Header;
