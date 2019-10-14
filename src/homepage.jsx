import React from "react";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
//import {phones, laptops} from "./mydatabase.jsx";


class Homepage extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      selectedCategory: "phones",
    };
  }

  componentDidMount(){
    this.fetchItems();
  }

  fetchItems = () => {
    fetch("api/products").then(res => {
      console.log("res", res);
      return res.json();
    })
    .then(items => {
      console.log("items", items);
      this.setState({items});
    })
    .catch(err => {
      console.log("error", err);
    });
  };

  handleDropdown(event){
    console.log(event.target.value);
    this.setState({
      selectedCategory: event.target.value
    });
  }

  getVisibleItems = () => {
    console.log(this.state.items.filter( item => item.category === this.state.selectedCategory));
    //console.log(item => item.category);
    return this.state.items.filter( item => item.category === this.state.selectedCategory);
    //return this.state.items;
    };

  render() {
    console.log("state", this.state);
    return(
      <>
        <Header/>
        <select id="category-select" onChange={this.handleDropdown.bind(this)}>
          <option value="phones">Phones</option>
          <option value="laptops">Laptops</option>
        </select>
        <ItemList items={this.getVisibleItems()}/>
      </>
  );
  }
}

export default Homepage;
