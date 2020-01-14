import React from 'react';

export default function Header(props) {
  return (
    <div className="navigation-bar header border-bottom">
      <nav className="navbar navbar-dark bg-warning text-dark">
        <a onClick={() => props.setView('catalog', { productId: {} })}>Your Neighbor Store <img src="/images/main-icon.png" height="50" width="50" className="img-thumbnail"></img></a>
        <i className="fas fa-shopping-cart fa-2x" onClick={() => props.setView('cart', { productId: {} })}> {props.cartItemCount}</i>
      </nav>
    </div>
  );
}
