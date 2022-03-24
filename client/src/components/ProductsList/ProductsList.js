import './ProductsList.scss'
import axios from "axios";
import {useEffect, useState} from "react";
import { webAPIURL } from "../../AppSettings";
import {ProductItem} from "../ProductItem/ProductItem";

export const ProductsList = ({ location }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`${webAPIURL}/products${location.search}`)
        setProducts(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [location.search])

  return(
    <div className="products">
      <h1 className="products__header">Phones</h1>
      <ul className="products__list">
        {products.map((product) =>(
          <li key={product.id}>
            <ProductItem product={product}/>
          </li>
        ))}
      </ul>
    </div>
  )
}
