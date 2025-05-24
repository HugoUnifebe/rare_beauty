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