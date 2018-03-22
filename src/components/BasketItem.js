import React from "react";

export default function BasketItem({ order }) {
    return (
        <tr>
            <td>{order.name}</td>
            <td>{`@ $${order.price} x ${order.count}`}</td>
            <td>{(order.price * order.count).toFixed(2)}</td>
        </tr>
    );
}