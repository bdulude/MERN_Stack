import React, {useState} from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';

import Input from './Components/Input';
import Products from './Components/Products';
import Product from './Components/Product';


function App() {

    const [productList, setProductList] = useState([]);

    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'}>
                    <Input setProductList = {setProductList} productList = {productList}/>
                    <Products setProductList = {setProductList} productList = {productList}/>
                </Route>
                <Route exact path={'/:id'}>
                    <Product />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
