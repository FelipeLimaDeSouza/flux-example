import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

class Product extends Component {

  // Render product view
  render() {
    return (
      <View>
        <Text>{this.props.product.name}</Text>
        <Image source={{uri: this.props.product.image }} style={{width: 40, height: 40}}/>
        <Text>Price: {this.props.product.price} </Text>
        <Text>Quantity: {this.props.product.inventory} </Text>

        <TouchableOpacity onPress={this.props.addProduct.bind(null, this.props.product)}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Product;
