import App from '../dispatcher/App';
import { EventEmitter } from 'events';
import CartConstants from '../constants/Cart';

let _products = [];

function loadProducts (data) {
  _products = data;
}

class ProductsFactory extends EventEmitter{

  getProducts () {
    return _products;
  }

  emitChange () {
    this.emit('change');
  }

  addChangeListener (callback) {
    this.on('change', callback);
  }

  removeChangeListener (callback) {
    this.removeListener('change', callback);
  }

}

let Products = new ProductsFactory();

App.register(function (payload) {
  let action = payload.action;

  switch (action.actionType) {
    case CartConstants.LOAD_PRODUCTS:
      loadProducts(action.data);
      break;
    default:
      return;
  }

  Products.emitChange();
});

export default Products;
