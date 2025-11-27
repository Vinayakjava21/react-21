import RestuarantCards from "./RestuarantCards";
import { resList } from "../utils/loadData";
import { useState } from "react";

const Body=()=>{
    const [listofRestaurant,setListofRestaurant] = useState(resList);
  return (
    <div className="body">
    <div className="search">Search</div>
    <div className="filter">
        <button className="filter-btn"
        onClick={()=>{
            const filteredList = listofRestaurant.filter((res)=>res.rating>=4);
            setListofRestaurant(filteredList);
            console.log(filteredList);
        }}

        >Top Rated</button>
    </div>

    <div className="rest-container">
      {listofRestaurant.map((restuarant)=>(
        <RestuarantCards key = {restuarant.id} resData = {restuarant} />
      ))}

    </div>
    </div>
  )
}


export default Body;