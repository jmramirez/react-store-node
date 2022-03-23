import './CatalogPage.scss'
import { useLocation } from "react-router-dom";
import {Filters} from "../../components/Filters/Filters";
import {ProductsList} from "../../components/ProductsList/ProductsList";

export const CatalogPage = () => {
  let location = useLocation()

  return(
    <section className="catalog">
      <Filters location={location}/>
      <ProductsList location={location} />
    </section>
  )
}