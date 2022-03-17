import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

    const [pokeList, setPokeList] = useState(null);

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
            .then(response=>{setPokeList(response.data.results)})
    }

    return (
        <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
            <ul style={{width: 200}}>
                {
                    pokeList ?
                    pokeList.map((pokemon, idx) => {
                        return (
                            <li key={idx}>{pokemon.name}</li>
                        )
                    }) :
                    <button onClick={getPokemon}>Fetch Pokemon</button>
                }
            </ul>
        </div>
    );
}

export default App;
