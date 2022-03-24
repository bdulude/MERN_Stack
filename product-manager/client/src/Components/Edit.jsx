import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Input = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" + id)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                console.log("GET Successful");
                console.log(res.data);
            })
            .catch((err) => {
                console.log("GET Failed");
                console.log(err.data);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let product = {
            title: title,
            price: price,
            description: description,
        };
        // console.log(product);
        axios
            .put("http://localhost:8000/api/products/" + id, product)
            .then((res) => {
                console.log("PUT Success");
                console.log(res.data);
                history.push("/");
            })
            .catch((err) => {
                console.log(err.data);
                console.log("PUT Error");
            });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 10 }}>
            <label htmlFor="title">Title: </label>
            <br />
            <input
                name="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title || ""}
            />
            <br />
            <label htmlFor="price">Price: </label>
            <br />
            <input
                name="price"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price || 0}
            />
            <br />
            <label htmlFor="description">Description: </label>
            <br />
            <input
                name="description"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description || ""}
            />
            <br />
            <input type="submit" value="Edit" />
        </form>
    );
};

export default Input;
