import React, {useState} from 'react';
import {ToDo} from './components/ToDo';
import {v1} from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterType = 'All' | 'Acquainted' | 'Studying';

export type TodoListType = {
    id: string
    title: string
    filter: FilterType
}

export type TasksType = {
    [todoListID: string]: Array<TaskType>
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

    const deleteTask = (todolistID: string, id: string) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter((t) => t.id !== id)})
    }
    const addTask = (todolistID: string, taskTitle: string) => {
        const newTask = {
            id: v1(),
            title: taskTitle,
            isDone: false
        }
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }

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
                    // filteredTechArray={filteredTechArray}
                    changeTechnologiesList={changeTechnologiesList}
                    deleteTask={deleteTask}
                    changeIsDone={changeIsDone}
                    addTask={addTask}
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



