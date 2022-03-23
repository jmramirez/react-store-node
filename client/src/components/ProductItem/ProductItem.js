import './ProductItem.scss'
import { Link} from "react-router-dom";

export const ProductItem = ({ product }) => (
  <div className="product">
    <div className="product-image">
      <Link to={product.slug}>
        <img src={product.thumbnail} alt={product.name} className="product-image__src"/>
      </Link>
    </div>
    <div className="product-action">
      <div className="product-content">
        <Link to={product.slug} className="product-content__heading">
          <h2 className="product-content__heading-text">{product.name}</h2>
        </Link>
        <p className="product-content__description">{product.shortDescription}</p>
        <p className="product-content__description product-content__description--price">
          <span className="product-content__description product-content__description--span">Price:</span>
          from* ${product.price}
        </p>
      </div>
      <Link to={`/products/${product.slug}`} className="product-content__link">
        <span className="product-content__link__text">More Details</span>
        <span className="material-icons product-content__link__icon">arrow_forward</span>
      </Link>
    </div>
  </div>
)
