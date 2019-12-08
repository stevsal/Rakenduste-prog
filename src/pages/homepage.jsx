import React from "react";
//import Header from "../components/Header.jsx";
import ItemList from "../components/ItemList.jsx";
import Checkbox from "../components/Checkbox.jsx";
import PropTypes from "prop-types";
import Dropdown from "../components/Dropdown.jsx";
import {connect} from "react-redux";
import {ItemProps} from "./CartPage.jsx";
import {getItems} from "../store/actions";
import * as selectors from "../store/selectors.js";

class Homepage extends React.PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape(ItemProps)).isRequired,
  };

  constructor(props){
    super(props);
    this.state = {
      sortDirection: -1,
      allCategories: ["phones", "laptops"],
      selectedCategories: ["phones"],
    };
  }

  componentDidMount(){
    this.props.dispatch(getItems());
  }

  handleSortDropdown = (sortDirection) => {
    this.setState({
      sortDirection,
    });
  };

    handleFilterSelect = (event) => {
      const categoryName = event.target.name;
      if(this.isSelected(categoryName)){
        return this.unselectCategory(categoryName);
      }
      this.selectCategory(categoryName);
    };

    selectCategory = (categoryName) => {
      this.setState( {
        selectedCategories: this.state.selectedCategories.concat([categoryName])
      });
    };

    unselectCategory = (categoryName) => {
      const newArr = this.state.selectedCategories.filter(cn => cn !== categoryName);
      this.setState({
       selectedCategories: newArr
      });
    };

    getVisibleItems = () => {
      return this.props.items
      .filter(item => this.isSelected(item.category))
      .sort( (a, b) => {
        switch (this.state.sortDirection) {
          case -1: return b.price - a.price;
          case 1: return a.price - b.price;
        }
      });
    };

  isSelected = (name) => this.state.selectedCategories.indexOf(name) >=0;

  render() {
    const visibleItems = this.getVisibleItems();
    console.log("state", this.state);
    return(
      <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Welcome</h1>
          <p>There is a webstore below</p>
        </div>
      </div>
        <div className={"items-header-wrapper"}>
          <CategoriesFilter
            allCategories={this.state.allCategories}
            handleDropdown={this.handleFilterSelect}
            isSelected={this.isSelected}
            />

            <div>
              Items found {visibleItems.length} for {this.state.selectedCategories.join(", ")}
            </div>
            <Dropdown
              direction={this.state.sortDirection}
              onChange={this.handleSortDropdown}
            />
          </div>
        <ItemList items={visibleItems}/>
      </>
  );
  }
}

const CategoriesFilter = ({allCategories, handleDropdown, isSelected}) => {
  return (
    <div>
      {
        allCategories.map( categoryName => {
          return(
            <Checkbox key={categoryName}
              name={categoryName}
              onChange={handleDropdown}
              checked={isSelected(categoryName)}
              />
          );
        })
      }
    </div>

  );
};

CategoriesFilter.propTypes = {
  allCategories: PropTypes.array.isRequired,
  handleDropdown: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => {
   return {
     items: selectors.getItems(store),
   };
};

export default connect(mapStateToProps) (Homepage);
