import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import CartActions from '../actions/Cart';

class Cart extends Component {

  toggleCaartDisplay = () => {
    CartActions.toggleCartVisible(!this.props.cart.isVisible);
  }

  removeProduct = (productId) => {
    CartActions.removeFromCart(productId);
  }

  renderProductsList() {
    let products = this.props.cart.items;

    return Object.keys(products).map(product => {
      return (
        <View key={products[product].id}>
          <Text>{products[product].name}</Text>
          <Text>{products[product].amount} x $ {products[product].price}</Text>
          <TouchableOpacity onPress={this.removeProduct.bind(null, products[product])}>
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      )
    });
  }

  render(){
    return (
      <View>
        <View>
          <TouchableOpacity onPress={this.toggleCaartDisplay}>
            <Text>Show Cart ({this.props.cart.amount})</Text>
          </TouchableOpacity>
        </View>

        <View>

          <TouchableOpacity onPress={this.toggleCaartDisplay}>
            <Text>icon</Text>
          </TouchableOpacity>

          <View style={{display: this.props.cart.isVisible ? 'flex' : 'none'}}>
            {this.renderProductsList()}
          </View>

          <Text>Total: {this.props.cart.total}</Text>
        </View>
      </View>
    );
  }
};

export default Cart;
