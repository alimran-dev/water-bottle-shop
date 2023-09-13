const getCart = ()=>{
    const cartStr = localStorage.getItem('cart');
    const cart = JSON.parse(cartStr);
    return cart;
}
export { getCart };