
const Services = (props) => {

    const serviceList = props.services.map((service, index) =>{
       return(
       <h1 key={`service ${index}`} services={service}>{service}</h1>
       ) 
    })


    return (
    <div className="Services">
      
       {serviceList}
       
    </div>
    )
}
export default Services;