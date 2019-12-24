let subtotalElem = document.querySelector("#subtotal");
let shippingElem = document.querySelector("#shipping");
let taxElem = document.querySelector("#tax");
let totalElem = document.querySelector("#total");
let totalPrice = 0;

//textContent Gets/Sets text only
subtotalElem.textContent = 17;
console.log(subtotalElem);
shippingElem.textContent = 4.75;
console.log(shippingElem);
taxElem.textContent = 1.74;
console.log(taxElem);
totalPrice = (parseFloat(subtotalElem.innerText)+parseFloat(shippingElem.innerText)+parseFloat(taxElem.innerText));
totalElem.textContent = totalPrice;
console.log(totalElem);

// textContent Gets/Sets & markup
//subtotalElem.innerHTML = 17;
//console.log(subtotalElem);
//shippingElem.innerHTML = 4.75;
//console.log(shippingElem);
//taxElem.innerHTML = 1.74;
//console.log(taxElem);
//totalPrice = (parseFloat(subtotalElem.innerHTML))+(parseFloat(shippingElem.innerHTML))+(parseFloat(taxElem.innerHTML));
//totalElem.innerHTML = totalPrice;
//console.log(totalPrice);

// textContent Gets/Sets text only
//subtotalElem.innerText = 17;
//console.log(subtotalElem);
//shippingElem.innerText = 4.75;
//console.log(shippingElem);
//taxElem.innerText = 1.74;
//console.log(taxElem);
//totalPrice = (parseFloat(subtotalElem.innerText))+(parseFloat(shippingElem.innerText))+(parseFloat(taxElem.innerText));
//totalElem.innerText = totalPrice;
//console.log(totalPrice);


