import Service from './pages/Service'
export default function Services(props) {

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


//another way
// const serviceList = props.services.map((service, index) => {
//     return (
//         <li key={index}>{service}</li>
//     )
// })
// return (
//     <div className="Services">
//         <ul>
//             {serviceList}
//         </ul>
//     </div>
// )
// }
// colin's example that i couldn't get to work
// return (
//     <div className="Services">
//         <h1>Here are the Services that we provide</h1>
//         {props.serviceDetails.map((service, index) => (<h3 key={index}>{service.name}</h3>))}
//     </div>
// )