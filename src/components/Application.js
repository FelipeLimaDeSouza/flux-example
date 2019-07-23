import React, { Component } from 'react';
import {
  ScrollView,
  Text
} from 'react-native';
import ProductsStore from '../stores/Products';
import CartStore from '../stores/Cart';
import ProductsComponent from './Products';
import CartComponent from './Cart';

function getApplicationState () {
  return {
    products: ProductsStore.getProducts(),
    cart: {
      items: CartStore.getCartItems(),
      amount: CartStore.getCartAmount(),
      total: CartStore.getCartTotal(),
      isVisible: CartStore.getCartVisible()
    }
  };
}

class Application extends Component {

  state = getApplicationState();
  
  componentDidMount() {
    ProductsStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ProductsStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState(getApplicationState());
  }

  renderCartComponent() {
    return <CartComponent cart={this.state.cart} />;
  }

  renderProducts() {
    return <ProductsComponent products={this.state.products} />;
  }

  render() {
    return (<ScrollView>
        <Text>Beer Shopping App</Text>
        {this.renderCartComponent()}
        {this.renderProducts()}
      </ScrollView>
    );
  }
};

export default Application;
