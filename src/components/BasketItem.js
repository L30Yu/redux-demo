import React from "react";

export default function BasketItem({ order }) {
    let saved = 0;
    if (order.discount) {
        let valideCount = Math.floor(order.count / order.discount.minimum);
        if (valideCount > 0) {
            saved = valideCount * (order.discount.minimum * order.price - order.discount.price);
        }
    }
    return (
        <tr>
            <td>{saved ? <div>{order.name} <br/> {order.discount.description} </div> : <div>{order.name}</div>}</td>
            <td>{saved ? <div>{`@ $${order.price} x ${order.count}`}<br />{`@ $${(order.discount.price / order.discount.minimum).toFixed(2)}`} </div> 
                        : <div>{`@ $${order.price} x ${order.count}`}</div>}</td>
            <td>{saved ? <div>{(order.price * order.count).toFixed(2)}<br />-{(saved).toFixed(2)} </div> : <div>{(order.price * order.count).toFixed(2)}</div>}</td>
        </tr>
    );
}