import React from 'react';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      creditCard: '',
      creditCardName: '',
      month: '',
      year: '',
      cvv: '',
      shippingAddress: '',
      suit: '',
      city: '',
      state: '',
      zipcode: '',
      status: '',
      total: '',
      finalTax: '',
      finalTotal: '',
      disabled: '',
      orderButton: 'Fill in Form',
      validationname: '',
      validationemail: '',
      validationphone: '',
      validationshippingAddress: '',
      validationcity: '',
      validationstate: '',
      validationzipcode: '',
      validationcreditCardName: '',
      validationcreditCard: '',
      validationmonth: '',
      validationyear: '',
      validationcvv: ''

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

  async checkEmpty() {
    debugger;

    if (this.state.name && this.state.email && this.state.phone && this.state.shippingAddress && this.state.city && this.state.state && this.state.zipcode && this.state.creditCardName && this.state.creditCard && this.state.month && this.state.year && this.state.cvv) {
      if (this.state.year === 'YYYY' || this.state.state === 'Choose State...' || this.state.month === 'MM') {
        await this.setState({ disabled: 'disabled' });
        await this.setState({ orderButton: 'Fill in Form' });
      } else {
        await this.setState({ disabled: '' });
        await this.setState({ orderButton: 'Place Order' });
        await this.setState({ status: '' });
      }
    } else {
      await this.setState({ disabled: 'disabled' });
      await this.setState({ orderButton: 'Fill in Form' });
    }

  }

  async handleChange() {
    const RegexcheckNum = RegExp(/^[0-9]*$/);
    const RegexEmpty = RegExp(/^$/);
    const value = event.target.value;

    switch (event.target.name) {
      case 'phone':
        if (RegexcheckNum.test(event.target.value)) {
          await this.setState({ [event.target.name]: event.target.value });
          await this.setState({ validationphone: '' });

          if (RegexEmpty.test(event.target.value)) {
            await this.setState({ validationphone: 'is-invalid' });
            await this.setState({ status: '* Please enter all required fields' });
          }
        }
        break;
      case 'creditCard':
        if (RegexcheckNum.test(event.target.value)) {
          await this.setState({ [event.target.name]: event.target.value });
          await this.setState({ validationcreditCard: '' });

          if (RegexEmpty.test(event.target.value)) {
            await this.setState({ validationcreditCard: 'is-invalid' });
            await this.setState({ status: '* Please enter all required fields' });
          }
        }
        break;
      case 'cvv':
        if (RegexcheckNum.test(event.target.value)) {
          await this.setState({ [event.target.name]: event.target.value });
          await this.setState({ validationcvv: '' });

          if (RegexEmpty.test(event.target.value)) {
            await this.setState({ validationcvv: 'is-invalid' });
            await this.setState({ status: '* Please enter all required fields' });
          }
        }
        break;
      case 'zipcode':
        if (RegexcheckNum.test(event.target.value)) {
          await this.setState({ [event.target.name]: event.target.value });
          await this.setState({ validationzipcode: '' });

          if (RegexEmpty.test(event.target.value)) {
            await this.setState({ validationzipcode: 'is-invalid' });
            await this.setState({ status: '* Please enter all required fields' });
          }
        }
        break;
      case 'name':
        await this.setState({ [event.target.name]: event.target.value });
        await this.setState({ validationname: '' });
        if (RegexEmpty.test(event.target.value)) {
          await this.setState({ validationname: 'is-invalid' });
          await this.setState({ status: '* Please enter all required fields' });
        }
        break;
      case 'shippingAddress':
        await this.setState({ [event.target.name]: event.target.value });
        await this.setState({ validationshippingAddress: '' });
        if (RegexEmpty.test(event.target.value)) {
          await this.setState({ validationshippingAddress: 'is-invalid' });
          await this.setState({ status: '* Please enter all required fields' });
        }
        break;
      case 'city':
        await this.setState({ [event.target.name]: event.target.value });
        await this.setState({ validationcity: '' });
        if (RegexEmpty.test(event.target.value)) {
          await this.setState({ validationcity: 'is-invalid' });
          await this.setState({ status: '* Please enter all required fields' });
        }
        break;
      case 'creditCardName':
        await this.setState({ [event.target.name]: event.target.value });
        await this.setState({ validationcreditCardName: '' });
        if (RegexEmpty.test(event.target.value)) {
          await this.setState({ validationcreditCardName: 'is-invalid' });
          await this.setState({ status: '* Please enter all required fields' });
        }
        break;
      case 'email':
        await this.setState({ [event.target.name]: event.target.value });
        await this.setState({ validationemail: '' });
        if (RegexEmpty.test(event.target.value)) {
          await this.setState({ validationemail: 'is-invalid' });
          await this.setState({ status: '* Please enter all required fields' });
        }
        break;
      case 'state':
        await this.setState({ [event.target.name]: event.target.value });
        await this.setState({ validationstate: '' });
        if (value === 'Choose State...') {
          await this.setState({ validationstate: 'is-invalid' });
          await this.setState({ status: '* Please enter all required fields' });
        }
        break;
      case 'month':
        await this.setState({ [event.target.name]: event.target.value });
        await this.setState({ validationmonth: '' });
        if (value === 'MM') {
          await this.setState({ validationmonth: 'is-invalid' });
          await this.setState({ status: '* Please enter all required fields' });
        }
        break;
      case 'year':
        await this.setState({ [event.target.name]: event.target.value });
        await this.setState({ validationyear: '' });
        if (value === 'YYYY') {
          await this.setState({ validationyear: 'is-invalid' });
          await this.setState({ status: '* Please enter all required fields' });
        }
        break;
    }

    this.checkEmpty();
  }

  componentDidMount() {
    if (!this.state.name || !this.state.creditCard || !this.state.shippingAddress) {
      this.setState({ disabled: 'disabled' });
    }

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
          <div className="border border-dark rounded-lg col-xl-6 col-lg-11 col-md-11 col-sm-11 col-11 d-flex justify-content-center">
            <form onSubmit={this.checkEmpty}>
              <hr></hr>
              <h3 className="ml-5">Information</h3>
              <div className="form-row">
                <div className="form-group w-85 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <label><i className="fas fa-user"></i> Name: * </label>
                  <input type="text" maxLength="65" className={`form-control ${this.state.validationname}`} placeholder="Your Name" name="name" value={this.state.name} onChange={this.handleChange}></input>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-xl-6 col-lg-5 col-md-5 col-sm-5 col-12">
                  <label><i className="fas fa-at"></i> Email: * </label>
                  <input type="text" maxLength="254" className={`form-control ${this.state.validationemail}`} placeholder="Your Email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                </div>
                <div className="form-group col-xl-6 col-lg-5 col-md-5 col-sm-5 col-12">
                  <label><i className="fas fa-phone"></i> Phone Number: * </label>
                  <input type="tel" maxLength="11" className={`form-control ${this.state.validationphone}`} placeholder="Your phone #" name="phone" value={this.state.phone} onChange={this.handleChange}></input>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group w-85 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                  <label><i className="fas fa-map-marked-alt"></i> Address: * </label>
                  <input type="text" className={`form-control ${this.state.validationshippingAddress}`} placeholder="123 New St." name="shippingAddress" value={this.state.shippingAddress} onChange={this.handleChange}></input>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group w-85 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                  <label><i className="fas fa-map-marked-alt"></i> Address 2: </label>
                  <input type="text" className="form-control" placeholder="Apartment #" name="suit" value={this.state.suit} onChange={this.handleChange}></input>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group w-85 col-xl-6 col-lg-4 col-md-4 col-sm-4 col-12">
                  <label><i className="fas fa-city"></i> City: * </label>
                  <input type="text" className={`form-control ${this.state.validationcity}`} placeholder="City" name="city" value={this.state.city} onChange={this.handleChange}></input>
                </div>
                <div className="form-group w-85 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-12">
                  <label><i className="fas fa-flag-usa"></i> State: * </label>
                  <select type="text" className={`form-control ${this.state.validationstate}`}placeholder="State" name="state" value={this.state.state} onChange={this.handleChange}>
                    <option defaultValue >Choose State...</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
                <div className="form-group w-85 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-12">
                  <label><i className="fab fa-usps"></i> Zipcode: * </label>
                  <input type="text" maxLength="5" className={`form-control ${this.state.validationzipcode}`} placeholder="Zipcode" name="zipcode" value={this.state.zipcode} onChange={this.handleChange}></input>
                </div>
              </div>
              <hr></hr>
              <h3 className="ml-5">Payment</h3>
              <div className="form-row">
                <div className="form-group w-85 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <label><i className="fas fa-address-book"></i> Name on Card: * </label>
                  <input type="text" className={`form-control ${this.state.validationcreditCardName}`} placeholder="Name on Card" name="creditCardName" value={this.state.creditCardName} onChange={this.handleChange}></input>
                </div>
                <div className="form-group w-85 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <label><i className="far fa-credit-card"></i> Credit Card: * </label>
                  <input type="text" maxLength="20" className={`form-control ${this.state.validationcreditCard}`} placeholder="Credit Card Number" name="creditCard" value={this.state.creditCard} onChange={this.handleChange}></input>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group w-85 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                  <label><i className="far fa-calendar-alt"></i> Month: * </label>
                  <select type="text" className={`form-control ${this.state.validationmonth}`} placeholder="Credit Card Number" name="month" value={this.state.month} onChange={this.handleChange}>
                    <option defaultValue>MM</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="form-group w-85 col-xl-5 col-lg-4 col-md-4 col-sm-4 col-12">
                  <label><i className="far fa-calendar-alt"></i> Year: * </label>
                  <select type="text" className={`form-control ${this.state.validationyear}`} placeholder="Credit Card Number" name="year" value={this.state.year} onChange={this.handleChange}>
                    <option defaultValue>YYYY</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2029">2030</option>
                  </select>
                </div>
                <div className="form-group w-85 col-xl-3 col-lg-4 col-md-4 col-sm-4 col-12">
                  <label><i className="fas fa-unlock"></i> CVV: * </label>
                  <input type="text" maxLength="3" pattern="\d*" className={`form-control ${this.state.validationcvv}`} placeholder="CVV" name="cvv" value={this.state.cvv} onChange={this.handleChange}></input>
                </div>
              </div>
              <p className="text-danger">* required</p>
              <div className="text-danger">{this.state.status}</div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div className="border border-dark rounded-lg col-xl-6 col-lg-11 col-md-11 col-sm-11 col-11">
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
          <button onClick={this.checkEmpty} className="btn btn-outline-success mb-3" disabled={this.state.disabled}><i className="fas fa-check"></i> {this.state.orderButton}</button>
        </div>
      </div>
    );
  }
}
