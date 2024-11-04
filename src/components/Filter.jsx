import "../styles/filter.css";
import { useSelector , useDispatch } from "react-redux";
import { deleteFilter , removeAll} from "../redux/filtersSlice";

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
      <p onClick={() => dispatch(removeAll())}>Clear</p> 
    </div>
    </>
  )
}

export default Filter;