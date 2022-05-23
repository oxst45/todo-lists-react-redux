import React, {useState} from "react";
import {TechnologiesArrayType, TechnologyType} from "../App6";

type ToDoListPropsType = {
    technologies: TechnologiesArrayType;
    changeTechnologiesList: (newFilter: 'All' | 'Acquainted' | 'Studying') => void;
};
export function ToDo(props: any) {
    const [inputValue, setInputValue] = useState('');


    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        console.log(inputValue)
    }

    const OnClickSubmitHandler = (inputValue: string) => {

            const newTechnology = { id: props.technologiesInitialState.length, tech: inputValue, isDone: false };
        props.setTechnology([...props.technologies, newTechnology]);
        props.setInitialState([...props.technologiesInitialState, newTechnology]);
    }


    const technologiesList = props.filteredTechnologiesArray.map((tech: TechnologyType) => {
        let checkClick = tech.isDone;
        type onClickDeleteHandlerType = (id: number) => void;
        const onClickDeleteHandler:onClickDeleteHandlerType = (id) => {
            props.deleteTechnology(id);
        }
        const onClickCheckedHandler = () => {

            checkClick = !checkClick;
            tech.isDone = !tech.isDone;
            let checkedOrNot = tech.isDone;
            props.changeISDone(tech.id, checkedOrNot);
        }
        return (
            <li key={tech.id}>
                <button onClick={ () => {onClickDeleteHandler(tech.id)}}>Delete</button>
                <p>{tech.tech}</p>
                <input type="checkbox" onClick={onClickCheckedHandler} checked={checkClick}/>
            </li>
        )
    });

    const OnClickAllHandler  = () => {
        props.changeTechnologiesList('All');
    }
    const OnClickAcquaintedHandler = () => {
        props.changeTechnologiesList('Acquainted');
    }
    const OnClickStudyingHandler = () => {
        props.changeTechnologiesList('Studying');
    }
    return (
        <div>
            <h3>TODOLIST</h3>
            <div>
                <input type="text" value={inputValue} onChange={inputHandler}/>
                <button onClick={() => {OnClickSubmitHandler(inputValue)}}>Submit</button>
            </div>
            <div>
                <ul>
                {technologiesList}
                </ul>
            </div>
            <button onClick={OnClickAllHandler}>All</button>
            <button onClick={OnClickAcquaintedHandler}>Acquainted with</button>
            <button onClick={OnClickStudyingHandler}>Studying</button>
        </div>
    );
}

