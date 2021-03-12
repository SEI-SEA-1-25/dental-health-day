

const Services = (props) => {

    const serviceList = props.serviceDetails.map((serviceDetail, index) =>{
       return(
       <p key={`serviceName ${index}`}>Service: {serviceDetail.name}</p>
    //    <p key={`service ${index}`}>price: {serviceDetail.price}</p>,
    //    <p key={`service ${index}`}>Service Details: {serviceDetail.description}</p>
       ) 
    })


    return (
    <div className="Services">
      
       {serviceList}

    </div>
    )
}
export default Services;