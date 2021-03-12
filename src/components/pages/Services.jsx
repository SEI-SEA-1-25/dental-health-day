import { Link } from 'react-router-dom'

const Services = (props) => {
  return (
  <div className="Services">
      <h1>Our Services</h1>
      {props.services.map((service) => ( 
        <div>
          <Link to={`/services/${service.id}`}>{service.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Services;