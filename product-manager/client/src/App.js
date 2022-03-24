import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Input from './Components/Input';
import Products from './Components/Products';
import Product from './Components/Product';
import Edit from './Components/Edit';
import axios from 'axios';


function App() {

    const [productList, setProductList] = useState([]);

    const deleteProduct = (id) => {
        console.log("Delete pressed");
        console.log(id);
        axios
            .delete("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log("DELETE Success");
                console.log(res.data);
                setProductList(productList.filter((product) => product._id !== id));
            })
            .catch(err => {
                console.log("DELETE Failed");
                console.log(err.data);
            })
    }

    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'}>
                    <Input setProductList={setProductList} productList={productList} />
                    <Products setProductList={setProductList} productList={productList} deleteProduct={deleteProduct} />
                </Route>
                <Route exact path={'/:id'}>
                    <Product />
                </Route>
                <Route exact path={'/:id/edit'}>
                    <Edit />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
