import React, { Component } from "react";
import { connect } from "react-redux";
import { addProductToBasket, removeProductFromBasket } from "../actions";
import Product from "../components/Product";
import { Table } from "reactstrap";

class ProductList extends Component {  
  render() {
    return (
      <Table className='table borderless'>        
        <tbody>
          <tr>
            <td></td>
            <td>Quantity</td>
            <td></td>
            <td></td>
          </tr>
          {
            this.props.products.map(x => {
            let basketOrder = this.props.basketOrder.find(item => item.id === x.id);
            let count = basketOrder && basketOrder.count ? basketOrder.count : 0;
            return (
                <Product
                  addToBasket={this.props.addToBasket}
                  removeFromBasket={this.props.removeFromBasket}
                  product={x}
                  orderCount={count}
                  key={x.id}
                />
              )
            })
          }
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    basketOrder: state.basket.order,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToBasket: (id, quantity) => {
      dispatch(addProductToBasket(id, quantity));
    },
    removeFromBasket: (id, quantity) => {
      dispatch(removeProductFromBasket(id, quantity));
    },
  };
};

ProductList = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductList;
