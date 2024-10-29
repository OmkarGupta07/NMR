import RestaurantContainer from "./RestaurantCont"
import {useState,useEffect} from 'react'
import Shimmer from "../components/ShimmerUI"
import { Link } from "react-router-dom"

const Body= () =>{
    const [Listofres,setListofres] =useState([])
    const [SearchValue,setSearchValue]=useState('')
    const [FilterData,setFilterData]=useState([])
    useEffect(()=>{
        GetData()
    },[])

const GetData=async ()=>{
    const data =await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    )
    const jsonobj=await data.json();
    
    
   let info= jsonobj.data.cards.map(ele =>{
    let { areaName , name , costForTwo , cloudinaryImageId,id  } = ele?.card?.card?.info || {};
    return {areaName,name,costForTwo,cloudinaryImageId,id};
     })
     setListofres(info);
     setFilterData(info);
}

if (Listofres.length==0) {
    return <Shimmer/>
}
return  Listofres.length==0 ? <Shimmer/>: 
     (
        <div className="body">
            <div className="search">
               <input type="text" className="filter-inp" value={SearchValue} 
                onChange={ (e) => {setSearchValue(e.target.value); console.log(SearchValue) }}/>
                <button onClick={()=>{                    
                    let data=Listofres.filter(ele => ele.name !=undefined && ele.name.toLocaleLowerCase().includes(SearchValue.toLocaleLowerCase()))
                    setFilterData(data);
                    }}>Search </button>
            </div>
            <button className="filter-btn"> Get Top Rated Restaurant </button>
            <div className="rescontainer">
             
            {FilterData.map((CurrRes,idx) =>
                {debugger; 
                return CurrRes.name !=undefined ?
                <Link to={`/restaurants/${CurrRes.id}`}><RestaurantContainer  key={CurrRes.id} resName={CurrRes}/> </Link>
                : "" 
                }) }
            </div>
        </div>
    )
}

export default Body