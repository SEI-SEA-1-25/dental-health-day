import { Link } from "react-router-dom";

function Services(props) {
  return (
    <div>
      <h1>These are the services we provide:</h1>
      {props.services.map((service) => (
        <div>
          <Link to={`/services/${service.id}`}>{service.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Services;
