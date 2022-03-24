import {
  SHOW_AUTH_MODAL,
  HIDE_AUTH_MODAL
} from '../constants/modalConstanst'

import {
  CLEAR_LOGIN_FAIL,
  CLEAR_REGISTER_FAIL
} from "../constants/userConstants";

export const showAuthModal = (actionForm) => async(dispatch, getState) => {
  dispatch({
    type: SHOW_AUTH_MODAL,
    payload: actionForm
  })
}

export const hideAuthModal = () => async(dispatch, getState) => {
  dispatch({
    type: CLEAR_LOGIN_FAIL
  })
  dispatch({
    type: CLEAR_REGISTER_FAIL
  })
  dispatch({
    type: HIDE_AUTH_MODAL
  })
}