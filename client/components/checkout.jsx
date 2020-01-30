import React from 'react';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: '',
      status: '',
      total: '',
      finalTax: '',
      finalTotal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkEmpty = this.checkEmpty.bind(this);
    this.back = this.back.bind(this);
    this.thankyou = this.thankyou.bind(this);
  }

  sendInfos() {
    const sendValue = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sendValue)
    });
    this.props.setEmptyCart();
    this.props.setView('thankyou');
  }

  checkEmpty() {
    event.preventDefault();
    if (!this.state.name || !this.state.creditCard || !this.state.shippingAddress) {
      return this.setState({ status: 'Please enter all the required fields *' });
    } else {
      this.sendInfos();
    }
  }

  handleChange() {
    const newState = { };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  componentDidMount() {
    var total1 = null;
    var tax = null;
    var total2 = null;

    for (var count = 0; count < this.props.item.length; count++) {
      var currency = this.props.item[count].price / 100;
      total1 += currency;
    }

    total1 = total1.toFixed(2);
    total1 = parseFloat(total1);

    tax = 8.5 * total1 / 100;
    tax = tax.toFixed(2);
    tax = parseFloat(tax);

    total2 = total1 + tax;
    total2 = total2.toFixed(2);

    this.setState({
      total: total1,
      finalTax: tax,
      finalTotal: total2
    });
  }

  back() {
    this.props.setView('cart');
  }

  thankyou() {
    this.props.setView('thankyou');
  }

  render() {
    return (
      <div>
        <h2 className="font-weight-bold d-flex justify-content-center mt-3">Checkout</h2>
        <div className="d-flex justify-content-center">
          <div className="border border-dark rounded-lg col-xl-4 col-lg-3 col-md-4 col-sm-4 col-12 d-flex justify-content-center">
            <form onSubmit={this.checkEmpty}>
              <h3 className="ml-5">Informations</h3>
              <div className="form-group w-85 col-12">
                <label><i className="fas fa-user"></i> Name: * </label>
                <input type="text" className="form-control" placeholder="Your Name" name="name" value={this.state.name} onChange={this.handleChange}></input>
              </div>
              <div className="form-group w-85 col-12">
                <label><i className="far fa-credit-card"></i> Credit Card: * </label>
                <input type="text" className="form-control" placeholder="Credit Card Number" name="creditCard" value={this.state.creditCard} onChange={this.handleChange}></input>
              </div>
              <div className="form-group w-85 col-12">
                <label><i className="fas fa-map-marked-alt"></i> Address: * </label>
                <input type="text" className="form-control" placeholder="Address" name="shippingAddress" value={this.state.shippingAddress} onChange={this.handleChange}></input>
              </div>
              <p className="text-danger">* required</p>
              <div className="text-danger">{this.state.status}</div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div className="border border-dark rounded-lg col-xl-4 col-lg-3 col-md-4 col-sm-4 col-12">
            <h2 className="d-flex justify-content-center">Summary</h2>
            <div className="d-flex justify-content-center">---------------------------</div>
            <div className="d-flex justify-content-center">Subtotal: ${this.state.total}</div>
            <div className="d-flex justify-content-center">Shipping: Free</div>
            <div className="d-flex justify-content-center">Tax: ${this.state.finalTax}</div>
            <div className="d-flex justify-content-center">--------------------------</div>
            <div className="d-flex justify-content-center">Total: ${this.state.finalTotal}</div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button onClick={this.back} className="d-block btn btn-outline-dark"><i className="far fa-arrow-alt-circle-left fa-lg"></i> Back to Cart</button>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button onClick={this.checkEmpty} className="btn btn-outline-success mb-3"><i className="fas fa-check"></i> Place Order</button>
        </div>
      </div>
    );
  }
}
