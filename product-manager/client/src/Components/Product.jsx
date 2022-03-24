import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

const Product = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" + id)
            .then((res) => {
                setProduct(res.data);
                console.log("GET Successful");
                console.log(res.data);
            })
            .catch((err) => {
                console.log("GET Failed");
                console.log(err.data);
            });
    }, [id]);

    const deleteProduct = (id) => {
        console.log("Delete pressed");
        console.log(id);
        axios
            .delete("http://localhost:8000/api/products/" + id)
            .then((res) => {
                console.log("DELETE Success");
                console.log(res.data);
                history.push("/");
            })
            .catch((err) => {
                console.log("DELETE Failed");
                console.log(err.data);
            });
    };

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description:</p>
            <p>{product.description}</p>
            <button>
                <Link to={"/" + product._id + "/edit"}>Edit</Link>
            </button>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
    );
};

export default Product;
