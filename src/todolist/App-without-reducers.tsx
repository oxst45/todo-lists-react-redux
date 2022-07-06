import React, {useState} from 'react';
import {ToDo} from './components/ToDo';
import {v1} from 'uuid';
import {AddItemForm} from "./components/AddItemForm";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed';

export type TodoListType = {
    id: string
    title: string
    filter: FilterType
}

export type TasksType = {
    [todoListID: string]: Array<TaskType>
}

export function AppWithoutReducers() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
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
    const changeTaskTitle = (todoListID: string, id: string, title: string) => {
        setTasks({
            ...tasks,
            [todoListID]: tasks[todoListID].map((t) => t.id === id ? {...t, title} : t)
        })
    }
    const changeTodolistTitle = (todoListID: string, title: string) => {
        setTodoLists(todoLists.map((tl) => tl.id === todoListID ? {...tl, title} : tl
        ))
    }
    const deleteTask = (todolistID: string, id: string) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter((t) => t.id !== id)})
    }
    const deleteTodolist = (todolistID: string) => {
        setTodoLists(todoLists.filter((tl) => tl.id !== todolistID))
        delete tasks[todolistID];
    }

    const switchFilter = (todolistID: string, newFilter: FilterType) => {
        const newState = todoLists.map((tl) => {
            return tl.id === todolistID ? { ...tl, filter: newFilter } : tl;
        })
        setTodoLists(newState)
    }
    const addTask = (todolistID: string, taskTitle: string) => {
        const newTask = {
            id: v1(),
            title: taskTitle,
            isDone: false
        }
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }
    const changeTaskStatus = (todolistID: string, taskID: string, isDone: boolean) => {
        setTasks({
            ...tasks,
            [todolistID]: tasks[todolistID].map((t) => t.id === taskID ? {...t, isDone} : t)
        })
    }
    const addTodoList = (newTitle: string) => {

    }



    const todoListComponents = todoLists.map((tl) => {
        return (
            <div>
                <ToDo
                    tasks={tasks}
                    todolistID={tl.id}
                    title={tl.title}
                    filter={tl.filter}
                    changeTaskStatus={changeTaskStatus}
                    deleteTask={deleteTask}
                    addTask={addTask}
                    changeTaskTitle={changeTaskTitle}
                    changeTodolistTitle={changeTodolistTitle}
                    switchFilter={switchFilter}
                    deleteTodolist={deleteTodolist}

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



