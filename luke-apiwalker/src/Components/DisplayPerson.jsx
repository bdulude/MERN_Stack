import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const DisplayPerson = (props) => {

    // get id from parameters
    const { id } = useParams();
    // setup a useState for api response data
    const [data, setData] = useState({});
    // use history from react router to change browser url
    const history = useHistory();

    // useEffect to call axios get on component load
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
            .then(response=>{setData(response.data)})
            .catch(err => history.push('/error'))
    }, [id, history]);

    return (
        <div>
            <h1>{data.name}</h1>
            <p><strong>Height: </strong>{data.height} cm</p>
            <p><strong>Mass: </strong>{data.mass} kg</p>
            <p><strong>Hair Color: </strong>{data.hair_color}</p>
            <p><strong>Skin Color: </strong>{data.skin_color}</p>
        </div>
    )
}

export default DisplayPerson