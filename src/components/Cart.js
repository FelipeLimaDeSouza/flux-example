import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import CartActions from '../actions/Cart';

class CartComponent extends Component {

  toggleCartDisplay = () => {
    CartActions.toggleCartVisible(!this.props.cart.isVisible);
  }

  removeProduct = (productId) => {
    CartActions.removeFromCart(productId);
  }

  renderProducts() {
    let products = this.props.cart.items;

    return Object.keys(products).map((product, index) => {
      return (
        <View key={products[product].id} style={{marginVertical: 10}}>
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
          <TouchableOpacity onPress={this.toggleCartDisplay}>
            <Text>Show Cart ({this.props.cart.amount})</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={{display: this.props.cart.isVisible ? 'flex' : 'none'}}>
            {this.renderProducts()}
          </View>

          <Text>Total: {this.props.cart.total}</Text>
        </View>
      </View>
    );
  }
};

export default CartComponent;
