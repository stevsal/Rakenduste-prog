import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import {phones, laptops} from "./mydatabase.jsx";


class Itempage extends React.PureComponent {


  render() {
    const item = phones[0];
    return(
      <>
        <Header/>
        <div className={'item_container'}>
          <img src={item.imgSrc} />
          <div className={'item__name'}>{item.title}</div>
          <div className={'item__price'}>{item.price}</div>
        </div>
      </>
    )
  }
}

export default Itempage;
