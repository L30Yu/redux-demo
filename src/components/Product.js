import React from "react";
import { Input, Button } from "reactstrap";

const style = {
  padding: "1em 1em",
};

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = event => {
    let quantity = parseInt(event.target.value, 10);
    quantity = Number.isNaN(quantity) || quantity < 0 ? 0 : quantity;
    if (quantity > this.props.product.inventory) {
      quantity = this.props.product.inventory;
    }
    this.setState({
      quantity
    });
  };

  onAddClick = (id, quantity) => {
    if (quantity > this.props.product.inventory - this.props.orderCount) {
      quantity = this.props.product.inventory - this.props.orderCount;
    }
    if (quantity <= 0) return;
    this.props.addToBasket(id, quantity);
  }

  onRemoveClick = (id, quantity) => {
    if (quantity > this.props.orderCount) {
      quantity = this.props.orderCount;
    }
    if (quantity <= 0) return;
    this.props.removeFromBasket(id, quantity);
  }

  render() {
    let { product, orderCount } = this.props;
    let disableRemoveBtn = orderCount == null || orderCount <= 0;
    let disableAddBtn = product.inventory <= 0 || product.inventory <= orderCount;
    return (
        <tr style={style}>
          <td>
            {product.name}
          </td>
          <td>
            <Input invalide={this.state.invalide} type="number" name="quantity" placeholder="quantity" id={product.id} value={this.state.quantity} onChange={this.onChange} />
          </td>
          <td>
            <Button color="primary" onClick={() => this.onAddClick(product.id, this.state.quantity)} disabled={disableAddBtn}>
              Add
          </Button>
          </td>
          <td>
            <Button color="danger" onClick={() => this.onRemoveClick(product.id, this.state.quantity)} disabled={disableRemoveBtn}>
              Remove
          </Button>
          </td>
        </tr>
    );
  }
}