import React from "react";
import PropTypes from "prop-types";
import { FaRegTrashAlt, } from "react-icons/fa";
import FancyButton from  "../components/FancyButton.jsx";
import "../components/cart.css";
import {connect} from "react-redux";
import {removeItem} from "../store/actions";
import {toast} from "react-toastify";
import * as selectors from "../store/selectors.js";
import * as services from "../services.js";

class CartPage extends React.PureComponent {
  static propTypes = {
      cartItemIds: PropTypes.arrayOf(PropTypes.string).isRequired,
      dispatch: PropTypes.func.isRequired,
  };

  state = {
    cartItems: [],
  };

  componentDidMount() {
    this.fetchItems();
  }

  componentDidUpdate(prevProps) {
      const prevPropIds = prevProps.cartItemIds.join("");
      const currentIds = this.props.cartItemIds.join("");
      if(prevPropIds != currentIds) {
          this.fetchItems();
      }
  }

  fetchItems = () => {
      const promises = this.props.cartItemIds.map( itemId => services.getItem({itemId}));
      Promise.all(promises).then( items => {
          this.setState({
              cartItems: items,
          });
      })
       .catch(err => {
           console.error(err);
           toast.error("Failed fetching items");
       });
  };

  calcNumbers = () => {
        const VAT = 20;
        const sum = Math.round(this.state.cartItems.reduce((acc, item) => acc + item.price, 0));
        const taxes = Math.round(sum / 100 * VAT);
        return {
            sum, taxes
        };
    };

    handleTrash = (_id) => {
        this.props.dispatch(removeItem(_id));
        toast.success("Product removed from cart");
    };

    render() {
        const {sum, taxes} = this.calcNumbers();
        return (
            <div className={"spacer"}>
                <div className={"box cart"}>
                    <Table
                      onTrash={this.handleTrash}
                      rows={this.state.cartItems}
                    />
                </div>
                <div className={"box cart_summary"}>
                    <table>
                        <tbody>
                            <tr><td>Vahesumma</td><td>{sum}</td></tr>
                            <tr><td>Maksud</td><td>{taxes}</td></tr>
                            <tr><td>Kokku</td><td>{taxes + sum}</td></tr>
                            <tr>
                                <td></td>
                                <td><FancyButton >Vormista ost</FancyButton></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const Table = ({rows, onTrash}) => {
    return (
        <div className={"table"}>
            <div className={"row"}>
                <div className={"cell"}>Toode</div>
                <div className={"cell cell--grow"}>Nimetus</div>
                <div className={"cell"}>Kategooria</div>
                <div className={"cell cell--right"}>Summa</div>
                <div className={"cell cell--small"}></div>
            </div>
            {rows.map( (row, index) => <Row onTrash={onTrash} key={index} {...row} />)}
        </div>
    );
};
Table.propTypes = {
    rows: PropTypes.array.isRequired,
    onTrash: PropTypes.func.isRequired,
};
const Row = ({_id, title, imgSrc, category, price, onTrash}) => {
    return (
        <div className={"row"}>
            <div className={"cell"}>
                <img src={imgSrc} />
            </div>
            <div className={"cell cell--grow"}>
                {title}
            </div>
            <div className={"cell"}>
                {category}
            </div>
            <div className={"cell cell--right"}>
                {price} €
            </div>
            <div className={"cell cell--small cell--center"}>
                <FaRegTrashAlt title={"Eemalda "} className="hover--opacity" onClick={() => onTrash(_id)}/>
            </div>
        </div>
    );
};
export const ItemProps = {
    _id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};
Row.propTypes = {
    ...ItemProps,
    onTrash: PropTypes.func.isRequired,
};
const mapStateToProps = (store) => {
    return {
        cartItemIds: selectors.getCart(store)
    };
};
export default connect(mapStateToProps)(CartPage);
