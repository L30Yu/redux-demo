import React from "react";

export default function BasketItem({ order }) {
    return (
        <tr>
            <td>{order.name}</td>
            <td>{`@ $${order.cost} x ${order.count}`}</td>
            <td>{(order.cost * order.count).toFixed(2)}</td>
        </tr>
    );
}