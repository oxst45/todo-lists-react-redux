import React from 'react';
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";

export function App2() {
    return (
        <div>
            <div>
                <Header title={"header"} text={"Many letters"}/>
                <Header  title={"header2"} text={"Not so many letters"}/>
                <Main isDone={true} text={"Some text for the main section"}/>
                <Footer title={"footer header"} date={new Date()}/>
            </div>
        </div>
    );
}

