import React from 'react';
import ItemModal from './itemModal';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      showModal: false
    };

    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    fetch('/api/products?productId=' + this.props.idProps.params.productId)
      .then(response => response.json())
      .then(data => this.setState({ product: data }))
      .catch(error => alert(error));
  }

  showModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const currency = this.state.product.price / 100;
    currency.toFixed(2);

    const modal = this.state.showModal ? <ItemModal setView={this.props.setView} product={this.state.product} close={this.showModal}/> : null;
    return (
      <div className="containerFullInfos col-10 shadow-lg p-3 mb-5 bg-white rounded mt-5">
        {modal}
        <div className="back w-25" onClick={() => this.props.setView('catalog', { productId: {} })}>
          <i className="fas fa-arrow-circle-left fa-lg"></i>
          Back to catalog
        </div>
        <img src={this.state.product.image} className="img-thumbnail ml-5"></img>
        <h3>{this.state.product.name}</h3>
        <h5>${currency}</h5>
        <button type="button" className="btn btn-warning mb-1" data-toggle="modal" data-target="#modalbox" onClick={() => {
          this.props.addItems(this.state.product);
          this.showModal();
        }}>Add to Cart</button>
        <p>{this.state.product.shortDescription}</p>
        <p>{this.state.product.longDescription}</p>
      </div>
    );
  }
}
