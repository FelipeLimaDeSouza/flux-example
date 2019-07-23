import AppDispatcher from '../dispatcher/App';
import { EventEmitter } from 'events';
import CartConstants from '../constants/Cart';

let _products = {}, _cartVisible = false;

function ProductCartModel(product) {
  this.id = product.id;
  this.name = product.name;
  this.price = product.price;
  this.sku = product.sku;
  this.amount = 1;
}

function _addItem (product) {
  if(!_products[product.id]) {
    return _products[product.id] = new ProductCartModel(product);
  }

  _products[product.id].amount += 1;
}

function _removeItem (product) {
  delete _products[product.id];
}

function _setVisibility (visibility) {
  _cartVisible = visibility;
}

class CartFactory extends EventEmitter{

  getCartItems () {
    return _products;
  }

  getCartAmount () {
    return Object.keys(_products).length;
  }

  getCartTotal () {
    let total = 0;

    for (let prod in _products) {
      total += _products[prod].price * _products[prod].amount;
    }

    return parseFloat(total.toFixed(2));
  }

  getCartVisible () {
    return _cartVisible;
  }

  emitChange () {
    this.emit('change');
  }

  addChangeListener (callback) {
    this.on('change', callback)
  }

  removeChangeListener (callback) {
    this.removeListener('change', callback)
  }
}

let CartStore = new CartFactory();

AppDispatcher.register(function (payload) {
  let action = payload.action;

  switch(action.actionType) {
    case CartConstants.CART_ADD:
      _addItem(action.product)
      break;
    case CartConstants.CART_REMOVE:
      _removeItem(action.product)
      break;
    case CartConstants.CART_VISIBLE:
      _setVisibility(action.isVisible)
      break;
    default:
      return;
  }

  CartStore.emitChange();
});

export default CartStore;
