import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  
  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results)
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results)
    }

    fetchPeople();
    fetchPlanets();

  }, [])
  console.log('people', people);
  console.log('planets', planets);


  return (
    <div className="container">
    </div>
  );
}

export default App;
