const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

const savedCartTols = cart =>{
    const cartStringiFied = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringiFied)
}

const addLocalStorage = id =>{
    const cart = getStoredCart()
    cart.push(id);
    // save local storage
    savedCartTols(cart)
}

export{ addLocalStorage, getStoredCart}