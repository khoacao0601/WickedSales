import React from 'react';

export default function CartSummaryItem(props) {
  const currency = props.item.price / 100;
  currency.toFixed(2);

  function deleteOne() {
    return props.remove(props.item.cartItemId);
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="cartItem border border-dark mt-2 w-50 p-3 rounded-lg">
        <img src={props.item.image} className="cartImage float-left img-thumbnail shadow p-3 rounded rounded-lg mr-3"></img>
        <div className="center-block font-weight-bold">{props.item.name}</div>
        <div className="font-italic">${currency}</div>
        <div>{props.item.shortDescription}</div>
        <div className="d-flex justify-content-center mt-3">
          <button onClick={deleteOne} className="remove btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
  );
}
