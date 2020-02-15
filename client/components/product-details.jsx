import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    };
  }

  componentDidMount() {
    fetch('/api/products?productId=' + this.props.idProps.params.productId)
      .then(response => response.json())
      .then(data => this.setState({ product: data }))
      .catch(error => alert(error));
  }

  render() {
    const currency = this.state.product.price / 100;
    currency.toFixed(2);
    return (
      <div className="containerFullInfos col-10 shadow-lg p-3 mb-5 bg-white rounded mt-5">
        <div className="back" onClick={() => this.props.setView('catalog', { productId: {} })}>
          <i className="fas fa-arrow-circle-left fa-lg"></i>
          Back to catalog
        </div>
        <img src={this.state.product.image} className="img-thumbnail ml-5"></img>
        <h3>{this.state.product.name}</h3>
        <h5>${currency}</h5>
        <button className="btn btn-warning mb-1" onClick={() => this.props.addItems(this.state.product)}>Add to Cart</button>
        <p>{this.state.product.shortDescription}</p>
        <p>{this.state.product.longDescription}</p>
      </div>
    );
  }
}
