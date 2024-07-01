import { HeartHandshake } from "lucide";
import K from "../../../constants";

const Services = () => {
  return (
    <div className="grid-cols-4 gap-10">
      {
        K.SERVICES.map (
          (service, index) => {
            return <div key={index}
            style={{backgroundColor: Services.bgColor}}>
            <span><HeartHandshake/></span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            </div>
          }
        )
      }

    </div>
  )
}
 


export default Services