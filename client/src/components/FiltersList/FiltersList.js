import './FiltersList.scss'
import axios from "axios";
import {webAPIURL } from "../../AppSettings";
import {useEffect, useState} from "react";

export const FiltersList = ({ location, history, open }) =>{
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
    <div>
      <p>FiltersList</p>
    </div>
  )
}