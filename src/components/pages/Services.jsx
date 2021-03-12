

export default function Services(props) {
    console.log(props)
    return (
        <div>
            <h1>Here are the services we provide:</h1>
            {props.services.map((service, i) => <h3 key={i} >{service.description}</h3>)}
        </div>
    )
}