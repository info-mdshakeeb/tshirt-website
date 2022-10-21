import React from 'react';
import './Cart.css';

const Cart = ({ cart, removerBtn }) => {

    return (
        <div className='cart-container'>
            <h3>Order Sumarry</h3>
            <p>Selected Items : {cart.length}</p>
            {
                cart.map(tshirt =>
                    <div className="">
                        <div key={tshirt._id} className="cart">
                            <p>
                                {tshirt.name}
                            </p>
                            <button
                                onClick={() => removerBtn(tshirt)}
                            >X
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;