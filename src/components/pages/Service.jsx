export default function Service(props) {
  
    return (
        <div className="Service">
            <h3>{props.name}</h3>
            <h6>${props.price}</h6>
            <p>{props.description}</p>
        </div>
    )
}