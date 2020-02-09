import React from 'react';

export default function CartSummaryItem(props) {
  const currency = props.item.price / 100;
  currency.toFixed(2);

  function deleteOne() {
    return props.remove(props.item.cartItemId);
  }

  function addOne() {
    return props.addItem(props.item);
  }

  function removeAll() {
    return props.removeAll(props.item.productId);
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="cartItem border border-dark mt-2 w-50 p-3 rounded-lg">
        <img src={props.item.image} className="cartImage float-left img-thumbnail shadow p-3 rounded rounded-lg mr-3"></img>
        <div className="center-block font-weight-bold">{props.item.name}</div>
        <div className="font-italic">${currency}</div>
        <div>{props.item.shortDescription}</div>
        <div className="d-flex justify-content-center">
          <div className="d-inline-block justify-content-center mt-3">
            <div className="d-flex align-items-center mr-1 font-weight-bold">Quantity: </div>
            <div className="border d-flex justify-content-around mt-1">
              <button onClick={addOne} className="btn btn-outline-danger w-50">+</button>
              <div className="d-flex align-items-center ml-3 mr-3">
                {props.item.quanity}
              </div>
              <button onClick={deleteOne} className="btn btn-outline-danger w-50">-</button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="removeAll" onClick={removeAll}>Remove</div>
        </div>
      </div>
    </div>
  );
}
