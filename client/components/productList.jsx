import React from 'react';
import ProductListItem from './productListItem';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
      .catch(error => alert(error));
  }

  render() {
    const productObject = this.state.products;
    return (
      <div className="productInfo">
        {productObject.map((theOne, index) => <ProductListItem key={index} content={theOne} setView={this.props.setView}/>)}
      </div>
    );
  }
}
