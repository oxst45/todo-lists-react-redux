import React from 'react';
// import {AppWithoutReducers} from "./todolist/App-without-store";
// import {AppWithReducers} from "./App-with-store";
import {AppWithRedux} from "./App-with-redux";

function App() {

    return (
        <div className="App">
            <AppWithRedux/>
        </div>
    );
}

export default App;
