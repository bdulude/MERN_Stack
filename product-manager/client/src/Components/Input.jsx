import React, {useState} from 'react';
import axios from 'axios';

const Input = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let product = {
            title: title,
            price: price,
            description: description
        }
        // console.log(product);
        axios.post('http://localhost:8000/api/products', product)
            .then( res => {
                console.log(res.data);
                console.log("Post Success");
                props.setProductList([...props.productList, res.data]);
                setTitle("");
                setPrice(0);
                setDescription("");
            })
            .catch(err => {
                console.log(err.data);
                console.log("Post Error");
            })
    }

    return (
        <form onSubmit={ handleSubmit } style={{marginBottom: 10}}>
            <label htmlFor="title">Title: </label>
            <br />
            <input name='title' type="text" onChange={(e) => setTitle(e.target.value)} value={title}  style={{marginRight: 10}}/>
            <br />
            <label htmlFor="price">Price: </label>
            <br />
            <input name='price' type="number" onChange={(e) => setPrice(e.target.value)} value={price}  style={{marginRight: 10}}/>
            <br />
            <label htmlFor="description">Description: </label>
            <br />
            <input name='description' type="text" onChange={(e) => setDescription(e.target.value)} value={description}  style={{marginRight: 10}}/>
            <br />
            <input type="submit" value="Add" />
        </form>
    )
}

export default Input