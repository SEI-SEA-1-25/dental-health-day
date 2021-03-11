const Service = (props) =>
  !props.name ? (
    <h3>That is not a service we have yet!</h3>
  ) : (
    <div>
      <h1>{props.name}</h1>
      <p>${props.price}</p>
      <p>Description: {props.description}</p>
    </div>
  );

export default Service;
