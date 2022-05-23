import React, {useState} from 'react';
import {ToDo} from "./components/ToDo";

export type TechnologyType = {
    id: number
    tech: string
    isDone: boolean
}
export type TechnologiesArrayType = Array<TechnologyType>;



export function App6() {














    return (
        <div>
            <ToDo
                // filteredTechnologiesArray={filteredTechnologiesArray}
                // changeTechnologiesList={changeTechnologiesList}
                // deleteTechnology={deleteTechnology}
                // technologies={technologies}
            />
        </div>
    );
}

