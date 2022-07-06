import {FilterType, TodoListType} from '../App-without-reducers';
import {v1} from "uuid";

export const DELETE_TODOLIST = 'DELETE-TODOLIST'
export const ADD_TODOLIST = 'ADD-TODOLIST'
export const CHANGE_TITLE = 'CHANGE-TITLE'
export const CHANGE_FILTER = 'CHANGE-FILTER'

export type ActionType =
    DeleteTodolistAT |
    AddTodolistAT |
    ChangeTodolistTitleAT |
    ChangeTodolistFilterAT

export type DeleteTodolistAT = {
    type: typeof DELETE_TODOLIST // type: 'DELETE-TODOLIST'
    todolistID: string
}
export type AddTodolistAT = {
    type: typeof ADD_TODOLIST
    newTitle: string
    newTodolistID: string
}
export type ChangeTodolistTitleAT = {
    type: typeof CHANGE_TITLE
    newTitle: string
    todolistID: string
}
export type ChangeTodolistFilterAT = {
    type: typeof CHANGE_FILTER
    todolistID: string
    newFilter: FilterType
}


const initialState: Array<TodoListType> = [];

export const todolistReducer = (todolists = initialState, action: ActionType): Array<TodoListType> => {

    switch (action.type) {
        case DELETE_TODOLIST:
            return todolists.filter((tl) => tl.id !== action.todolistID)
        case ADD_TODOLIST:
            return (
                [
                    ...todolists,
                    {
                        id: action.newTodolistID,
                        title: action.newTitle,
                        filter: 'all'
                    }
                ]
            )
        case CHANGE_TITLE:
            return (
                todolists.map((tl) => tl.id === action.todolistID ? {...tl, title: action.newTitle} : tl
                )
            )
        case CHANGE_FILTER:
            return (
                todolists.map((tl) => {
                    return tl.id === action.todolistID ? {...tl, filter: action.newFilter} : tl;
                })
            )
        default:
            return todolists;
    }
}


export const removeTodolistAC = (todolistID: string): DeleteTodolistAT => {
    return {
        type: DELETE_TODOLIST,
        todolistID
    }
}

export const addTodolistAC = (newTitle: string): AddTodolistAT => {
    return {
        type: ADD_TODOLIST,
        newTodolistID: v1(),
        newTitle
    }
}

export const changeTitleAC = (todolistID: string, newTitle: string): ChangeTodolistTitleAT => {
    return {
        type: CHANGE_TITLE,
        todolistID,
        newTitle
    }
}

export const changeFilterAC = (id: string, filter: FilterType): ChangeTodolistFilterAT => {
    return {
        type: CHANGE_FILTER,
        todolistID: id,
        newFilter: filter
    }
}