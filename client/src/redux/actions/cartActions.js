import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  ADD_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_QUANTITY, CART_CLEAR_ITEMS
} from '../constants/cartConstants'

export const addToCart = (item) => async (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ITEM,
    product: item
  })
  localStorage.setItem('cartITems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (item) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: {
      productId: item.productId,
      colorId: item.colorId,
      storageId: item.storageId
    }
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const addProductQuantity = (item) => async (dispatch, getState) => {
  dispatch({
    type: ADD_PRODUCT_QUANTITY,
    product: item
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const reduceProductQuantity = (item) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_PRODUCT_QUANTITY,
    product: item
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const clearCartItems = () => (dispatch) => {
  localStorage.removeItem('cartItems')
  dispatch({type: CART_CLEAR_ITEMS})
}