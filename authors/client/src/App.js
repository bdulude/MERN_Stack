import React, { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Add from "./Components/Add";
import Edit from "./Components/Edit";

function App() {
    const [authorList, setAuthorList] = useState([]);

    const deleteAuthor = (deleteId) => {
        console.log("Delete Pressed", deleteId);
        axios
            .delete("http://localhost:8000/api/authors/" + deleteId)
            .then(res => {
                console.log("DELETE Success");
                console.log(res.data);
                setAuthorList(authorList.filter((author) => author._id !== deleteId));
            })
            .catch(err => {
                console.log("DELETE Failed");
                console.log(err.data);
            })
    }

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log('GET Authors Success');
                console.log(res.data.authors);
                setAuthorList(res.data.authors);
            })
            .catch((err) => {
                console.log("GET Authors Failed");
                console.log(err.data);
            });
    }, []);

    return (
        <div className="App">
            <h1>Favorite Authors</h1>
            <Route exact path={'/'}>
                <Link to={"/new"}>Add an author</Link>
                <table>
                    <thead>
                        <tr>
                            <td>Author</td>
                            <td>Actions Available</td>
                        </tr>
                    </thead>
                    <tbody>
                        {authorList.map((author) => {
                            return (
                                <tr key={author._id}>
                                    <td>{author.name}</td>
                                    <td>
                                        <button style={{ marginRight: 10 }}>
                                            <Link to={"/edit/" + author._id}>Edit</Link>
                                        </button>
                                        <button onClick={() => deleteAuthor(author._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Route>
            <Route exact path={'/new'}>
                <Add setAuthorList={setAuthorList} authorList={authorList} />
            </Route>
            <Route exact path={'/edit/:id'}>
                <Edit setAuthorList={setAuthorList} authorList={authorList} />
            </Route>
        </div>
    );
}

export default App;
