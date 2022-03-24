import {
  SHOW_AUTH_MODAL,
  HIDE_AUTH_MODAL
} from "../constants/modalConstanst";
import {showAuthModal} from "../actions/modalActions";

export const modalReducers = (state={ showAuthModal: false}, action) => {
  switch (action.type) {
    case SHOW_AUTH_MODAL:
      return {
        ...state,
        showAuthModal: !state.showAuthModal,
        actionForm: action.payload
      }
    case HIDE_AUTH_MODAL:
      return {
        ...state,
        showAuthModal: action.payload,
        actionForm: null
      }
    default:
      return state
  }
}