import axios from "axios";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";
import { CART_CLEAR_ITEMS } from "../constants/cartConstants";

import {
  HIDE_AUTH_MODAL
} from "../constants/modalConstanst";
import { webAPIURL } from "../../AppSettings";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(
      `${webAPIURL}/user/auth`,
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`
    localStorage.setItem('userInfo', JSON.stringify(data))
    dispatch({
      type: HIDE_AUTH_MODAL
    })
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message ?
          error.response.data.message : error.message
    })
    delete axios.defaults.headers.common["Authorization"]
  }
}

export const signup = (firstName, lastName, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(
      `${webAPIURL}/user`,
      { firstName, lastName, email, password},
      config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))

    dispatch({
      type: HIDE_AUTH_MODAL
    })
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message ?
          error.response.data.message: error.message
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('cartItems')
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: CART_CLEAR_ITEMS })
  delete axios.defaults.headers.common["Authorization"];
}