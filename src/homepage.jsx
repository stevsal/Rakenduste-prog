import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import {phones, laptops} from "./mydatabase.jsx";


class Homepage extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {
      items: phones,
    }
  }

  handleChange(event){
    console.log(event.target.value);
    switch (event.target.value) {
      case 'phones':{
        this.setState({
          items: phones,
        });
        break;
      }
      case "laptops":{
        this.setState({
          items: laptops,
        });
        break;
      }
    }
  };

  render() {
    return(
      <>
        <Header/>
        <select id="category-select" onChange={this.handleChange.bind(this)}>
          <option value="phones" selected>Phones</option>
          <option value="laptops">Laptops</option>
        </select>
        <ItemList items={this.state.items}/>
      </>
    )
  }
}

export default Homepage;
