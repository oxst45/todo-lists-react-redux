import React from "react";
import {TechnologiesArrayType, TechnologyType} from "../App6";

type ToDoListPropsType = TechnologiesArrayType;

export function ToDo(props: TechnologiesArrayType) {

    const technologiesList = props.technologiesArray.map((tech: TechnologyType) => {
        return (
            <li>
                <button>Delete</button>
                <p>{tech.tech}</p>
                <input type="checkbox" checked={tech.isDone}/>
            </li>
        )
    });

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
            <h3>TODOLIST</h3>
            <div>
                <input type="text"/>
                <button>Submit</button>
            </div>
            <div>
                <ul>
                {technologiesList}
                </ul>
            </div>
            <button onClick={OnClickAllHandler}>All</button>
            <button onClick={OnClickAcquaintedHandler}>Acquainted with</button>
            <button onClick={OnClickStudyingHandler}>Studying</button>
        </div>
    );
}