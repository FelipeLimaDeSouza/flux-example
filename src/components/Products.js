import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Cart from '../actions/Cart';
import ProductsMock from '../utils/Products';
import Product from './Product';

class Products extends Component {

  // Load products when the component render
  componentDidMount() {
    this._loadProducts();
  }

  // Request products from somewhere
  _loadProducts() {
    setTimeout(Cart.loadProducts.bind(null, ProductsMock.load()));
  }

  // Parse our product list in Product component
  renderProducts () {
    return this.props.products.map((product, index) => {
      return <Product key={product.id} product={product} addProduct={this.addProduct} />
    });
  }

  // Add Product action
  addProduct = (product) => {
    Cart.addToCart(product);
  }

  // Render product view
  render() {
    return (
      <View>
        {this.renderProducts()}
      </View>
    );
  }
};

export default Products;
