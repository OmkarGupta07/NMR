const RestaurantContainer =({resName}) =>{
    let {image_url,description,text} =resName
    
   
   return (
    <div className="res-cards" style={{backgroundColor:"#f0f0f0" }} >
    <img className="res-image" src={image_url}/>
    <h3>{description}</h3>
    <h3>{text}</h3>

    </div>
    )
}



export default RestaurantContainer;