import React from "react";

type CarPropsType = {
    manufacturer: string
    model: string
}

export function Car(props: CarPropsType) {
    return (
        <div>
            {props.manufacturer}: {props.model};
        </div>
    )
}