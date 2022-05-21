import React from "react";


export function ToDo(props: any) {
    return (
        <div>
            <div>
                <input type="text"/>
                <button>Submit</button>
            </div>
            <div>
                <ul>
                {props.technologiesList}
                </ul>
            </div>
            <button>All</button>
            <button>Acquainted with</button>
            <button>In process</button>
        </div>
    );
}