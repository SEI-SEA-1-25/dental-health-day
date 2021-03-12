import { Link } from "react-router-dom";

function Services(props) {

    const linkToServices = props.services.map((service) => {
        return <div><Link to={`/services/${service.id}`}>{service.name}</Link></div>
    })

  return (
    <div>
      <h1>These are the services we provide:</h1>
      {linkToServices}
    </div>
  );
}

export default Services;