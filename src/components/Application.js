import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Products from '../stores/Products';
import Cart from '../stores/Cart';
import ProductsComponent from './Products';
import CartComponent from './Cart';

function getApplicationState () {
  return {
    products: Products.getProducts(),
    cart: {
      items: Cart.getCartItems(),
      amount: Cart.getCartAmount(),
      total: Cart.getCartTotal(),
      isVisible: Cart.getCartVisible()
    }
  };
}

class Application extends Component {

  state = getApplicationState();
  
  componentDidMount() {
    Products.addChangeListener(this._onChange);
    Cart.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    Products.removeChangeListener(this._onChange);
    Cart.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState(getApplicationState());
  }

  renderCartComponent() {
    return <CartComponent cart={this.state.cart} />;
  }

  renderProductsComponent() {
    return <ProductsComponent products={this.state.products} />;
  }

  render() {
    return (<View>
        <Text>Beer Shopping App</Text>
        {this.renderCartComponent()}
        {this.renderProductsComponent()}
      </View>
    );
  }
};

export default Application;
