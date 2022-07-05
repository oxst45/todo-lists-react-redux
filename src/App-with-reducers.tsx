import React, {useReducer} from 'react';
import {v1} from "uuid";
import {ToDo} from "./todolist/components/ToDo";

import {
    addTaskAC,
    changeTaskIsDoneAC,
    changeTaskTitleAC,
    deleteTaskAC,
    tasksReducer
} from "./todolist/reducers/tasks-reducer";
import {
    addTodolistAC,
    changeFilterAC,
    changeTitleAC,
    removeTodolistAC,
    todolistReducer
} from "./todolist/reducers/todolist-reducer";


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

export function AppWithReducers() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    const [todoLists, dispatchTodoLists] = useReducer(todolistReducer, [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    const [tasks, dispatchTasks] = useReducer(tasksReducer, {
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
        dispatchTasks(changeTaskTitleAC(todoListID, id, title));
    }
    const changeTodolistTitle = (todoListID: string, title: string) => {
        dispatchTodoLists(changeTitleAC(title, todoListID))
    }
    const deleteTask = (todolistID: string, id: string) => {
        dispatchTasks(deleteTaskAC(todolistID, id))
    }
    const deleteTodolist = (todolistID: string) => {
        dispatchTodoLists(removeTodolistAC(todolistID))
        delete tasks[todolistID]
    }

    const switchFilter = (todolistID: string, newFilter: FilterType) => {
        dispatchTodoLists(changeFilterAC(todolistID, newFilter))
    }
    const addTask = (todolistID: string, taskTitle: string) => {
        dispatchTasks(addTaskAC(todolistID, taskTitle))
    }
    const addTodoList = (title: string) => {
        const action = addTodolistAC(title)
        dispatchTasks(action)
        dispatchTodoLists(action)
    }
    const changeTaskStatus = (todolistID: string, taskID: string, isDone: boolean) => {
        dispatchTasks(changeTaskIsDoneAC(todolistID, taskID, isDone))
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



