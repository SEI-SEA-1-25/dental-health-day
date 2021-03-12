import Service from '../pages/Service'




const Services = (props) => (
    <div>
        <h1>Here are the services we provide.</h1>
        {props.services.map((service, i) => <Service key={i} service={service}/>)}
    </div>
)

export default Services;