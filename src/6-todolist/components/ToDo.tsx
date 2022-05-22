import React from "react";


export function ToDo(props: any) {
    const OnClickAllHandler  = () => {
        props.filterTechnology('All');
    }
    const OnClickAcquaintedHandler = () => {
        console.log('Acquainted')
        props.filterTechnology('Acquainted');
    }
    const OnClickStudyingHandler = () => {
        props.filterTechnology('Studying');
    }
    return (
        <div>
            <div>
                <input type="text"/>
                <button>Submit</button>
            </div>
            <div>
                <ul>
                {props.technologiesList}
                </ul>
            </div>
            <button onClick={OnClickAllHandler}>All</button>
            <button onClick={OnClickAcquaintedHandler}>Acquainted with</button>
            <button onClick={OnClickStudyingHandler}>Studying</button>
        </div>
    );
}