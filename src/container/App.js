import React, { Component } from "react";
import ProductList from "./ProductList";
import MainNavigation from "../components/MainNavigation";
import Basket from "./Basket";

class App extends Component {
  render() {
    return (
      <div className="container">
        <MainNavigation />
        <main>
          <br />
          <ProductList />
          <br />
          <Basket />
        </main>
      </div>
    );
  }
}

export default App;
