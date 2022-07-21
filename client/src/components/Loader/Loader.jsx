import React from 'react';
import cl from './Loader.module.css'

const Loader = () => {
    return (
        <div className={cl.container}>
            <div className={cl.yellow}></div>
            <div className={cl.red}></div>
            <div className={cl.blue}></div>
            <div className={cl.violet}></div>
        </div>
    );
};

export default Loader;