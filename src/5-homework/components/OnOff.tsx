import React, {useState} from 'react';
import './OnOff.css';



export function OnOff() {

// let isOn: boolean = false;

    // Задача по клику на on - загорается зеленым;
    // Задача по клику на off - загорается красным;

    // const res = useState(true); // Array with two parametres
    // let isOn = res[0]; // State value
    // const setOn = res[1]; // The function that changes state

    const [isOn, setIsOn] = useState(true);
    // const onClickHandler = () => {isOn = !isOn};
    // const onClickHandler = () => {setIsOn(!isOn)};
    const onClickHandler = (btnName: 'on' | 'off') => {
        if (btnName === 'on') {
            setIsOn(true);
        }
        if (btnName === 'off') {
            setIsOn(false);
        }
    }
    return (
        <div className={'on-off'}>

            <span onClick={() => {onClickHandler('on')}} className={isOn ? 'on active' : 'on'}>On</span>

            <span  onClick={() => {onClickHandler('off')}}  className={!isOn ? 'off active' : 'off'}>Off</span>

            {/* Индикатор светится тем цветом, что и кнопка*/}
            <span className={isOn ? "indicator on" : "indicator off"}></span>
        </div>
    );
}

