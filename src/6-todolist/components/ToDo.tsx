import React, {useState} from "react";
import {TechnologiesArrayType, TechnologyType} from "../App6";

type ToDoListPropsType = {
    technologies: TechnologiesArrayType;
    changeTechnologiesList: (newFilter: 'All' | 'Acquainted' | 'Studying') => void;
};
export function ToDo(props: any) {

    const [filter, setFilter] = useState('All');
    type FilterTechnologyType = (newFilter: 'All' | 'Acquainted' | 'Studying') => void;

    const changeTechnologiesList: FilterTechnologyType = (newFilter) => {

        setFilter(newFilter);
    }

    let filteredTechnologiesArray = props.technologies;

    if (filter === 'Studying') {
        filteredTechnologiesArray = props.technologies.filter((tech: TechnologyType) => !tech.isDone);
    }
    if (filter === 'Acquainted') {
        filteredTechnologiesArray = props.technologies.filter((tech: TechnologyType) => tech.isDone);
    }

    const technologiesList = filteredTechnologiesArray.map((tech: TechnologyType) => {
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

