import React from 'react';
import cl from './Dropdown.module.css'

const Dropdown = ({children}) => {
    return (
        <div className={cl.dropdown}>
                {
                    children.map((item, index) =>{
                        return (!!item)&&<div key={index} className={cl.dropdown__item}> {item} </div>}
                    )
                }
        </div>
    );
};

export default Dropdown;