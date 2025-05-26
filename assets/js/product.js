const input = document.querySelector("#quantity");

// Botão de menos (-) para diminuir 1 ao valor do input de quantidade
document.querySelector("#minus").addEventListener("click", () => {
    const currentQuantity = Number(input.value);
    
    // Se a quantidade atual já for 1, mantém
    if (currentQuantity == 1)
        return;

    input.value = currentQuantity - 1;
});

// Botão de mais (+) para somar 1 ao valor do input de quantidade
document.querySelector("#plus").addEventListener("click", () => {
    const currentQuantity = Number(input.value);
    input.value = currentQuantity + 1;
});

const addToWishlistButton = document.querySelector(".add-to-wishlist");
const addToWishlistIcon = document.querySelector(".add-to-wishlist i");

// Ao clicar em adicionar a lista de desejos, preenche o ícone de coração com cor-de-rosa.
// Ao remover da lista de desejos, remove o preenchimento cor-de-rosa do ícone de coração.
addToWishlistButton.addEventListener("click", () => {
    if (addToWishlistIcon.className == 'fa fa-heart-o') 
        addToWishlistIcon.className = 'fa fa-heart';
    else
        addToWishlistIcon.className = 'fa fa-heart-o'
});