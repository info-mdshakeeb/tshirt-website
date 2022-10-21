import React from 'react';
import './Tshirt.css';

const Tshirt = ({ tshirt, addToCart }) => {
    const { name, picture, price } = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <div className="body">
                <h4>Name : {name}</h4>
                <p>{price}</p>
            </div>
            <div className="button ">
                <button onClick={() => addToCart(tshirt)}>AddTo Cart</button>
            </div>
        </div>
    );
};

export default Tshirt;