import React, { Component } from 'react';
import {
  View
} from 'react-native';
import CartActions from '../actions/Cart';
import ProductsMock from '../utils/Products';
import ProductComponent from './Product';

class ProductsComponent extends Component {

  componentDidMount() {
    this._loadProducts();
  }

  _loadProducts() {
    CartActions.loadProducts.bind(null, ProductsMock.load());
  }

  renderProducts () {
    return this.props.products.map((product, index) => {
      return <ProductComponent key={product.id} product={product} addProduct={this.addProduct} />
    });
  }

  addProduct = (product) => {
    CartActions.addToCart(product);
  }

  render() {
    return (
      <View>
        {this.renderProducts()}
      </View>
    );
  }
};

export default ProductsComponent;
