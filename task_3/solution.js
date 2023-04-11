function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    count = product.count;
    price = product.price;

    let itemCountText = ``;                 
       itemCountText += count;
       itemCountText += ` × `;
       itemCountText += price;
       itemCountText += ` ₽ = `;
       
    let sum = count*price;
        itemCountText += sum;
        itemCountText += ` ₽`;
     
    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
