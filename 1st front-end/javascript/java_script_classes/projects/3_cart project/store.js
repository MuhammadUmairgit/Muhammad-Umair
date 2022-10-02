const shopItemButtons = document.querySelectorAll(".shop-item-button");
const cartItems = document.querySelector(".cart-items");

if (shopItemButtons.length > 0) {
  shopItemButtons.forEach(function (singleShopButton) {
    singleShopButton.addEventListener("click", shopItemButtonHandler);
  });
}

function shopItemButtons(event) {
  event.preventdefault();
  const currentElement = event.targer;
  const shopItem = currentElement.parentElement.parentElement;
  const shopItemTitle = document.querySelecter(".shop-item-title");
  const shopItemImage = document.querySelecter(".shop-item-image");
  const shopItemPrice = document.querySelecter(".shop-item-price");

  const title = shopItemTitle.innerText;
  const imageUrl = shopItemImage.src;
  const price = shopItemPrice.innerText;
  console.log(title);

  let isTitleAlreadyExist = false;

  const allCartItemTitles = document.querySelector(".cart-item-title");

  if (allCartItemTitles.length > 0) {
    allCartItemTitles.forEach((singleCartItem) = >{
      const cartTitle = singleCartItem.innerText;
      if (title == cartTitle) {
        alert("this title is already exist");
        isTitleAlreadyExist = true;
    });
  }

  if (!isTitleAlreadyExist) {
    const itemHtml = `<div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageUrl}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class=" cart-column">$ <span class="cart-price-item-item">${price}</span></span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger btn-remove" type="button">REMOVE</button>
        </div>
    </div>`;

    cartItems.innerHTML += itemHtml;
    
    bindAllDeleteButtons();

    cartQuantityEventListeners();

    updateCartTotal();
  }
}
