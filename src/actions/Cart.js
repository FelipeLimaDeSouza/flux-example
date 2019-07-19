import App from '../dispatcher/App';
import CartConstants from '../constants/Cart';

const Cart = {

  // Load initial products
  loadProducts: function (data) {
    App.handleViewAction({
      actionType: CartConstants.LOAD_PRODUCTS,
      data: data
    })
  },

  // Add item to cart
  addToCart: function (productId) {
    App.handleViewAction({
      actionType: CartConstants.CART_ADD,
      product: productId
    })
  },

  // Remove item from cart
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