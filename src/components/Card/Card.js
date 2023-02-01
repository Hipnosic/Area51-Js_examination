// import React, { useEffect, useState } from "react";
// import { ButtonToolbar, Button, Modal } from "react-bootstrap";
// import FilmCard from "./FilmCard";
// const Card = ({
// }) => {
// }) => {
//   const [show, setShow] = useState(false);
//   const [data, setData] = useState([])

//   const [dataPilots, setDataPilots] = useState([]);
//   const [PilotsLoading, setPilotsLoading] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   async function getPilots() {
//     console.log("get pilots: ");
//     if (pilots) {
//       setPilotsLoading(true);
//       Promise.all(pilots.map((u) => fetch(u)))
//         .then((responses) => Promise.all(responses.map((res) => res.json())))
//         .then((data) => {
//           setDataPilots(data);
//           console.log("pilots data: ", data);
//         });
//       setPilotsLoading(false);
//     }
//   }
//   useEffect(() => {
//     getHomeworld();
//     getFilms();
//     getSpecies();
//     getResidents();
//     getPilots();
//     getSpecies();
//     // getCharacters();
//     getPlanets();
//     getStarships();
//   }, []);

//   async function getPilots() {
//     console.log("get pilots: ");
//     if (pilots) {
//       setPilotsLoading(true);
//       Promise.all(pilots.map((u) => fetch(u)))
//         .then((responses) => Promise.all(responses.map((res) => res.json())))
//         .then((data) => {
//           setDataPilots(data);
//           console.log("pilots data: ", data);
//         });
//       setPilotsLoading(false);
//     }
//   }



//   useEffect(() => {
//     getHomeworld();
//     getFilms();
//     getSpecies();
//     getResidents();
//     getPilots();
//     getSpecies();
//   }, []);



//   return (
//     <>
//       {!homeworldLoading && !filmsLoading &&  (
//         <>
//           <ButtonToolbar className="card">
//             <Button
//               className="btn bg-transparent border-0"
//               onClick={handleShow}
//             >
//               <div className="text-container">
//                 <p>{name}</p>
//               </div>
//             </Button>
//           </ButtonToolbar>
//           <Modal show={show} onHide={handleClose}>
//             <Modal.Header className="modal-header">
//               <Modal.Title>{name}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body className="modal-body">
//               <ul>
//                 {dataHomeworld && <li>Homeworld: {dataHomeworld}</li>}
//                 {dataFilms && (
//                   <li>
//                     Films:
//                     <ul>
//                       {dataFilms.map((film) => {
//                         return <li key={film.title}>{film.title}</li>;
//                       })}
//                     </ul>
//                   </li>
//                 )}
//                 {dataResidents && (
//                   <li>
//                     Residents:
//                     <ul>
//                       {dataResidents.map((residents) => {
//                         return <li key={residents.name}>{residents.name}</li>;
//                       })}
//                     </ul>
//                   </li>
//                 )}
//                 {dataPilots && (
//                   <li>
//                     Pilots:
//                     <ul>
//                       {dataPilots.map((pilots) => {
//                         return <li key={pilots.name}>{pilots.name}</li>;
//                       })}
//                     </ul>
//                   </li>
//                 )}

//                 {dataSpecies && (
//                   <li>
//                     Species:
//                     <ul>
//                       {dataSpecies.map((species) => {
//                         return <li key={species.name}>{species.name}</li>;
//                       })}
//                     </ul>
//                   </li>
//                 )}            

//               </ul>
//             </Modal.Body>
//             <Modal.Footer className="modal-footer">
//               <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </>
//       )}
//       {homeworldLoading && filmsLoading && ResidentsLoading && PilotsLoading && speciesLoading && charactersLoading && planetsLoading && starshipsLoading &&<p>laddar kort..</p>}
//       {homeworldLoading && filmsLoading && ResidentsLoading && PilotsLoading && speciesLoading &&<p>laddar kort..</p>}
//     </>
//   );
// };

// export default Card;
