import React from "react";

export default function BasketItem({ product, order }) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{`@ $${product.cost} x ${order.count}`}</td>
            <td>{product.cost * order.count}</td>
        </tr>
    );
}