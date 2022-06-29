import React, {useState} from 'react';
import {ToDo} from './components/ToDo';
import {TechnologiesArrayType, TechnologyType} from '../index';
import {v1} from 'uuid';


export type FilterType = 'All' | 'Acquainted' | 'Studying';

export type TodoListType = {
    id: string
    title: string
    filter: FilterType
}

export type TasksType = {
    [todoListID: string]: Array<TechnologyType>
}

export function App6() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodoListType>>([
        {id: todolistID1, title: 'What to learn', filter: 'All'},
        {id: todolistID2, title: 'What to buy', filter: 'All'},
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "Chocolate", isDone: true},
            {id: v1(), title: "Fresh Water", isDone: true},
            {id: v1(), title: "Candy Cane", isDone: false},
            {id: v1(), title: "Apple Juice", isDone: false},
            {id: v1(), title: "Milk", isDone: false},
        ]
    });

    const deleteTechnology = (id: string) => {
        // setTechnology(
        //     technologies.filter((t) => t.id !== id)
        // )
    }

    const addNewTech = (newTechName: string) => {
        // const newTech: TechnologyType = {
        //     id: v1(),
        //     tech: newTechName,
        //     isDone: false
        // };
        // setTechnology([...technologies, newTech]);
    }

    // // type ChangeIsDoneType = (id: number, checkedOrNot: boolean) => void;
    // // const changeISDone: ChangeIsDoneType = (id, checkedOrNot) => {
    // //     setTechnology(technologies.map((t) => t.id === id ? t = {id: t.id, tech: t.tech, isDone: checkedOrNot} : t))
    // // }
    //
    const changeIsDone = (id: string, isChecked: boolean) => {
        // setTechnology(technologies.map(
        //         (t) => t.id === id ? {id: t.id, tech: t.tech, isDone: isChecked} : t
        //     )
        // )
    }

    const changeTechnologiesList = (newFilter: FilterType) => {
        // setFilter(newFilter);
    }

    // let filteredTechArray = tasks[tl.id];
    const filteredTechArray = tasks[todolistID1];
    // if (filter === 'Studying') {
    //     filteredTechArray = technologies.filter((tech) => !tech.isDone
    //     );
    // }
    // if (filter === 'Acquainted') {
    //     filteredTechArray = technologies.filter((tech) => tech.isDone
    //     );
    // }

    const todoListComponents = todolists.map((tl) => {
        return (
            <div>
                <ToDo
                    tasks={tasks}
                    todolistID={tl.id}
                    title={tl.title}
                    filter={tl.filter}
                    filteredTechArray={filteredTechArray}
                    changeTechnologiesList={changeTechnologiesList}
                    deleteTechnology={deleteTechnology}
                    changeIsDone={changeIsDone}
                    addNewTech={addNewTech}
                />
            </div>
        );
    });
    return (
        <div>
            {todoListComponents}
        </div>
    )
}



