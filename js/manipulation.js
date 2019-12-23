let subtotalElem = document.querySelector("#subtotal");
let shippingElem = document.querySelector("#shipping");
let taxElem = document.querySelector("#tax");
let totalElem = document.querySelector("#total");
let totalPrice = 0;


subtotalElem.textContent = 17;
console.log(subtotalElem);
shippingElem.textContent = 4.75;
console.log(shippingElem);
taxElem.textContent = 1.74;
console.log(taxElem);
totalPrice = (parseFloat(subtotalElem.innerText)+parseFloat(shippingElem.innerText)+parseFloat(taxElem.innerText));
totalElem.textContent = totalPrice;




