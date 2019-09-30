import React from "react";

const Header = () => {
  return(
    <div className="main-header">
      <div className="container">
          <h1 className="logo">
      			<img src="images/logo.png" />
      		</h1>
          <div className="header-buttons">
            <button>Login/signup</button>
            <button>Cart</button>
          </div>
    	</div>
    </div>
  )
};

export default Header;
