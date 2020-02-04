import React from 'react';
import Header from './header';
import ProductList from './productList';
import ProductDetails from './product-details';
import CartSummary from './cartSummary';
import Checkout from './checkout';
import Thankyou from './thankyou';
import Footer from './footer';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };

    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.setEmptyCart = this.setEmptyCart.bind(this);
    this.removeItems = this.removeItems.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setEmptyCart() {
    this.setState({ cart: [] });
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  changeView() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView} />
          <ProductList setView={this.setView} addItems={this.addToCart}/>
          <Footer />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <ProductDetails setView={this.setView} idProps={this.state.view} addItems={this.addToCart}/>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <CartSummary item={this.state.cart} setView={this.setView} remove={this.removeItems} addItems={this.addToCart}/>
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <Checkout setView={this.setView} setEmptyCart={this.setEmptyCart} item={this.state.cart}/>
          <Footer />
        </div>
      );
    } else if (this.state.view.name === 'thankyou') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <Thankyou setView={this.setView}/>
          <Footer />
        </div>
      );
    }
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => this.setState({ cart: data }))
      .catch(error => alert(error));
  }

  addToCart(product) {
    fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => this.setState({ cart: this.state.cart.concat(data) }))
      .catch(error => alert(error));
  }

  removeItems(itemId) {
    fetch('/api/cart?cartItemId=' + itemId, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(data => this.setState({ cart: data }));
  }

  render() {
    return (
      this.changeView()
    );
  }
}
