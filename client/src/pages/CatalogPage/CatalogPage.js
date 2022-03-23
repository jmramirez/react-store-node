import './CatalogPage.scss'
import { useLocation } from "react-router-dom";
import {Filters} from "../../components/Filters/Filters";

export const CatalogPage = () => {
  let location = useLocation()

  return(
    <section className="catalog">
      <Filters location={location}/>
      <p>product page</p>
    </section>
  )
}