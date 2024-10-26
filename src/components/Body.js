import RestaurantContainer from "./RestaurantCont"
import API_DATA from "../utils/mockData"
import {useState} from 'react'

const Body= () =>{
    const [Listofres,setListofres] =useState(API_DATA)


    return (
        <div className="body">
            <div className="search">Search</div>
            <button className="filter-btn" 
            onClick={() => { 
                let filteredlist=Listofres.filter(ele=> ele.description>4)
                setListofres(filteredlist);
                }   }   >
                Get Top Rated Restaurant</button>
            <div className="rescontainer">
             
            {Listofres.map(CurrRes =>  <RestaurantContainer  key={CurrRes.item_id} resName={CurrRes}/>)}

            </div>
        </div>
    )
}

export default Body