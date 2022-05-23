import React from "react";
import {TechnologiesArrayType, TechnologyType} from "../App6";

type ToDoListPropsType = {
    technologies: TechnologiesArrayType;
    changeTechnologiesList: (newFilter: 'All' | 'Acquainted' | 'Studying') => void;
};

export function ToDo(props: any) {

    const technologiesList = props.filteredTechnologiesArray.map((tech: TechnologyType) => {
        type onClickDeleteHandlerType = (id: number) => void;
        const onClickDeleteHandler:onClickDeleteHandlerType = (id) => {
            props.deleteTechnology(id);
        }
        return (
            <li key={tech.id}>
                <button onClick={ () => {onClickDeleteHandler(tech.id)}}>Delete</button>
                <p>{tech.tech}</p>
                <input type="checkbox" checked={tech.isDone}/>
            </li>
        )
    });

    const OnClickAllHandler  = () => {
        props.changeTechnologiesList('All');
    }
    const OnClickAcquaintedHandler = () => {
        console.log('Acquainted')
        props.changeTechnologiesList('Acquainted');
    }
    const OnClickStudyingHandler = () => {
        props.changeTechnologiesList('Studying');
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

// 1. Перенести процесс фильтрации, проверить, что всё работает.

// 2. И если всё работает, то перенести процесс удаления из App to Todolist

// 3. Затем обратно процесс удаления

// 4. И если всё работает, то и фильтрацию