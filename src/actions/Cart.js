import AppDispatcher from '../dispatcher/App';
import CartConstants from '../constants/Cart';

const Cart = {

  loadProducts(data) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.LOAD_PRODUCTS,
      data: data
    })
  },

  addToCart(productId) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_ADD,
      product: productId
    })
  },

  removeFromCart(productId) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_REMOVE,
      product: productId
    })
  },

  toggleCartVisible(isVisible) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_VISIBLE,
      isVisible: isVisible
    })
  }

}

export default Cart;