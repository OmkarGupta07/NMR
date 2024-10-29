import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        this.state={
            userInfo:{
                name:"dummy",
                avatar_url:"sdas",
                location:"adsasd"
            }
        }     
    }

async componentDidMount(){
    const data=await fetch('https://api.github.com/users/OmkarGupta07');
    const UserData=await data.json();

    this.setState({
        userInfo:UserData
    })
    
}

componentDidUpdate(){
    console.log('OH yeah i got');
}

componentWillUnmount(){
    console.log('Inside of unmount ');
}
render(){
    const {name,avatar_url,location}=this.state.userInfo;
    return (

<div className="user-card">   
        <h2>{name}</h2>
        <img src={avatar_url} alt={name} />
        <h2>{location == null ? 'NA' :location}</h2>
    </div>
    )
}

}

export default UserClass