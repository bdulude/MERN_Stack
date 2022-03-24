import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useHistory, Link, useParams} from 'react-router-dom';

const Add = (props) => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const {id} = useParams();

    const submitHandler = (e) => {
        e.preventDefault();
        let author = {
            name : name
        }
        axios
            .put("http://localhost:8000/api/authors/" + id, author)
            .then(res => {
                console.log("PUT Success");
                console.log(res.data);
                let filtered = props.authorList.filter((author) => author._id !== res.data._id);
                props.setAuthorList([...filtered, res.data]);
                history.push("/");
            })
            .catch(err => {
                const errorRes = err.response.data.errors;
                const errorArr = [];
                for (let key of Object.keys(errorRes)) {
                    errorArr.push(errorRes[key].message);
                }
                setErrors(errorArr);
                console.log('PUT Failed');
                console.log(err.data);
            });
    }

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                console.log("GET Success");
                console.log(res.data);
                setName(res.data.name);
            })
            .catch(err => {
                console.log('GET Failed');
                console.log(err.data);
            })
    }, [id]);

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
                    <input type="submit" value="Edit" />
                </form>
            </div>
        </div>
    )
}

export default Add