import React from 'react';
import './App.css';
import {NestedComponent} from "./Nested components/nestedComponent";

function App() {
    return (
        <div className="App">
            <hr/>
            <NestedComponent title={'Menu'}/>
            <NestedComponent title={'User'}/>
            <hr/>
        </div>
    );
}

export default App;
