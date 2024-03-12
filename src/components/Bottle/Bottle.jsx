import { useState } from 'react';
import './Bottle.css'
import { useEffect } from 'react';
import Singlebottle from '../SingleBotttle/Singlebottle';
import './Bottle.css'
import { addLocalStorage, getStoredCart } from '../../Utilities/locastorage';
import Cart from '../Cart/Cart';
const Bottle = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])
    //    data load
   useEffect(()=>{
    fetch('bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data))
   }, [])


    // load cart form local storage
   useEffect(()=>{
    console.log('called the useeffect',bottles.length)
    if(bottles.length){
        const storedCart = getStoredCart();
        console.log(storedCart, bottles)
        const savedCart = [];
        for(const id of storedCart){
            console.log(id);
            const bottle = bottles.find(bottle=> bottle.id === id);
            if(bottle){
                savedCart.push(bottle)
            }
        }
        console.log(savedCart)
        setCart(savedCart)
    }
   }, [bottles])

   const handleAddToCart = (bottle)=>{
    // console.log(bottle)
    const newCart = [...cart, bottle]
    setCart(newCart)
    addLocalStorage(bottle.id)
   }

    return (
        <div>
            <h2>Models available : {bottles.length}
            </h2>
            <Cart cart={cart}></Cart>
        <div className='Container'>
            {
                bottles.map(bottle => <Singlebottle
                key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}
                ></Singlebottle>)
            }
        </div>
        </div>
    );
};

export default Bottle;