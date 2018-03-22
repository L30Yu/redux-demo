import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import BasketItem from "../components/BasketItem"

class Basket extends Component {
  render() {
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
          {this.props.basketOrders.map(order =>
            <BasketItem product={this.props.products.find(product => product.id === order.id)} order={order} />
          )}

          <tr height="40px" />
          <tr className="spacer">
            <td>Subtotal:</td>
            <td></td>
            <td>$0.00</td>
          </tr>
          <tr>
            <td>Discount:</td>
            <td></td>
            <td>$0.00</td>
          </tr>

          <tr height="40px" />

          <tr>
            <td><h4><strong>Total:</strong></h4></td>
            <td></td>
            <td>$0.00</td>
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
