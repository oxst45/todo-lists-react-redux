import React, {ChangeEvent, useState} from 'react';
import {FilterType} from '../App6';
import {TechnologiesArrayType, TechnologyType} from '../../index';

type PropsType = {
    filteredTechArray: TechnologiesArrayType

    changeTechnologiesList: (newFilter: FilterType) => void;

    deleteTechnology: (id: string) => void

    changeIsDone: (id: string, isChecked: boolean) => void

    addNewTech: (newTechName: string) => void
};



export function ToDo(props: PropsType) {
    const [inputValue, setInputValue] = useState('');

    const onNewTaskChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    const onClickSubmitHandler = () => {
        props.addNewTech(inputValue);
        setInputValue('')
    }

    const technologiesList = props.filteredTechArray.map((tech: TechnologyType) => {

        const onClickDeleteHandler = (id: string) => {
            props.deleteTechnology(id);
        }
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeIsDone(tech.id, e.currentTarget.checked);
        }
        return (
            <li key={tech.id}>
                <button onClick={() => {
                    onClickDeleteHandler(tech.id)
                }}>
                    Delete
                </button>
                <p>
                    {tech.tech}
                </p>
                <input type="checkbox"
                       onChange={onChangeHandler}
                       checked={tech.isDone}
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
    return (
        <div>
            <h3>TODOLIST</h3>
            <div>
                <input type="text"
                       value={inputValue}
                       onChange={onNewTaskChangeHandler}
                />
                <button onClick={onClickSubmitHandler}>
                    Submit
                </button>
            </div>
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


