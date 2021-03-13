const Service = (props) => (
    <div>
        <h1>{props.service.name}</h1>
        <h3>{props.service.description}</h3>
        <p>${props.service.price}</p>
    </div>
)

export default Service;