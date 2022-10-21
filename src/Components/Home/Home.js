import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const [cart, setCart] = useState([])
    const tshirts = useLoaderData()
    const addToCart = tshirt => {
        const exist = cart.find(cart => cart._id === tshirt._id)
        if (exist) {
            alert('item Alradey Added')
        } else {
            const newCart = [...cart, tshirt]
            setCart(newCart);
        }
    }
    const removerBtn = tshirt => {
        const remain = cart.filter(ts => ts._id !== tshirt._id)
        setCart(remain)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        addToCart={addToCart}
                    >

                    </Tshirt>)
                }
            </div>
            <div className="acart-container">
                <Cart
                    cart={cart}
                    removerBtn={removerBtn}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;