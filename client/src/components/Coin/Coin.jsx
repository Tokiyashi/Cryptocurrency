import React from 'react';

const Coin = ({name, usdPrice, id}) => {
    return (
        <div>
            <h4> {name} </h4>
            <p> {usdPrice}  </p>
        </div>
    );
};

export default Coin;