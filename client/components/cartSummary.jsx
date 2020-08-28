import React from 'react';
import CartSummaryItem from './cartSummaryItem';
012345
6789

export default class CartSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  arrayToRend() {
    var itemInCart = [];
    var productIdArr = [];
    var arrayToMap = [];
    var checkPointNumber = [];
    var checkPoint = [];

    for (let i = 0; i < this.props.item.length; i++) {
      itemInCart.push(this.props.item[i]);
    }

    for (let i = 0; i < itemInCart.length; i++) {
      var check = checkPointNumber.indexOf(itemInCart[i].productId);
      if (checkPointNumber.indexOf(itemInCart[i].productId) === -1) {
        checkPointNumber.push(itemInCart[i].productId);
        checkPoint.push(itemInCart[i]);
      } else {
        var add = itemInCart[i];
        checkPoint.splice(check, 0, add);
        checkPointNumber.splice(check, 0, itemInCart[i].productId);
      }
    }

    for (let i = 0; i < checkPoint.length; i++) {
      var repeat = productIdArr.indexOf(checkPoint[i].productId);
      if (productIdArr.indexOf(checkPoint[i].productId) === -1) {
        productIdArr.push(checkPoint[i].productId);
        checkPoint[i].quanity = 1;
        arrayToMap.push(checkPoint[i]);
      } else {
        ++arrayToMap[repeat].quanity;
      }
    }

    return arrayToMap;
  }

  checkEmptyCart() {
    if (this.props.item.length === 0) {
      return <div className="d-flex justify-content-center">
        <h1 className="font-italic">Empty Cart</h1>
      </div>;
    } else {
      var arrayToMap = this.arrayToRend();
      const renderItems = arrayToMap.map((item, index) => <CartSummaryItem key={index} item={item} remove={this.props.remove} addItem={this.props.addItems} removeAll={this.props.removeAll}/>);
      var total = null;
      for (var count = 0; count < this.props.item.length; count++) {
        var currency = this.props.item[count].price / 100;
        total += currency;
      }
      total = total.toFixed(2);
      var totalItems = this.props.item.length;

      return <div>
        {renderItems}
        <div className="total mb-2 mt-3 d-flex justify-content-center font-weight-bold">Total: ${total}</div>
        <div className="total mb-2 d-flex justify-content-center font-weight-bold">Items: {totalItems}</div>
        <div className="d-flex justify-content-center">
          <button onClick={() => this.props.setView('checkout')} className="btn btn-warning shadow p-2 rounded mb-3">Process to Checkout</button>
        </div>
      </div>;
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <i className="far fa-arrow-alt-circle-left backButton col d-flex justify-content-center align-items-center" onClick={() => this.props.setView('catalog')}>Back to Catalog</i>
            <h2 className="font-weight-bold myCart col d-flex justify-content-center">Cart</h2>
            <div className="col"></div>
          </div>
        </div>
        <div>{this.checkEmptyCart()}</div>
      </div>
    );
  }
}
