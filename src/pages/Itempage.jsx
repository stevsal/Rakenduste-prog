import React from "react";
//import Header from "./Header.jsx";
//import {phones} from "./mydatabase.jsx";
import PropTypes from "prop-types";


class Itempage extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.fetchItem();
  }

  fetchItem = () => {
    fetch(`/api/products/${this.props.match.params.itemId}`)
    .then( res =>{
      return res.json();
    })
    .then( item =>{
      console.log("item", item);
      this.setState({
        ...item
      });
    })
    .catch(err => {
      console.log("item page", err);
    });
  }

  render() {
    console.log("match", this.props);

    return(
      <>
        <div className={"item_container"}>
          <img src={this.state.imgSrc} />
          <div className={"item__name"}>{this.state.title}</div>
          <div className={"item__price"}>{this.state.price}</div>
        </div>
      </>
    );
  }
}

Itempage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Itempage;
