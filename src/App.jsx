import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import { useSelector } from "react-redux";
import Filter from "./components/Filter";

function App() {
  const filterState = useSelector((state) => state.filter)
  return(
    <>
      
      <div className="headerImage"></div>
      {filterState.length > 0 && <Filter/>}
      <CardContainer />

    </>
  )
}

export default App;