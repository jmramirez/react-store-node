import './CartPage.scss'
import {CartList} from "../../components/CartList/CartList";

export const CartPage = () => {
  return (
    <section className="shoppingCart">
      <h2 className="shoppingCart__heading">ShoppingCart</h2>
      <div className="shoppingCart__container">
        <CartList />
      </div>
    </section>
  )
}