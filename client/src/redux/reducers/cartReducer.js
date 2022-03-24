import {
  ADD_PRODUCT_QUANTITY,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR_ITEMS,
  REMOVE_PRODUCT_QUANTITY} from '../constants/cartConstants'

export const cartReducer = ( state = { cartItems:[]}, action) => {
  switch (action.type){
    case CART_ADD_ITEM:
      const item = action.product
      const index = state.cartItems.findIndex(
        x =>
          x.productId === action.product.productId &&
          x.colorId === action.product.colorId &&
          x.storageId === action.product.storageId
      )

      if(index >= 0) {
        const cartItem = Object.assign({}, state.cartItems[index])
        cartItem.quantity = cartItem.quantity + 1
        cartItem.subTotal = cartItem.subTotal + cartItem.price
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.productId !== cartItem.productId || x.colorId !== cartItem.colorId || x.storageId !== cartItem.storageId ? x : cartItem
          )
        }
      } else {
        const quantity = 1
        const subTotal = quantity * item.price
        return {
          ...state,
          cartItems: [...state.cartItems, {...item, quantity, subTotal}]
        }
      }
    case ADD_PRODUCT_QUANTITY:
      const currentIndex = state.cartItems.findIndex(
        x =>
          x.productId === action.product.productId &&
          x.colorId === action.product.colorId &&
          x.storageId === action.product.storageId
      )
      let newItem = Object.assign({}, state.cartItems[currentIndex])
      newItem.quantity = newItem.quantity + 1
      newItem.subTotal = newItem.subTotal + newItem.price
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.productId !== newItem.productId || x.colorId !== newItem.colorId || x.storageId !== newItem.storageId ? x : newItem
        )
      }
    case REMOVE_PRODUCT_QUANTITY:
      const indexToUpdate = state.cartItems.findIndex(
        x =>
          x.productId === action.product.productId &&
          x.colorId === action.product.colorId &&
          x.storageId === action.product.storageId
      )
      let itemToRemove = Object.assign({}, state.cartItems[indexToUpdate])
      itemToRemove.quantity = itemToRemove.quantity - 1
      itemToRemove.subTotal = itemToRemove.subTotal - itemToRemove.price
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.productId !== itemToRemove.productId || x.colorId !== itemToRemove.colorId || x.storageId !== itemToRemove.storageId ? x : itemToRemove
        )
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.productId !== action.payload.productId || x.colorId !== action.payload.colorId || x.storageId !== action.payload.storageId)
      }
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      }
    default:
      return state
  }

}