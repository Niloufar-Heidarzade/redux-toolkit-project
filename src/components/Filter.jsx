import "../styles/filter.css";
import { useSelector , useDispatch } from "react-redux";
import { deleteFilter } from "../redux/filtersSlice";

function Filter() {

  const dispatch = useDispatch()
  const filterArray = useSelector((state) => state.filter);
  const handleDeleteFilter = (filter) => {
    dispatch(deleteFilter(filter));
  }

  return (
    <>
    <div className="filterBox">
      <div className="tagContainer">
        {Array.isArray(filterArray) && filterArray.map((item , index) => <div key={index} className="tag">
          {item}
          <div className="cross" onClick={() => handleDeleteFilter(item)}></div>
          </div>)}
      </div>
      <p>Clear</p> 
    </div>
    </>
  )
}

export default Filter;