import React, {useState} from 'react'

const Input = (props) => {
    const [box, setBox] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(box);
        
        props.onNewBox(box);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="color">Color: </label>
            <input type="text" name="color" onChange={(e) => setBox(e.target.value)} value={box} />
            <input type="submit" value="Add" />
        </form>
    )
}

export default Input