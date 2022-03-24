import {
  SHOW_AUTH_MODAL,
  HIDE_AUTH_MODAL
} from "../constants/modalConstanst";

export const modalReducers = (state={ showAuthModal: false}, action) => {
  switch (action.type) {
    case SHOW_AUTH_MODAL:
      return {
        ...state,
        showAuthModal: true,
        actionForm: action.payload
      }
    case HIDE_AUTH_MODAL:
      return {
        ...state,
        showAuthModal: false,
        actionForm: null
      }
    default:
      return state
  }
}