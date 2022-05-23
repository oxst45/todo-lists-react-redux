import React, {useState} from 'react';
import {ToDo} from "./components/ToDo";


export type TechnologyType = {
    id: number
    tech: string
    isDone: boolean
}
export type TechnologiesArrayType = Array<TechnologyType>;



export function App6() {
const technologiesInitialState = [
        {id: 1, tech: 'HTML', isDone: true},
        {id: 2, tech: 'CSS', isDone: true},
        {id: 3, tech: 'LESS', isDone: false},
        {id: 4, tech: 'JS', isDone: true},
        {id: 5, tech: 'React', isDone: false},
        {id: 6, tech: 'TS', isDone: false},
        {id: 7, tech: 'Redux', isDone: false}
    ]
    const [InitialState, setInitialState] = useState(technologiesInitialState)
        const [technologies, setTechnology] = useState(technologiesInitialState)

        const deleteTechnology = (id: number) => {setTechnology(
            technologies.filter((t) => t.id !== id)
        )}

    type ChangeISDoneType = (id: number, checkedOrNot: boolean) => void;
    const changeISDone: ChangeISDoneType = (id: number, checkedOrNot: boolean) => {
        setTechnology(technologies.map((t) => t.id === id ? t = {id: t.id, tech: t.tech, isDone: checkedOrNot} : t))
    }

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

    return (
        <div>
            <ToDo
                filteredTechnologiesArray={filteredTechnologiesArray}
                technologiesInitialState={technologiesInitialState}
                setInitialState={setInitialState}
                changeTechnologiesList={changeTechnologiesList}
                deleteTechnology={deleteTechnology}
                technologies={technologies}
                setTechnology={setTechnology}
                setFilter={setFilter}
                changeISDone={changeISDone}
            />
        </div>
    );
}

