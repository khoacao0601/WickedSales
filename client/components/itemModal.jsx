import React from 'react';

export default function ItemModal(props) {
  return (
    <div className="fadeOut position-fixed d-flex h-100 w-100">
      <div className="modal-contents m-auto bg-white border rounded mt-5 p-3 col-xl-4 col-lg-8 col-md-8 col-sm-8 col-11">
        <div className="d-flex justify-content-end">
          <i className="closeButton fas fa-times fa-1x" onClick={props.close}></i>
        </div>
        <div className="d-flex justify-content-center">
          <h2 className="m-2">Item added to cart</h2>
        </div>
        <div className="d-flex justify-content-center">
          <p className="m-2 text-success">{props.product.name} has been added to your cart.</p>
        </div>
        <div className="btn-group w-100 p-1">
          <button className="btn btn-outline-dark" onClick={() => props.setView('catalog', {})}>Continue Shopping</button>
          <button className="btn btn-outline-info" onClick={() => props.setView('cart', {})}>Go to Cart</button>
        </div>
      </div>
    </div>
  );
}
