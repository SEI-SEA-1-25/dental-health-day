const Service = (props) => (
  <div>
    <h3>{props.name}</h3>
    <h6>{props.price}</h6>
    <p>Description: {props.description}</p>
  </div>
)

export default Service;