import {SWIGGY_ASSESTS} from "../utils/Constant"

const RestaurantContainer =({resName}) =>{
    let {areaName,name,costForTwo,cloudinaryImageId} =resName
    
   
   return (
    <div className="res-cards" style={{backgroundColor:"#f0f0f0" }} >
    <img className="res-image" src={SWIGGY_ASSESTS + cloudinaryImageId}/>
    <h3>{name}</h3>
    <h3>{areaName}</h3>
    <h3>{costForTwo}</h3>

    </div>
    )
}



export default RestaurantContainer;