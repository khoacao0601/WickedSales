import React from 'react';

export default function ProductListItem(props) {
  const currency = (props.content.price / 100).toFixed(2);

  return (
    <div className="d-inline-block card col-xl-2 col-lg-4 col-md-3 col-sm-3 col-9 ml-5 mt-5 shadow-lg p-3 mb-5 bg-white" onClick={() => props.setView('details', { productId: props.content.productId })}>
      <img src={props.content.image} className="card-img-top"/>
      <div className="card-body border-top">
        <h5>{props.content.name}</h5>
        <p className="card-text">{props.content.shortDescription}</p>
        <p className="card-text">${currency}</p>
      </div>
    </div>
  );
}
