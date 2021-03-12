export default function Services(props) {
    // console.log(props)
    const serviceList = props.services.map((service, index) => {
        return (
            <Services
                key={index}
                name={service.name}
            />
        )
    })
    return (
        <div className="Services">
            {serviceList}
        </div>
    )
}