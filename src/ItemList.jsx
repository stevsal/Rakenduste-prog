import React from "react";
import {Link} from "react-router-dom";




const ItemList = (props) => {
  return (
    <div className="content">
    {
      props.items.map( item => {
        return <Item
        imgSrc={item.imgSrc}
        title={item.title}
        price={item.price}

        />
      })
    }
    </div>
  )
};

const Item = (props) => {
  return (
    <Link to={"./item"}>
      <div className={"item"}>
        <h2 className="item__name">{props.title}</h2>
        <img src={props.imgSrc} className="item__image"/>
        <div className="item__price">{props.price}</div>
      </div>
    </Link>

  )
};

export default ItemList;
