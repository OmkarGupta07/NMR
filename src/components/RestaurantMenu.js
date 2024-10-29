import { useState,useEffect } from "react";
import {SWIGGY_ASSESTS,MENU_URL} from "../utils/Constant"
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";


const RestaurantMenu=()=>{
    const[MenuItems,setMenuItems]=useState([]);
    let name;
    let allitems;
    const {resId} = useParams();
    useEffect(()=>{fetchResData()},[])

const fetchResData=async () =>{
debugger
const data=await fetch(MENU_URL+resId)
const json= await data.json();
setMenuItems(json.data.cards)
}
if(MenuItems.length != 0){
 name=MenuItems[0].card.card.text;
allitems=MenuItems[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
}
else
return <Shimmer/>




return (
    <div className="menu">
    <h1>{name}</h1>
    <h1>Menu</h1>

    {allitems.map((ele, index) => {  return (
        
        
        <div key={index} className="menu-item">
            <img src={`${SWIGGY_ASSESTS}${ele.card.info?.imageId}`} alt={ele.card.info?.name} />
            <h3>{ele.card.info?.name}</h3>
            <h3>Price :{ele.card.info?.price / 100}</h3>
            <h3>{ele.card.info?.description}</h3>
            <h3>{ele.card.info?.aggregatedRating?.rating}</h3>
        </div>
    )})}
</div>

   
)
}

export default RestaurantMenu;