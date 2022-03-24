import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

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

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description:</p>
            <p>{product.description}</p>
        </div>
    );
};

export default Product;
