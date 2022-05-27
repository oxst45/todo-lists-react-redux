import React, {useState} from 'react';
import {ToDo} from './components/ToDo';
import {TechnologiesArrayType, TechnologyType} from '../index';
import {v1} from 'uuid';


export type FilterType = 'All' | 'Acquainted' | 'Studying';

type PropsType = {
    technologiesInitialState: TechnologiesArrayType
}

export function App6(props: PropsType) {

    const [technologies, setTechnology] = useState(props.technologiesInitialState)
    const deleteTechnology = (id: string) => {
        setTechnology(
            technologies.filter((t) => t.id !== id)
        )
    }

    const addNewTech = (newTechName: string) =>{
        const newTech: TechnologyType = {
            id: v1(),
            tech: newTechName,
            isDone: false
        };
        setTechnology([...technologies, newTech]);
    }

    // type ChangeIsDoneType = (id: number, checkedOrNot: boolean) => void;
    // const changeISDone: ChangeIsDoneType = (id, checkedOrNot) => {
    //     setTechnology(technologies.map((t) => t.id === id ? t = {id: t.id, tech: t.tech, isDone: checkedOrNot} : t))
    // }

    const changeIsDone = (id: string, isChecked: boolean) => {
        setTechnology(technologies.map(
                (t) => t.id === id ? {id: t.id, tech: t.tech, isDone: isChecked} : t
            )
        )
    }

    const [filter, setFilter] = useState('All');
    const changeTechnologiesList = (newFilter: FilterType) => {
        setFilter(newFilter);
    }
    let filteredTechArray = technologies;
    if (filter === 'Studying') {
        filteredTechArray = technologies.filter((tech) => !tech.isDone
        );
    }
    if (filter === 'Acquainted') {
        filteredTechArray = technologies.filter((tech) => tech.isDone
        );
    }

    return (
        <div>
            <ToDo
                filteredTechArray={filteredTechArray}
                changeTechnologiesList={changeTechnologiesList}
                deleteTechnology={deleteTechnology}
                changeIsDone={changeIsDone}
                addNewTech={addNewTech}
            />
        </div>
    );
}



