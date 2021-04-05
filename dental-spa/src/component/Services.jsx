import { Link } from "react-router-dom";
import Service from './pages/Service'
export default function Services(props) {
    console.log(props.services)

    const serviceList = props.services.map((service, index) => {
        return (
            <li key={index}> 
            <Link to={`/services/${service.id}`}> {service.name} </Link>
            </li>
            
        
        )
    })
    return (
        <div className="Services">
            <h1>These are the services that we provide:</h1>
            <ul>
                {serviceList}
                {/* <Service /> */}
            </ul>
        </div>
    )
}