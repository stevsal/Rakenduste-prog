import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";




const ItemList = (props) => {
  return (
    <div className="content">
    {
      props.items.map( item => {
        return <Item
        key={item.id}
        id={item.id}
        imgSrc={item.imgSrc}
        title={item.title}
        price={item.price}

        />;
      })
    }
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

const Item = (props) => {
  return (
    <Link to={`./products/${props.id}`}>
      <div className={"item"}>
        <h2 className="item__name">{props.title}</h2>
        <img src={props.imgSrc} className="item__image"/>
        <div className="item__price">{props.price}</div>
      </div>
    </Link>

  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default ItemList;
