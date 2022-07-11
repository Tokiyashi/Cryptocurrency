import React from 'react';
import arrow from './Arrow - Up.svg'

const PageChanger = ({nextPage, previousPage, page}) => {
    return (
        <div style={{display: "flex", gap: "5px"}}>
            <img
                onClick={() => previousPage()}
                style={{transform: "rotate(-90deg)"}}
                src={arrow}
            />
            <p> {page} </p>

            <img
                onClick={() => nextPage()}
                style={{transform: "rotate(90deg)"}}
                src={arrow}
            />
        </div>
    );
};

export default PageChanger;