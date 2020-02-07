import React from 'react';

export default function Thankyou(props) {
  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <h2>Thank you for your order</h2>
      </div>
      <div className="d-flex justify-content-center" onClick={() => props.setView('catalog')}>Continue Shopping</div>
      <diV className="empty"></diV>
    </div>
  );
}
