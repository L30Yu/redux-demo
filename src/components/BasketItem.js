import React from "react";

export default function BasketItem({ order, updateDiscount }) {
    let saved = 0;
    if (order.discount) {
        let valideCount = Math.floor(order.count / order.discount.minimum);
        if (valideCount > 0) {
            saved = valideCount * (order.discount.minimum * order.price - order.discount.price);
        }
    }

    let nameDiv = <div>{order.name} <br /> {saved ? order.discount.description : null} </div>;

    let priceDiv = <div>{`@ $${order.price} x ${order.count}`}<br />{saved ? `@ $${(order.discount.price / order.discount.minimum).toFixed(2)}` : null} </div>;

    let countDiv = <div>{(order.price * order.count).toFixed(2)}<br />{saved ? "-"+(saved).toFixed(2) : null} </div>

    return (
        <tr>
            <td>{nameDiv}</td>
            <td>{priceDiv}</td>
            <td>{countDiv}</td>
        </tr>
    );
}