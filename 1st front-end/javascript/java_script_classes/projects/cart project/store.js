const shopItemButton = document.querySelectorAll(".shop-item-button");
const cartItems = document.querySelector(".cart-items");
const purchaseButton = document.querySelector(".btn-purchase");


if (shopItemButton.length > 0) {
    shopItemButton.forEach(function (singleshopButton){
    singleshopButton.addEventListener("click", shopItemButtonHandler);
    });
}

function shopItemButtonHandler(event) {
    event.preventDefault();     const currentElement = event.target;
    const shopItem = currentElement.parentElement.parentElement;
    const shopItemTitle = shopItem.querySelector(".shop-item-title");
    const shopItemImage = shopItem.querySelector(".shop-item-image");
    const shopItemPrice = shopItem.querySelector(".shop-item-price");

    const title = shopItemTitle.innerText;
    const imageUrl = shopItemTitle.src;
    const price = shopItemTitle.innerText;

    const itemHtml = `<div class="cart-row">
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageUrl}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger btn-remove" type="button">REMOVE</button>
    </div>
</div>`;
cartItems.innerHTML += itemHtml;

bindAllDeleteButtons();

  const shopItemPricecalculator  = document.querySelectorAll(".shop-item-price");

  if (shopItemPricecalculator.length > 0) {
    shopItemPricecalculator.forEach(function (singleshopItemPricecalculator){
      shopItemPricecalculator.addEventListener("click", shopItemPriceinnervalue);
    });
  }


  function shopItemPriceinnervalue(event) {
    event.preventDefault();
    const price = shopItemTitle.innerText;
    const calculatedPrice = document.querySelector(".cart-total-price");
    const calculatedPrice1 = calculatedPrice.innerText;

    price.eval(calculatedPrice1);


  }






}

function bindAllDeleteButtons() {
    const removeButtons = document.querySelectorAll(".btn-remove");
    if (removeButtons.length > 0) {
      removeButtons.forEach(function (singleRemoveButton) {
        singleRemoveButton.removeEventListener("click", removeButtonFunction);
        singleRemoveButton.addEventListener("click", removeButtonFunction);
      });
    }
  }
  
  function removeButtonFunction(event) {
    event.preventDefault();
    const currentElement = event.target;
    const cartRow = currentElement.parentElement.parentElement;
    if (confirm("Are You Sure")) {
      cartRow.remove();
    }
  }