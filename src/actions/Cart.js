import App from '../dispatcher/App';
import CartConstants from '../constants/Cart';

const Cart = {

  loadProducts: function (data) {
    App.handleViewAction({
      actionType: CartConstants.LOAD_PRODUCTS,
      data: data
    })
  },

  addToCart: function (productId) {
    App.handleViewAction({
      actionType: CartConstants.CART_ADD,
      product: productId
    })
  },

  removeFromCart: function (productId) {
    App.handleViewAction({
      actionType: CartConstants.CART_REMOVE,
      product: productId
    })
  },

  toggleCartVisible: function (isVisible) {
    App.handleViewAction({
      actionType: CartConstants.CART_VISIBLE,
      isVisible: isVisible
    })
  }

}

export default Cart;