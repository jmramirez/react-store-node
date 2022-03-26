import './CheckoutPage.scss'
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import {useEffect, useState} from "react";
import {stripeKey} from "../../AppSettings";
import {useSelector} from "react-redux";
import { Navigate } from 'react-router-dom'
import {CheckoutForm} from "../../components/CheckoutForm/CheckoutForm";

export const CheckoutPage = () => {
  const [stripe, setStripe ] = useState(() => loadStripe(stripeKey))
  const items = useSelector((state) => state.cart.cartItems)
  const [redirectToCart, setRedirectToCart] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    if(!items.length && !formSubmitted) {
      setRedirectToCart(true)
    }
  },[items.length, formSubmitted])

  if(redirectToCart) {
    return <Navigate to="/cart" />
  }

  const submitForm = () => {
    setFormSubmitted(true)
  }

  return(
    <section className="checkout">
      <h2 className="checkout__heading">Checkout</h2>
      <div className="checkout__container">
        <div className="checkout__container-form">
          <Elements stripe={stripe}>
            <CheckoutForm submitForm={submitForm} />
          </Elements>
        </div>
      </div>
    </section>
  )
}