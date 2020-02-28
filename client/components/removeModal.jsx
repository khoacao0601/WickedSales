import React from 'react';

export default function RemoveItemModal(props) {
  return (
    <div className="fadeOut position-fixed d-flex h-100 w-100">
      <div className="modal-contents m-auto bg-white border rounded mt-5 p-3 col-xl-4 col-lg-8 col-md-8 col-sm-8 col-11">
        <div className="d-flex justify-content-center">
          <img src={props.removeProduct.image} alt={props.removeProduct.name} className="img-thumbnail rounded col-xl-4 col-lg-8 col-md-8 col-sm-8 col-11" />
        </div>
        <div className="d-flex justify-content-center">
          <p className="m-2">Are you sure you want to remove this item from your cart?</p>
        </div>
        <div className="btn-group w-100 p-1">
          <button className="btn btn-outline-dark w-50" onClick={() => props.toggleModal()}>Cancel</button>
          <button className="btn btn-outline-danger w-50" onClick={() => {
            props.remove(props.removeProduct.productId);
            props.toggleModal();
          }}>Remove</button>
        </div>
      </div>
    </div>
  );
}
