import React from 'react';
import RemoveItemModal from './removeModal';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currency: null
    };
    this.removeAll = this.removeAll.bind(this);
    this.addOne = this.addOne.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.toggleModalBox = this.toggleModalBox.bind(this);
  }

  componentDidMount() {
    const currencyCalculate = this.props.item.price / 100;
    currencyCalculate.toFixed(2);
    this.setState({ currency: currencyCalculate });
  }

  deleteOne() {
    if (this.props.item.quanity > 1) {
      return this.props.remove(this.props.item.cartItemId);
    } if (this.props.item.quanity === 1) {
      return this.setState({ showModal: !this.state.showModal });
    }
  }

  addOne() {
    return this.props.addItem(this.props.item);
  }

  toggleModalBox() {
    this.setState({ showModal: !this.state.showModal });
  }

  removeAll() {
    return this.props.removeAll(this.props.item.productId);
  }

  render() {
    const modal = this.state.showModal ? <RemoveItemModal toggleModal={this.toggleModalBox} remove={this.props.removeAll} removeProduct={this.props.item} /> : null;
    return (
      <div className="d-flex justify-content-center">
        <div className="cartItem border border-dark mt-2 w-50 p-3 rounded-lg">
          <img src={this.props.item.image} className="cartImage float-left img-thumbnail shadow p-3 rounded rounded-lg mr-3"></img>
          <div className="center-block font-weight-bold">{this.props.item.name}</div>
          <div className="font-italic">${this.state.currency}</div>
          <div>{this.props.item.shortDescription}</div>
          <div className="d-flex justify-content-center">
            <div className="d-inline-block justify-content-center mt-3">
              <div className="d-flex align-items-center mr-1 font-weight-bold">Quantity: </div>
              <div className="border d-flex justify-content-around mt-1">
                <button onClick={this.addOne} className="btn btn-outline-danger w-50">+</button>
                <div className="d-flex align-items-center ml-3 mr-3">
                  {this.props.item.quanity}
                </div>
                <button onClick={this.deleteOne} className="btn btn-outline-danger w-50">-</button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <div className="removeAll" onClick={this.toggleModalBox}>Remove</div>
          </div>
        </div>
        {modal}
      </div>
    );
  }
}
