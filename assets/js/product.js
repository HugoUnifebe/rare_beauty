const input = document.querySelector("#quantity");

document.querySelector("#minus").addEventListener("click", () => {
    const currentQuantity = Number(input.value);
    
    if (currentQuantity == 1)
        return;

    input.value = currentQuantity - 1;
});

document.querySelector("#plus").addEventListener("click", () => {
    const currentQuantity = Number(input.value);
    input.value = currentQuantity + 1;
});

const addToWishlistButton = document.querySelector(".add-to-wishlist");
const addToWishlistIcon = document.querySelector(".add-to-wishlist i");


addToWishlistButton.addEventListener("click", () => {
    if (addToWishlistIcon.className == 'fa fa-heart-o') 
        addToWishlistIcon.className = 'fa fa-heart';
    else
        addToWishlistIcon.className = 'fa fa-heart-o'
});