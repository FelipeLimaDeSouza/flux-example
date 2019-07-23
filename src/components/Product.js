import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

class ProductComponent extends Component {
  render() {
    return (
      <View style={{marginVertical: 20}}>
        <Text>{this.props.product.name}</Text>
        <Text>Price: {this.props.product.price} </Text>
        <Text>Quantity: {this.props.product.inventory} </Text>

        <TouchableOpacity onPress={this.props.addProduct.bind(null, this.props.product)}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default ProductComponent;
