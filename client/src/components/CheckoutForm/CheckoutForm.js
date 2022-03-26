import './CheckoutForm.scss'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {CartSummary} from "../CartSummary/CartSummary";
import {Link} from "react-router-dom";
import {webAPIURL} from "../../AppSettings";
import axios from "axios";
import {clearCartItems} from "../../redux/actions/cartActions";

export const CheckoutForm = ({ submitForm }) => {
  const { register, handleSubmit,  formState: { errors }} = useForm()
  const orderItems = useSelector((state) => state.cart.cartItems)
  const [order,setOrder] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [successfullySubmitted, setSuccessfullySubmitted ] = useState(false)
  const [notSubmitted, setNotSubmitted] = useState(false)
  const [error, setError] = useState('')
  const stripe = useStripe()
  const elements = useElements()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()

  useEffect(() => {
    const reducer = (accumulator, cartItem) => accumulator + cartItem.subTotal;
    const total = orderItems.reduce(reducer,0)
    setSubTotal(total)
  }, [orderItems])


  const onSubmit = async (data, e) => {
    try {
      e.preventDefault()
      const stripeToken = await stripe.createToken(elements.getElement(CardElement), data.nameOnCard)
      console.log(stripeToken)
      const response = await axios.post(
        `${webAPIURL}/orders`,
        {
          stripeToken: stripeToken.token.id,
          firstName: data.firstName,
          lastName: data.lastName,
          address1 : data.address1,
          address2: data.address2,
          townCity: data.townCity,
          country: data.country,
          postCode: data.postCode,
          items: orderItems.map(item => {
            return {
              productId: item.productId,
              colorId: item.colorId,
              storageId: item.storageId,
              quantity: item.quantity
            }
          })
        },
        {
          headers: {
            'Authorization': `Bearer ${userInfo.token}`
          }
        }
      )
      if(response){
        submitForm()
        setSuccessfullySubmitted(true)
        setNotSubmitted(false)
        setOrder(orderItems)
        dispatch(clearCartItems())
      }
    } catch (error) {
      setNotSubmitted(true)
      console.log(error)
      setError(error.response.data.message)
    }
  }


  return(
    <>
      <form className="form--checkout" onSubmit={handleSubmit(onSubmit)}>
        {!successfullySubmitted &&
          (
            <div className="form-content form-content--checkout">
              <h3 className="form-content__header--md">Delivery Address</h3>
              <label className="form-content__label">First Name</label>
              <input className="form-content__input" type="text" {...register("firstName", {required: true})} autoComplete="off"/>
              {errors.firstName &&( <p className="form__error">You must provide First Name</p>)}
              <label className="form-content__label">Last Name</label>
              <input className="form-content__input" type="text" {...register("lastName", {required: true})} autoComplete="off"/>
              {errors.lastName &&( <p className="form__error">You must provide Last Name</p>)}
              <label className="form-content__label">Address</label>
              <input className="form-content__input" type="text" {...register("address1", {required: true})} autoComplete="off"/>
              {errors.address &&( <p className="form__error">You must provide Address</p>)}
              <label className="form-content__label">Address 2</label>
              <input className="form-content__input" type="text" {...register("address2")} autoComplete="off"/>
              <label className="form-content__label">Town / City</label>
              <input className="form-content__input" type="text" {...register("townCity", {required: true})} autoComplete="off"/>
              {errors.city &&( <p className="form__error">You must provide your City</p>)}
              <label className="form-content__label">Country</label>
              <input className="form-content__input" type="text" {...register("country", {required: true})} autoComplete="off"/>
              {errors.firstName &&( <p className="form__error">You must provide your Country</p>)}
              <label className="form-content__label">Postal Code</label>
              <input className="form-content__input" type="text" {...register("postCode", {required: true})} autoComplete="off"/>
              {errors.firstName &&( <p className="form__error">You must provide Postal Code</p>)}
              <h3 className="form-content__header--md">Payment Details</h3>
              <label className="form-content__label">Name on Card</label>
              <input className="form-content__input" type="text" {...register("nameOnCard", {required: true})} autoComplete="off"/>
              {errors.firstName &&( <p className="form__error">You must provide Name on Card</p>)}
              <label className="form-content__label">Credit/debit card details</label>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#323232',
                      },
                      lineHeight: '24px',
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
              />
              <input type="submit" value="Place your order" className="form--checkout__action"/>
            </div>
          )
        }
        <div className="form-content form-content--summary">
          <div>
            <h3 className="form-content__header--md">Your Cart</h3>
            <ul>
              <CartSummary items={successfullySubmitted? order : orderItems} />
              <li className="form--checkout__total">
                Total: ${subTotal}
              </li>
            </ul>
          </div>
          { successfullySubmitted && (
            <div className="form--checkout__submitted form--checkout__submitted--successfully">
              <h3 className="form--checkout__submitted__heading">Order placed successfully.</h3>
              <p className="form--checkout__submitted__paragraph">
                Your order number is <strong>{}</strong>
              </p>
              <p className="form--checkout__successfully__paragraph">
                Click <Link to="/" className="form--checkout__successfully__link">here</Link> to see go back to the store.
              </p>
            </div>
          )}
          { notSubmitted && (
            <div className="form--checkout__submitted form--checkout__submitted--error">
              <h3 className="form--checkout__submitted__heading">{error}</h3>
              <p className="form--checkout__submitted__paragraph">
                Please verify your info
              </p>
            </div>
          )}
        </div>
      </form>
    </>
  )

}