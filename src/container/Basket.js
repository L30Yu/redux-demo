import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import BasketItem from "../components/BasketItem"

class Basket extends Component {
  render() {
    let { basketOrders, products } = this.props;    
    // combine products data with basket order data
    let productOrders = basketOrders.map(order => { return { ...products.find(product => product.id === order.id), count: order.count } });
    console.log(productOrders);

    let subtotal = productOrders.reduce((total, item) => total += item.count * item.cost, 0);
    let discount = 0;
    let total = subtotal - discount;

    return (
      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {productOrders.map(order =>
            <BasketItem key={order.id} order={order} />
          )}
          <tr height="40px" />
          <tr className="spacer">
            <td>Subtotal:</td>
            <td></td>
            <td>${subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Discount:</td>
            <td></td>
            <td>${discount.toFixed(2)}</td>
          </tr>

          <tr height="40px" />

          <tr>
            <td><h4><strong>Total:</strong></h4></td>
            <td></td>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    basketOrders: state.basket.order,
  };
};

Basket = connect(mapStateToProps)(Basket);

export default Basket;
