import './CartSummary.scss'

export const CartSummary = ({ items }) => (
  items.map(item =>
    <li key={item.productId + item.colorId + item.storageId} className="cartSummary">
      <div className="cartSummary__container">
        <span className="cartSummary__container__text">{item.name} - {item.color}</span>
        <span className="cartSummary__container__text">{item.capacity} - Quantity: {item.quantity}</span>
      </div>
      <div className="cartSummary__subTotal">
        <span className="cartSummary__container__text">Subtotal: ${item.subTotal}</span>
      </div>
    </li>)
)