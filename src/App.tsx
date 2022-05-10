import React from 'react';

import './App.css';
import {Footer} from "./Footer";
import {Header} from "./Header";
import {Main} from "./Main";
import {ts} from "./1-ts/ts";


function App() {
    ts();
    return (
        <div className="App">
            <div>
                <Header title={"header"} text={"Many letters"}/>
                <Header  title={"header2"} text={"Not so many letters"}/>
                <Main isDone={true} text={"Some text for the main section"}/>
                <Footer title={"footer header"} date={new Date()}/>
            </div>

        </div>
    );
}

export default App;
