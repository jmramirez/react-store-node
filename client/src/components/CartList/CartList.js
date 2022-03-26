import './CartList.scss'
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {CartItem} from "../CartItem/CartItem";
import {showAuthModal} from "../../redux/actions/modalActions";

export const CartList = () => {
  const items = useSelector((state) => state.cart.cartItems)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [subTotal, setSubTotal] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const reducer = (accumulator, cartItem) => accumulator + cartItem.subTotal
    const total = items.reduce(reducer, 0)
    setSubTotal(total)
  }, [items])

  const checkout = () => {
    if(userInfo){
      navigate('/checkout')
    }
    else {
      dispatch(showAuthModal('signin'))
    }
  }

  return(
    <div>
      {items.length ?
        (
          <ul className="cartList">
            <li className="cartList__header">
              <div className="cartList__header-product"><p className="cartList__header__labels">Products</p>
              </div>
              <div className="cartList__header-product-info"><p
                className="cartList__header__labels">Price</p></div>
              <div className="cartList__header-product-info"><p
                className="cartList__header__labels">Quantity</p></div>
              <div className="cartList__header-product-info"><p
                className="cartList__header__labels">Subtotal</p></div>
              <div className="cartList__header-product-action"></div>
            </li>
            {items.map(item =>
              <li key={item.productId + item.colorId + item.storageId} className="cartList__body">
                <CartItem item={item}/>
              </li>)
            }
          </ul>
        )
        :
        (<p className="cartList__empty">You don't have anything in your cart yet!</p>)
      }
      <div className="cartList-actions">
        <Link to='/' className="cartList-actions__link-back">
          <span className="material-icons cartList-actions__link-back__icon">arrow_back</span>
          <span className="cartList-actions__link-back__text">Continue Shopping</span>
        </Link>
        {
          items.length > 0 &&(
            <>
              <div className="cartList-actions__total">
                <p className="cartList-actions__total__content">Product Total: ${subTotal}</p>
              </div>
              <button className="cartList-actions__link-check" onClick={checkout}>
                <span className="cartList-actions__link-check__text">Chekout</span>
                <span className="material-icons cartList-actions__link-check__icon">arrow_forward</span>
              </button>
            </>
          )
        }
      </div>
    </div>
  )
}