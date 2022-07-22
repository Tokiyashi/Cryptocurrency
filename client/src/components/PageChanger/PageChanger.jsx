import React from 'react';
import arrow from './Arrow - Up.svg'

const PageChanger = ({nextPage, firstPage, previousPage, page}) => {
    return (
        <div style={{display: "flex", gap: "5px"}}>
            <img
                onClick={() => previousPage()}
                style={{transform: "rotate(-90deg)"}}
                src={arrow}
            />
            <div> {
                page === 1
                    ?  <p>  {page} </p>
                    :   <div style={{display: "flex", gap: "4px"}}>
                        <p onClick={()=> firstPage()}> 1...</p> <p>  {page-1 } </p> <p style={{color: "blue"}}>  {page} </p>  <p>  {page+1 } </p>
                    </div>
            } </div>

            <img
                onClick={() => nextPage()}
                style={{transform: "rotate(90deg)"}}
                src={arrow}
            />
        </div>
    );
};

export default PageChanger;