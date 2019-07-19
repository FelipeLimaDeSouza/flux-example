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

// Create main View Controller
class Application extends Component {

  state = getApplicationState();
  
  // Add change listener to store
  componentDidMount() {
    Products.addChangeListener(this._onChange);
    Cart.addChangeListener(this._onChange);
  }

  // Remove change listener from store
  componentWillUnmount() {
    Products.removeChangeListener(this._onChange);
    Cart.removeChangeListener(this._onChange);
  }

  // Update state when store change
  _onChange = () => {
    this.setState(getApplicationState());
  }

  renderCartComponent() {
    return <CartComponent cart={this.state.cart} />;
  }

  renderProductsComponent() {
    return <ProductsComponent products={this.state.products} />;
  }

  // Render the main component and childs, passing state via props
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
