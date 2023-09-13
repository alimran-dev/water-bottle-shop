const addToLs = (bottle) => {
    const prevCartStr = localStorage.getItem('cart');
    if (prevCartStr) {
        const prevCart = JSON.parse(prevCartStr);
        prevCart.push(bottle.id);
        localStorage.setItem('cart', JSON.stringify(prevCart));
    } else {
        localStorage.setItem('cart', JSON.stringify([bottle.id]));
    }
}

export { addToLs };