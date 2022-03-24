import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = (props) => {
    // const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data.products);
                props.setProductList(res.data.products);
                // console.log(productList);
            })
            .catch((err) => {
                console.log("GET Products Failed");
                console.log(err.data);
            });
    }, []);

    return (
        <div>
            {/* <p>{JSON.stringify(productList)}</p> */}
            <h1>All Products</h1>
            {props.productList.map((product, idx) => {
                return (
                    <div key={idx}>
                        <h4>
                            <Link to={"/" + product._id}>{product.title}</Link>
                        </h4>
                        <button
                            onClick={() => props.deleteProduct(product._id)}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
export default Products;
