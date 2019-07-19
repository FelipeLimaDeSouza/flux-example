import App from '../dispatcher/App';
import CartConstants from '../constants/Cart';

const Cart = {

  loadProducts(data) {
    App.handleViewAction({
      actionType: CartConstants.LOAD_PRODUCTS,
      data: data
    })
  },

  addToCart(productId) {
    App.handleViewAction({
      actionType: CartConstants.CART_ADD,
      product: productId
    })
  },

  removeFromCart(productId) {
    App.handleViewAction({
      actionType: CartConstants.CART_REMOVE,
      product: productId
    })
  },

  toggleCartVisible(isVisible) {
    App.handleViewAction({
      actionType: CartConstants.CART_VISIBLE,
      isVisible: isVisible
    })
  }

}

export default Cart;