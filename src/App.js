import React, { useState, useEffect } from "react";
import Films from "./components/Categories/Films";
import Planets from "./components/Categories/Planets";
import Species from "./components/Categories/Species";
import Starships from "./components/Categories/Starships";
import Vehicles from "./components/Categories/Vehicles";
import People from "./components/Categories/People";


function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [currentType, setCurrentType] = useState("films");
  
  async function getData() {
    setLoading(true);
    const response = await fetch(`https://swapi.dev/api/${currentType}/?format=json`)
    if (!response.ok) throw new Error(response.status)
    const data = await response.json();
    setData(data);
    console.log(data);
    setLoading(false);
  }

  const onTypeSelectHandler = (e) => {
    setCurrentType(e.target.name);
  }

  useEffect(() => {
    getData();
  }, [currentType])

  return (
    
    <div className="container">
      <div className="clip-art">
        <img className="title" src="" alt=""></img>
        <img className="yoda" src="" alt=""></img>
        <img className="robot" src="" alt=""></img>
      </div>
      <div className="background-container">
        <p className="title">Star Wars</p>
        <div className="background"></div>
      </div>
      <div className="navbar">
        <button name="films" onClick={onTypeSelectHandler}>Films</button>
        <button name="planets" onClick={onTypeSelectHandler}>Planets</button>
        <button name="species" onClick={onTypeSelectHandler}>Species</button>
        <button name="starships" onClick={onTypeSelectHandler}>Starships</button>
        <button name="vehicles" onClick={onTypeSelectHandler}>Vehicles</button>
        <button name="people" onClick={onTypeSelectHandler}>People</button>
      </div>
      {currentType === "films" && !loading && (
        <Films data={data} />
      )}
      {currentType === "planets" && !loading && (
        <Planets data={data} />
      )}
      {currentType === "species" && !loading && (
        <Species data={data} />
      )}
      {currentType === "starships" && !loading && (
        <Starships data={data} />
      )}
      {currentType === "vehicles" && !loading && (
        <Vehicles data={data} />
      )}
      {currentType === "people" && !loading && (
        <People data={data} />
      )}
      {loading && (<p>Hämtar data..</p>)}
    </div>
  );
}

export default App;
