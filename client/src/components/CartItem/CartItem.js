import './CartItem.scss'
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {addProductQuantity, reduceProductQuantity, removeFromCart} from "../../redux/actions/cartActions";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleClick = (item) => {
    dispatch(removeFromCart(item))
  }

  const addProduct = (product) => {
    dispatch(addProductQuantity(product))
  }

  const removeProduct = (product) => {
    dispatch(reduceProductQuantity(product))
  }

  return (
    <div className="cartItem">
      <div className="cartItem__info">
        <div className="cartItem__info-product">
          <Link to={`/products/${item.slug}`} className="cartItem__info-product__image">
            <img src={item.thumbnail} alt="prod_img" className="cartItem__info-product__image__thumb" />
          </Link>
          <div className="cartItem__info-product__details">
            <p className="cartItem__info-product__details__label__name">{item.name}</p>
            <p className="cartItem__info-product__details__label">
              <span className="cartItem__info-product__details__label__name">Color:</span> {item.color}
            </p>
            <p className="cartItem__info-product__details__label">
              <span className="cartItem__info-product__details__label__name">Capacity: </span> {item.capacity}
            </p>
          </div>
        </div>
        <div className="cartItem__info-price">
          <p className="cartItem__info-price__heading">Price: </p>
          <p className="cartItem__info-price__label">${item.price}</p>
        </div>
        <div className="cartItem__info-quantity">
          <p className="cartItem__info-quantity__heading">Quantity: </p>
          <div className="cartItem__info-quantity__top">
            <button disabled={item.quantity < 2} className="cartItem__info-quantity__button" onClick={() => removeProduct(item)}>
              <span className="material-icons cartItem__info-quantity__button__span">remove</span>
            </button>
            <p className="cartItem__info-quantity__label">{item.quantity}</p>
            <button disabled={item.quantity > 9}  className="cartItem__info-quantity__button" onClick={() => addProduct(item)}>
              <span className="material-icons cartItem__info-quantity__button__span">add</span>
            </button>
          </div>
          {
            item.quantity > 9 &&
            (
              <div className="cartItem__info-quantity__bottom">
                10 items max.
              </div>
            )
          }
        </div>
        <div className="cartItem__info-subtotal">
          <p className="cartItem__info-price__heading">Subtotal: </p>
          <p className="cartItem__info-price__label"> ${item.subTotal}</p>
        </div>
      </div>
      <div className="cartItem-action">
        <button className="cartItem-action__button" onClick={() => handleClick(item)}>
          <span className="material-icons cartItem-action__button__span">delete_forever</span>
          <p className="cartItem-action__button__text">Remove Item</p>
        </button>
      </div>
    </div>
  )
}