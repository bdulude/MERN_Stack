import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const DisplayPlanet = (props) => {

    // get id from parameters
    const { id } = useParams();
    // setup a useState for api response data
    const [data, setData] = useState({});
    // use history from react router to change browser url
    const history = useHistory();

    // useEffect to call axios get on component load
    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
            .then(response=>{setData(response.data)})
            .catch(err => history.push('/error'))
    }, [id, history]);

    return (
        <div>
            <h1>{data.name}</h1>
            <p><strong>Climate: </strong>{data.climate}</p>
            <p><strong>Terrain: </strong>{data.terrain}</p>
            <p><strong>Surface Water: </strong>{(data.surface_water === "1") + ''}</p>
            <p><strong>Population: </strong>{data.population}</p>
        </div>
    )
}

export default DisplayPlanet