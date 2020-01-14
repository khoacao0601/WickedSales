import React from 'react';

export default function ProductListItem(props) {
  const currency = (props.content.price / 100).toFixed(2);

  return (
    <div className="card product" onClick={() => props.setView('details', { productId: props.content.productId })}>
      <img src={props.content.image} className="card-img-top image"/>
      <h5 className="card-title">{props.content.name}</h5>
      <p className="card-text">{props.content.shortDescription}</p>
      <p className="list-group-item">${currency}</p>
    </div>
  );
}
