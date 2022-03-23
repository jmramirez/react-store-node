import './Filters.scss'
import {useState} from "react";
import {FiltersList} from "../FiltersList/FiltersList";

export const Filters = ({ location, history}) => {
  const [openList, setOpenList] = useState(false)

  const showMenu = () => {
    setOpenList(!openList)
  }

  return(
    <div className="filters">
      <div className="filters__header"><h2 className="filters__header__heading">Filters</h2></div>
      <div className="filters__header filters__header--button" onClick={showMenu}>
        <h2 className="filters__header__heading">Filters</h2>
        <span className={`material-icons filters__header__icon ${openList? 'filters__header__icon--open': ''}`}>arrow_forward_ios</span>
      </div>
      <FiltersList location={location} open={openList} history={history}/>
    </div>
  )
}