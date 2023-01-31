import "./starship.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Popover, OverlayTrigger, ButtonToolbar, Button } from "react-bootstrap";
import StarshipsCard from "../../components/Card/Card";
import PeopleCard from "../../components/Card/Card";

const People = ({data}) => {
    return (
        <div className="people-container">
        {data.results.map((people) => {
            return <PeopleCard {...people} />
        })}
        </div>
    )
} 

export default People;



// const Starships = ({data}) => {
//     console.log(data);
//     return (
//         <div className="starship-container">
//         {data.results.map((starship) => {
//             const popoverRight = (
//                 <Popover id="popover" title="Popover right">
//                     <p>{starship.name}</p>
//                     <ul>
//                         <li>Model: {starship.model}</li>
//                         <li>Price: {starship.cost_in_credits}</li>    
//                         <li>Manufacturer: {starship.manufacturer}</li>    
//                         <li>Length: {starship.length}</li>
//                         <li>Max Speed: {starship.max_atmosphering_speed}</li>
//                         <li>Hyperdrive Rating: {starship.hyperdrive_rating}</li>
//                         <li>MGLT: {starship.MGLT}</li>
//                         <li>Crew: {starship.crew}</li>
//                         <li>Passengers: {starship.passengers}</li>
//                         <li>Cargo Capacity: {starship.cargo_capacity}</li>

//                     </ul>
//                 </Popover>
//             )
//             return (
//                 <ButtonToolbar>
//                     <OverlayTrigger trigger="focus" placement="top" overlay={popoverRight}>
//                         <Button className="btn btn-transparent">
//                             <div className="starship-info">
//                                 <div className="text-container">
//                                     <p>Starship name: {starship.name}</p>
//                                     <p>Price: {starship.cost_in_credits}</p>
//                                 </div>
//                             </div>
//                         </Button>
//                     </OverlayTrigger>
//                 </ButtonToolbar>
//             )
//         })}
//         </div>
//     )
// } 

// export default Starships;