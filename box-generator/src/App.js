import './App.css';
import React, {useState} from 'react';
import Input from './Components/Input';
import Display from './Components/Display';

function App() {
    const [boxes, setBoxes] = useState([]);

    const newBox = ( box ) => {
        setBoxes([...boxes, box]);
    }

    return (
        <div className="App">
            <Input onNewBox={ newBox }/>
            <Display boxArr={ boxes }/>
        </div>
    );
}

export default App;
