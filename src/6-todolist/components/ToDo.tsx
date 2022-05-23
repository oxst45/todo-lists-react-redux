import React, {useState} from "react";
import {TechnologiesArrayType, TechnologyType} from "../App6";

type ToDoListPropsType = {
    technologies: TechnologiesArrayType;
    changeTechnologiesList: (newFilter: 'All' | 'Acquainted' | 'Studying') => void;
};

export function ToDo(props: any) {
    const [technologies, setTechnology] = useState([
        {id: 1, tech: 'HTML', isDone: true},
        {id: 2, tech: 'CSS', isDone: true},
        {id: 3, tech: 'LESS', isDone: false},
        {id: 4, tech: 'JS', isDone: true},
        {id: 5, tech: 'React', isDone: false},
        {id: 6, tech: 'TS', isDone: false},
        {id: 7, tech: 'Redux', isDone: false}
    ])

    const deleteTechnology = (id: number) => {setTechnology(
        technologies.filter((t) => t.id !== id)
    )}
    const [filter, setFilter] = useState('All');
    type FilterTechnologyType = (newFilter: 'All' | 'Acquainted' | 'Studying') => void;

    const changeTechnologiesList: FilterTechnologyType = (newFilter) => {

        setFilter(newFilter);
    }

    let filteredTechnologiesArray = technologies;

    if (filter === 'Studying') {
        filteredTechnologiesArray = technologies.filter((tech: TechnologyType) => !tech.isDone);
    }
    if (filter === 'Acquainted') {
        filteredTechnologiesArray = technologies.filter((tech: TechnologyType) => tech.isDone);
    }

    const technologiesList = filteredTechnologiesArray.map((tech: TechnologyType) => {
        type onClickDeleteHandlerType = (id: number) => void;
        const onClickDeleteHandler:onClickDeleteHandlerType = (id) => {
            deleteTechnology(id);
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
        changeTechnologiesList('All');
    }
    const OnClickAcquaintedHandler = () => {
        console.log('Acquainted')
        changeTechnologiesList('Acquainted');
    }
    const OnClickStudyingHandler = () => {
        changeTechnologiesList('Studying');
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

