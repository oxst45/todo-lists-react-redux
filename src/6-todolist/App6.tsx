import React from 'react';
import {ToDo} from "./components/ToDo";

export type TechnologyType = {
    id: number
    tech: string
    isDone: boolean
}
export type TechnologiesArrayType = Array<TechnologyType>;

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





    return (
        <div>
            <ToDo
                technologiesArray={technologiesArray}
                // filterTechnology={filterTechnology}
            />
        </div>
    );
}

