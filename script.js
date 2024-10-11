let searchform = document.querySelector('.search');
document.querySelector('#search').onclick=()=>
    {
    searchform.classList.toggle('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart').onclick=()=>
    {
    shoppingCart.classList.toggle('active');
}