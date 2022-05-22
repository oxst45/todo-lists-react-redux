import React from 'react';
import {ToDo} from "./components/ToDo";

type TechnologyType = {
    id: number
    tech: string
    isDone: boolean
}
type TechnologiesArrayType = Array<TechnologyType>;
const technologiesArray: TechnologiesArrayType = [
    {id: 1, tech: 'HTML', isDone: true},
    {id: 2, tech: 'CSS', isDone: true},
    {id: 3, tech: 'LESS', isDone: false},
    {id: 4, tech: 'JS', isDone: true},
    {id: 5, tech: 'React', isDone: false},
    {id: 6, tech: 'TS', isDone: false},
    {id: 7, tech: 'Redux', isDone: false}
]

export function App6() {
    let filteredTechnologiesArray: TechnologiesArrayType = technologiesArray;
    const filterTechnology = (filter: 'All' | 'Acquainted' | 'Studying') => {
        if (filter === 'All') {
            filteredTechnologiesArray = technologiesArray;
        }
        if (filter === 'Studying') {
            filteredTechnologiesArray = technologiesArray.filter((tech) => !tech.isDone);
        }
        if (filter === 'Acquainted') {
            filteredTechnologiesArray = technologiesArray.filter((tech) => tech.isDone);
        }

    }


    const technologiesList = filteredTechnologiesArray.map((tech) => {
        return (
            <li>
            <button>Delete</button>
                <p>{tech.tech}</p>
                <input type="checkbox" checked={tech.isDone}/>
            </li>
        )
    });


    return (
        <div>
            <ToDo
                technologiesList={technologiesList}
                filterTechnology={filterTechnology}
            />
        </div>
    );
}

