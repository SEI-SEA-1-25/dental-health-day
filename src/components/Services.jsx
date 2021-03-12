export default function Services(props) {
    // console.log(props)
    const serviceList = props.services.map((service, index) => {
        return (
            <li key={index}>{service}</li>
        )
    })
    return (
        <div className="Services">
            <ul>
                {serviceList}
            </ul>
        </div>
    )
}