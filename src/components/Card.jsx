import "../styles/card.css";
import { useDispatch } from "react-redux";
import { add } from "../redux/filtersSlice";

function Card({ logo , company , new:isNew, featured , position , postedAt , contract , location , role , level , languages , tools}) {

  const dispatch = useDispatch()
  const handleAddFilter = (e) => {
    const filterName = e.target.innerText;
    dispatch(add(filterName));
  }

  return (
    <div className="card">
      <div className="logoAndInfo">
        <img src={logo}/>
        <div className="info">
          <div className="infoHeader">
            <p>{company}</p>
            {isNew && <div className="new">NEW!</div>}
            {featured && <div className="featured">FEATURED</div>}
          </div>
          <h1>{position}</h1>
          <div className="timeAndLocation">
            <p>{postedAt}</p>
            <p>&middot;</p>
            <p>{contract}</p>
            <p>&middot;</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="tags">
        <div onClick={handleAddFilter}>{role}</div>
        <div onClick={handleAddFilter}>{level}</div>
        {languages?.map((item , index) => <div key={`language-${index}`} onClick={handleAddFilter}>{item}</div>)}
        {tools?.map((item , index) => <div  key={`tool-${index}`} onClick={handleAddFilter}>{item}</div>)}
      </div>
    </div>
  )
}

export default Card;