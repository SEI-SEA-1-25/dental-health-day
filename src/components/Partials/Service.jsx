const Service = (props) => {
    if(!props.name){
        return <h3>This is not a service we have yet!</h3>
    }
    return(
        <div>
            <h1>{props.name}</h1>
            <p> ${props.price}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}
export default Service;