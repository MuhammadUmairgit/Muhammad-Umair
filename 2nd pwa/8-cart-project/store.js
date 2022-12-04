//DOM UI VARIABLES
const shopItemButtons = document.querySelectorAll(".shop-item-button");
const cartItems = document.querySelector(".cart-items");
const purchaseBtn = document.querySelector(".btn-purchase");

if (shopItemButtons.length > 0) {
  shopItemButtons.forEach(function (singleShopButton) {
    singleShopButton.addEventListener("click", shopItemButtonHandler);
  });
}

function shopItemButtonHandler(event) {
  event.preventDefault();
  const currentElement = event.target;
  const shopItem = currentElement.parentElement.parentElement;
  const shopItemTitle = shopItem.querySelector(".shop-item-title");
  const shopItemImage = shopItem.querySelector(".shop-item-image");
  const shopItemPrice = shopItem.querySelector(".shop-item-price");

  //   console.log(shopItem, "shopItem");

  const title = shopItemTitle.innerText;
  const imageUrl = shopItemImage.src;
  const price = shopItemPrice.innerText;

  //   console.log(title);
  //   console.log(imageUrl);
  //   console.log(price);

  //check if this text is already exist
  let isTitleAlreadyExist = false;

  const allCartItemTitles = document.querySelectorAll(".cart-item-title");
  if (allCartItemTitles.length > 0) {
    allCartItemTitles.forEach((singleCartItem) => {
      const cartTitle = singleCartItem.innerText;
      if (title == cartTitle) {
        alert("this title is already exist");
        isTitleAlreadyExist = true;
      }
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
    updateCartTotal();
  }
}

function updateCartTotal() {
  const allPrices = document.querySelectorAll(".cart-price-item-item");
  let total = 0;

  if (allPrices.length > 0) {
    allPrices.forEach((singlePrice) => {
      // console.log(singlePrice, "singlePrice");
      const cartRow = singlePrice.parentElement.parentElement;
      const qtyInputValue = cartRow.querySelector(".cart-quantity-input").value;

      const price = singlePrice.innerText;
      total += parseFloat(price) * parseInt(qtyInputValue);
    });
  }

  // const total = [...allPrices]
  //   .map((singleElement) => {
  //     return singleElement.innerText;
  //   })
  //   .reduce((jamakarega, currentValue) => {
  //     return jamakarega + parseFloat(currentValue);
  //   }, 0);

  // console.log(total, "total");

  const totalElement = document.querySelector(".cart-total-price");
  totalElement.innerText = `$${total.toFixed(2)}`;
}

function cartQuantityEventListeners() {
  const cartQuantityInputs = document.querySelectorAll(".cart-quantity-input");
  if (cartQuantityInputs.length > 0) {
    cartQuantityInputs.forEach(function (singleCartInput) {
      singleCartInput.removeEventListener("change", cartQuantityHandler);
      singleCartInput.addEventListener("change", cartQuantityHandler);
    });
  }
}

function cartQuantityHandler(event) {
  let currentInputElement = event.target;
  if (currentInputElement.value <= 0) {
    currentInputElement.value = 1;
  }
  updateCartTotal();
}

purchaseBtn.addEventListener("click", purchaseHandler);

function purchaseHandler(event) {
  event.preventDefault();
  if (confirm("Are you Sure")) {
    cartItems.innerHTML = "";
    updateCartTotal();
  }
}
