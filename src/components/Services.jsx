import { Link } from "react-router-dom"

const Services = (props) => {
    return (
        <div>
            <h1>This are the services we provide:</h1>
            {props.services.map((service) => (
                <div className='link-container'>
                    <Link className="link" to={`/services/${service.id}`}>{service.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Services;