import { useRouteError } from "react-router-dom";


const Error=() => {
    const err= useRouteError()
    console.log(err);
    
return (
    <div>
        <h1>Something Went Wrong Boi</h1>
        <h4>{err.status} {err.statusText}</h4>
    </div>
)

}


export default Error;
