import React from 'react';
import {Car} from "../4-car/components/Car";

type CarListType = Array<CarType>;

type CarType = {
    id: number
    manufacturer: string
    model: string
}

const topCars: CarListType = [
    {id: 1, manufacturer: 'BMW', model: "m5cs"},
    {id: 2, manufacturer: 'Mercedes', model: "e63s"},
    {id: 3, manufacturer: 'Audi', model: "rs6"},

]

export function App4() {
    const carList = topCars.map((car) => {
        return (
            <li key={car.id}>
                <Car manufacturer={car.manufacturer} model={car.model}/>
            </li>
        )
    });
    return (
        <div>
            <h3>
                Cars list
            </h3>
            <ul>
                {carList}
            </ul>
        </div>
    );
}

