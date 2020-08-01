import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacter] = useState();
  

  const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    characters.map(index => {
      axios.get(`https://swapi.dev/api/people/${index}`)
      .then(response => { console.log(response)
        setCharacter(response.data);
        
      })
      .catch(error => console.log(error));
    })
    
  } , []);
  
  console.log(character);
  console.log(characters);
  
  if(!character) return <h1>Loading...</h1>
  return (
    <div className="App">
      <h1 className="Header">Inhabitants Of A Galaxy Far, Far Away</h1>
      
       {characters.map(() => {
        return <Character character={character}/>
       })}
      
    </div>
  );
}

export default App;
