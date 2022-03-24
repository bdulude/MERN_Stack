import axios from 'axios';
import React, {useState} from 'react'
import {useHistory, Link} from 'react-router-dom';

const Add = (props) => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        let author = {
            name : name
        }
        axios
            .post("http://localhost:8000/api/authors", author)
            .then(res => {
                console.log("POST Success");
                console.log(res.data);
                props.setAuthorList([...props.authorList, res.data]);
                history.push("/");
            })
            .catch(err => {
                const errorRes = err.response.data.errors;
                const errorArr = [];
                for (let key of Object.keys(errorRes)) {
                    errorArr.push(errorRes[key].message);
                }
                setErrors(errorArr);
                console.log('POST Failed');
                console.log(err.data);
            });
    }
    

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <div>
                <form onSubmit={submitHandler}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <label htmlFor="name">Name: </label>
                    <br />
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    <br />
                    <input type="submit" value="Add" />
                </form>
            </div>
        </div>
    )
}

export default Add