import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterType, TasksType, TaskType} from '../App-without-reducers';
import styles from "./ToDo.module.css";
import {EditableTitle} from "./EditableTitle";
import {AddItemForm} from "./AddItemForm";

type PropsType = {
    tasks: TasksType

    todolistID: string

    title: string

    filter: FilterType

    changeTaskTitle: (todoListID: string, id: string, title: string) => void

    changeTodolistTitle: (todoListID: string, title: string) => void

    deleteTask: (todolistID: string, id: string) => void

    addTask: (todolistID: string, taskTitle: string) => void

    changeTaskStatus: (todolistID: string, taskID: string, isDone: boolean) => void
    switchFilter: (todolistID: string, newFilter: FilterType) => void
    deleteTodolist: (todolistID: string) => void

};


export function ToDo(props: PropsType) {
    let filteredTaskList = props.tasks[props.todolistID]
    if (props.filter === 'active') {
        filteredTaskList = props.tasks[props.todolistID].filter((t) => !t.isDone)
    }
    if (props.filter === 'completed') {
        filteredTaskList = props.tasks[props.todolistID].filter((t) => t.isDone)
    }
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");

    const onNewTaskChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setError("");
    }
    const onClickSubmitHandler = () => {
        if (inputValue.trim()) {
            props.addTask(props.todolistID, inputValue.trim());
            setInputValue("")
        } else {
            setError("error");
        }

    }

    const taskList = filteredTaskList.map((t: TaskType) => {

        const onClickDeleteHandler = (id: string) => {
            props.deleteTask(props.todolistID, id);
        }
        // const checkedStylesChanger = t.isDone ? styles.checked : styles.unchecked;
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

            props.changeTaskStatus(props.todolistID, t.id, e.currentTarget.checked)
        }
        const editTaskTitle = (title: string) => {
            props.changeTaskTitle(props.todolistID, t.id, title)
        }

        return (

            <li key={t.id}>
                <button onClick={() => {
                    onClickDeleteHandler(t.id)
                }}>
                    Delete
                </button>
                <p>
                    <EditableTitle title={t.title}
                                   editTitle={editTaskTitle}/>
                    <input type="checkbox"
                           checked={t.isDone}
                           onChange={onChangeHandler}/>
                </p>

            </li>
        )
    });


    const onDelTodolistClickHandler = () => {
        props.deleteTodolist(props.todolistID);
    }
    const onClickAllHandler = () => {
        props.switchFilter(props.todolistID,'all');
    }
    const onClickAcquaintedHandler = () => {
        props.switchFilter(props.todolistID,'completed');
    }
    const onClickStudyingHandler = () => {
        props.switchFilter(props.todolistID,'active');
    }
    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        console.log("hello")
        if (e.key === 'Enter') {
            onClickSubmitHandler()
        }
    }
    const editTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.todolistID, title)
    }
    const addTask = (title: string) => {
        props.addTask(props.todolistID, title)
    }

    return (
        <div>
            <h3>
                <EditableTitle title={props.title} editTitle={editTodolistTitle}/>
                <button onClick={onDelTodolistClickHandler}>❌</button>
            </h3>
            <AddItemForm addItem={addTask}/>
            {/*<div>*/}
            {/*    <input type="text"*/}
            {/*           value={inputValue}*/}
            {/*           onChange={onNewTaskChangeHandler}*/}
            {/*           onKeyDown={onEnterHandler}*/}
            {/*    />*/}
            {/*    <button onClick={onClickSubmitHandler}*/}
            {/*    >*/}
            {/*        Submit*/}
            {/*    </button>*/}
            {/*</div>*/}
            {error && <div className={styles.invalid}>
                Invalid value!
            </div>}
            <div>
                <ul>
                    {taskList}
                </ul>
            </div>
            <button onClick={onClickAllHandler}>
                All
            </button>
            <button onClick={onClickAcquaintedHandler}>
                Done
            </button>
            <button onClick={onClickStudyingHandler}>
                Active
            </button>

        </div>
    );
}


