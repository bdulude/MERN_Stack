import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import DisplayPerson from './Components/DisplayPerson';
import DisplayPlanet from './Components/DisplayPlanet';
import Input from './Components/Input';
import NotTheDroids from './Components/NotTheDroids';

function App() {
    // Using Switch and Route from react router to navigate between components for different urls
    return (
        <div className="App">
            <Input />
            <Switch>
                <Route exact path={"/people/:id"}>
                    <DisplayPerson />
                </Route>
                <Route exact path={"/planet/:id"}>
                    <DisplayPlanet />
                </Route>
                <Route exact path={"/error"}>
                    <NotTheDroids />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
