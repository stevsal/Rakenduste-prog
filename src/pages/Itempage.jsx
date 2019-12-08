import React from "react";
import PropTypes from "prop-types";
import FancyButton from  "../components/FancyButton.jsx";
import {connect} from "react-redux";
import { addItem } from "../store/actions";
import * as services from "../services.js";

class Itempage extends React.PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.fetchItem();
  }

  fetchItem = () => {
    services.getItem({itemId: this.props.match.params.itemId})
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

  handleBuy = () => {
    this.props.dispatch(addItem(this.state));
  }

  render() {
    console.log("match", this.props);

    return(
      <>
        <div className={"item_container"}>
          <img src={this.state.imgSrc} />
          <div className={"item__content"}>
            <div className={"item__name"}>{this.state.title}</div>
            <div className={"item__desc"}>{loremIpsum}</div>
            <div className={"item__price"}>{this.state.price}</div>
          </div>
          <div className={"item__buybutton"}>
            <FancyButton onClick={this.handleBuy}>Buy</FancyButton>
          </div>
        </div>
      </>
    );
  }
}

Itempage.propTypes = {
  match: PropTypes.object.isRequired,
};
const loremIpsum = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.";

export default connect()(Itempage);
