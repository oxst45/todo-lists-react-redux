import React, {useReducer} from 'react';
import {v1} from "uuid";
import {ToDo} from "./todolist/components/ToDo";

import {
    addTaskAC,
    changeTaskIsDoneAC,
    changeTaskTitleAC,
    deleteTaskAC,
    tasksReducer
} from "./todolist/store/tasks-reducer";
import {
    addTodolistAC,
    changeFilterAC,
    changeTitleAC,
    removeTodolistAC,
    todolistReducer
} from "./todolist/store/todolist-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./todolist/store/store";
import {AddItemForm} from "./todolist/components/AddItemForm";


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

export function AppWithRedux() {

    const todoLists = useSelector<AppRootStateType, Array<TodoListType>>((appRootState) => appRootState.todoLists);

    const tasks = useSelector<AppRootStateType, TasksType>(state => state.tasks);

    const dispatch = useDispatch();

    const changeTaskTitle = (todoListID: string, id: string, title: string) => {
        dispatch(changeTaskTitleAC(todoListID, id, title));
    }
    const changeTodolistTitle = (todoListID: string, title: string) => {
        dispatch(changeTitleAC(title, todoListID))
    }
    const deleteTask = (todolistID: string, id: string) => {
        dispatch(deleteTaskAC(todolistID, id))
    }
    const deleteTodolist = (todolistID: string) => {
        dispatch(removeTodolistAC(todolistID))
        delete tasks[todolistID]
    }

    const switchFilter = (todolistID: string, newFilter: FilterType) => {
        dispatch(changeFilterAC(todolistID, newFilter))
    }
    const addTask = (todolistID: string, taskTitle: string) => {
        dispatch(addTaskAC(todolistID, taskTitle))
    }
    const addTodoList = (title: string) => {
        const action = addTodolistAC(title)
        dispatch(action)
    }
    const changeTaskStatus = (todolistID: string, taskID: string, isDone: boolean) => {
        dispatch(changeTaskIsDoneAC(todolistID, taskID, isDone))
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
            <AddItemForm addItem={addTodoList}/>
            {todoListComponents}
        </div>
    )
}



