import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterType, TasksType} from '../App6';
import {TechnologiesArrayType, TechnologyType} from '../../index';
import styles from "./ToDo.module.css";

type PropsType = {
    tasks: TasksType

    todolistID: string

    title: string

    filter: FilterType

    filteredTechArray: TechnologiesArrayType

    changeTechnologiesList: (newFilter: FilterType) => void;

    deleteTechnology: (id: string) => void

    changeIsDone: (id: string, isChecked: boolean) => void

    addNewTech: (newTechName: string) => void
};


export function ToDo(props: PropsType) {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");

    const onNewTaskChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setError("");
    }
    const onClickSubmitHandler = () => {
        if (inputValue.trim()) {
            props.addNewTech(inputValue.trim());
            setInputValue("")
        } else {
            setError("error");
        }

    }

    const technologiesList = props.tasks[props.todolistID].map((t: TechnologyType) => {

        const onClickDeleteHandler = (id: string) => {
            props.deleteTechnology(id);
        }
        const checkedStylesChanger = t.isDone ? styles.checked : styles.unchecked;
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeIsDone(t.id, e.currentTarget.checked);
        }

        return (

            <li key={t.id}>
                <button onClick={() => {
                    onClickDeleteHandler(t.id)
                }}>
                    Delete
                </button>
                <p>
                    {t.title}
                </p>
                <input type="checkbox"
                       onChange={onChangeHandler}
                       checked={t.isDone}
                       className={checkedStylesChanger}
                />

            </li>
        )
    });

    const onClickAllHandler = () => {
        props.changeTechnologiesList('All');
    }
    const onClickAcquaintedHandler = () => {
        props.changeTechnologiesList('Acquainted');
    }
    const onClickStudyingHandler = () => {
        props.changeTechnologiesList('Studying');
    }
    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        console.log("hello")
        if (e.key === 'Enter') {
            onClickSubmitHandler()
        }
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"
                       value={inputValue}
                       onChange={onNewTaskChangeHandler}
                       onKeyDown={onEnterHandler}
                />
                <button onClick={onClickSubmitHandler}
                >
                    Submit
                </button>
            </div>
            {error && <div className={styles.invalid}>
                Invalid value!
            </div>}
            <div>
                <ul>
                    {technologiesList}
                </ul>
            </div>
            <button onClick={onClickAllHandler}>
                All
            </button>
            <button onClick={onClickAcquaintedHandler}>
                Acquainted with
            </button>
            <button onClick={onClickStudyingHandler}>
                Studying
            </button>
        </div>
    );
}


