import React, {useState} from 'react'
import { useHistory } from "react-router-dom";


const Input = () => {
    // setup useStates for parameters
    const [type, setType] = useState("people");
    const [id, setId] = useState("1");
    // use history from react router to change url
    const history = useHistory();

    // prevent default form submit, change url
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/${type}/${id}`);
    }

    return (
        <form onSubmit={ handleSubmit } style={{marginBottom: 10, marginTop: 50}}>
            <label htmlFor="type">Type: </label>
            <select name="type" onChange={(e) => setType(e.target.value)} value={type}  style={{marginRight: 10, width: 90}}>
                <option value="people">People</option>
                <option value="planet">Planet</option>
            </select>
            <label htmlFor="id">Id: </label>
            <input type="text" name="id" onChange={(e) => setId(e.target.value)} value={id}  style={{marginRight: 10, width: 30}}/>
            <input type="submit" value="Search" />
        </form>
    )
}

export default Input