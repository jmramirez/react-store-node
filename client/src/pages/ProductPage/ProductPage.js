import './ProductPage.scss'
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import { webAPIURL } from '../../AppSettings'
import _ from 'lodash'
import { Link, useNavigate } from "react-router-dom";
import {ProductImages} from "../../components/ProductImages/ProductImages";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/actions/cartActions";

export const ProductPage = () => {
  const [product, setProduct ] = useState(null)
  const [loading, setLoading] = useState(true)
  const [disabled, setDisabled] = useState(true)
  const [colors, setColors] = useState([])
  const [storageList, setStorageList] = useState([])
  const [color, setColor] = useState('')
  const [storage, setStorage] = useState('')
  const [variant, setVariant] = useState(null)
  const [purchaseEnable, setPurchaseEnable] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { slug } = useParams();

  useEffect(() => {
    const getProduct = async (slug) => {
      const product = await axios.get(`${webAPIURL}/products/${slug}`)
      setProduct(product.data)
      const colorsList = _.unionBy(product.data.variants.map(v =>{
        return {
          value: v.colorId,
          text: v.color
        }
      }),"value")
      setColors(colorsList)
      setLoading(false)
    }
    if(slug){
      getProduct(slug)
    }
  }, [slug])

  const selectColor = (e) => {
    setColor(e.target.value)
    const storageList = product.variants.filter(v => {
      return v.colorId === e.target.value
    }).map(v =>{
      return {
        value: v.storageId,
        text: v.capacity
      }
    })

    if(storage.length) {
      const selectedVariant = product.variants.find(
        v => v.colorId === color && v.storageId === e.target.value
      )
      setVariant(selectedVariant)
    }
    setStorageList(storageList)
    setDisabled(false)
    setStorage('')
    setPurchaseEnable(true)
  }

  const selectStorage = (e) => {
    setStorage(e.target.value)
    const selectedVariant = product.variants.find(
      v => v.colorId === color && v.storageId === e.target.value
    )
    setVariant(selectedVariant)
    setPurchaseEnable(false)
  }

  const addProductToCart = (product) => {
    dispatch(addToCart(product))
    navigate('/cart')
  }

  return (
    <section className="product-details">
      <Link to='/products' className="product-details-top__link"><span className="material-icons product-details-top__link__icon">arrow_back</span><span className="product-details-top__link__text">Return to Products</span></Link>
      {
        loading ? <h2>Loading...</h2>
          :
          <>
            <div className="product-details-top">
              <div className="product-details-top__images">
                <ProductImages images={product.images} />
              </div>
              <div className="product-details-top__content">
                <h2 className="product-details-top__content-heading">{product.name}</h2>
                <p className="product-details-top__content-paragraph">{product.shortDescription}</p>
                <h3 className="product-details-top__content-subHeading">Features:</h3>
                <ul className="product-details-top__content-list">
                  {product.features.map((feature) => <li key={feature.id}>{feature.name}</li>)}
                </ul>
                <h4 className="product-details-top__content-subHeading">Variants:</h4>
                <p className="product-details-top__content-variant">Color:</p>
                <select id="color" name="color" value={color} className="product-details-top__content-variant__select" onChange={selectColor}>
                  <option value="" disabled defaultValue>Please select</option>
                  {colors.map((color) => <option value={color.value} key={color.value}>{color.text}</option> )}
                </select>
                <p className="product-details-top__content-variant">Storage:</p>
                <select id="color" name="color" value={storage} className="product-details-top__content-variant__select" disabled={disabled} onChange={selectStorage}>
                  <option value="" disabled defaultValue>Please select</option>
                  {storageList.map((storage) => <option value={storage.value} key={storage.value}>{storage.text}</option> )}
                </select>
                {
                  variant && (
                    <div className="product-details-top__content-price">
                      <p className="product-details-top__content-variant">
                        <span className="product-details-top__content-variant--span">Price: </span>
                        ${variant.price}
                      </p>
                    </div>
                  )
                }
                <div className="product-details-top__content-purchase">
                  <button disabled={purchaseEnable} className="product-details-top__content-purchase__button" onClick={() => addProductToCart(variant)}><span className="material-icons">add</span> Add To Cart</button>
                </div>
              </div>

            </div>
            <div className="product-details-bottom">
              <h5 className="product-details-bottom__heading">Product Details</h5>
              <p className="product-details-bottom__paragraph">{product.description}</p>
            </div>
          </>
      }
    </section>
  )
}