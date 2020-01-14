import React from 'react';
import CartSummaryItem from './cartSummaryItem';

export default function CartSummary(props) {

  function checkEmptyCart() {
    if (props.item.length === 0) {
      return <div className="d-flex justify-content-center">
        <h1 className="font-italic">Empty Cart</h1>
        <button onClick={() => props.setView('catalog', { productId: {} })} className="backButton btn btn-secondary"><i className="fas fa-arrow-left"></i> Back</button>
      </div>;
    } else {
      const renderItems = props.item.map((item, index) => <CartSummaryItem key={index} item={item} remove={props.remove}/>);
      var total = null;
      for (var count = 0; count < renderItems.length; count++) {
        var currency = renderItems[count].props.item.price / 100;
        total += currency;
      }
      total = total.toFixed(2);

      return <div>
        <button onClick={() => props.setView('catalog', { productId: {} })} className="backButton btn btn-secondary"><i className="fas fa-arrow-left"></i> Back</button>
        {renderItems}
        <div className="total mb-2 mt-3 d-flex justify-content-center font-weight-bold">Total: ${total}</div>
        <div className="d-flex justify-content-center">
          <button onClick={() => props.setView('checkout', { productId: {} })} className="btn btn-warning shadow p-2 rounded mb-3">Process to Checkout</button>
        </div>
      </div>;
    }
  }

  return (
    <div>
      <h2 className="d-flex justify-content-center mt-3 font-weight-bold">Cart</h2>
      <div>{checkEmptyCart()}</div>
    </div>
  );
}
