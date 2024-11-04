import Card from "./Card";
import "../styles/cardContainer.css";
import data from "../assets/data.json";
import { useSelector } from "react-redux";

function CardContainer() {
  const filtersArray = useSelector((state) => state.filter);
  const showData = data.filter((item) => {
    const objectFilters = [item.role , item.level , ...item.languages , ...item.tools];
    return filtersArray.every(filter => objectFilters.includes(filter));
  })
  return (
    <section className="container">
      {showData.map((item) => <Card key={item.id} {...item}/>)}
    </section>
  )
}

export default CardContainer;