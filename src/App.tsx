import React from 'react';
import './App.css';
import {NestedComponent} from "./Nested components/nestedComponent";
import {MethodMap} from "./metodMap/MetodMap";
import {Button} from "./button/Button";

function App() {

    //  map
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    return (
        <div className="App">
            <hr/>
            <NestedComponent title={'Menu'}/>
            <NestedComponent title={'User'}/>
            <hr/>
            <MethodMap car={topCars}/>
            <hr/>
            <Button/>
        </div>
    );
}

export default App;
