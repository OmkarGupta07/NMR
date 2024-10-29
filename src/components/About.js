import UserClass from "./UserClass";
import React from "react"


class About extends React.Component{
    constructor(props){
        super(props)
        console.log('Parent Constructor');
        
    }

    componentDidMount(){
        console.log('Parent is mounted');}

    render(){
        console.log('Parent is rendered');

     return (  <div>
        <h1>You're In About Us </h1>
        <UserClass name={"Omkar0"} location={"Chennai"}/>
    </div>
    )}
}


export default About;

