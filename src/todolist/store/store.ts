import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {todolistReducer} from "./todolist-reducer";


const rootReducer = combineReducers({
    tasks: tasksReducer,
    todoLists: todolistReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>;
export const appStore = createStore(rootReducer);
