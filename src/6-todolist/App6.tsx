import React, {useState} from 'react';
import {ToDo} from "./components/ToDo";

export type TechnologyType = {
    id: number
    tech: string
    isDone: boolean
}
export type TechnologiesArrayType = Array<TechnologyType>;



export function App6() {
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
            filteredTechnologiesArray = technologies.filter((tech) => !tech.isDone);
        }
        if (filter === 'Acquainted') {
            filteredTechnologiesArray = technologies.filter((tech) => tech.isDone);
        }







    return (
        <div>
            <ToDo
                filteredTechnologiesArray={filteredTechnologiesArray}
                changeTechnologiesList={changeTechnologiesList}
                deleteTechnology={deleteTechnology}
            />
        </div>
    );
}

