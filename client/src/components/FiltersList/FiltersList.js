import './FiltersList.scss'
import axios from "axios";
import {webAPIURL } from "../../AppSettings";
import {useEffect, useState} from "react";
import {MultiFilter} from "../MultiFilter/MultiFilter";

export const FiltersList = ({ location, open }) =>{
  const [filtersItems, setFiltersItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    const getFilters = async () => {
      try {
        const filters = await axios.get(`${webAPIURL}/filters`)
        setFiltersItems(filters.data)
        setLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
    getFilters()
  }, [])

  return(
    loading ? <div>Loading...</div>
      :
    <div className={open? "filters-list filters-list--open" : "filters-list"}>
      <MultiFilter title="Brands" items={filtersItems.brands} location={location}  queryKey="brands"/>
      <MultiFilter title="Colors" items={filtersItems.colors} location={location} queryKey="colors" />
      <MultiFilter title="Operating System" items={filtersItems.os} location={location} queryKey="os" />
      <MultiFilter title="Features" items={filtersItems.features} location={location} queryKey="features" />
      <MultiFilter title="Capacity" items={filtersItems.capacity} location={location} queryKey="Storage" />
    </div>
  )
}