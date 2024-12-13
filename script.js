let body = document.body;

// Shopping Cart
let pageShoppingCart = document.getElementById("page-shopping-cart");
let btnCloseShoppingcart = document.getElementById("btn-close-shopping-cart");
let shoppingCartTbodyArrayChildren = Array.from(document.getElementById("tbody").children);

let shoppingCartItem1 = document.getElementById("shopping-cart-item-1");
let shoppingCartPriceItem1 = document.getElementById("shopping-cart-price-item-1");
let shoppingCartBtnQuantityDownItem1 = document.getElementById("shopping-cart-btn-quantity-down-item-1");
let shoppingCartQuantityItem1 = document.getElementById("shopping-cart-quantity-item-1");
let shoppingCartBtnQuantityUpItem1 = document.getElementById("shopping-cart-btn-quantity-up-item-1");
let shoppingCartTotalItem1 = document.getElementById("shopping-cart-total-item-1");
let shoppingCarttheBeatenTottleItem1;
let shoppingCartBtnRemoveItem1 = document.getElementById("shopping-cart-btn-remove-item-1");

let shoppingCartItem2 = document.getElementById("shopping-cart-item-2");
let shoppingCartBtnQuantityDownItem2 = document.getElementById("shopping-cart-btn-quantity-down-item-2");
let shoppingCartQuantityItem2 = document.getElementById("shopping-cart-quantity-item-2");
let shoppingCartBtnQuantityUpItem2 = document.getElementById("shopping-cart-btn-quantity-up-item-2");
let shoppingCartTotalItem2 = document.getElementById("shopping-cart-total-item-2");
let shoppingCarttheBeatenTottleItem2;
let shoppingCartBtnRemoveItem2 = document.getElementById("shopping-cart-btn-remove-item-2");

let quantityDowns = document.querySelectorAll(".quantity-down");
let quantitys = document.querySelectorAll(".quantity");
let quantityUps = document.querySelectorAll(".quantity-up");

let totalElemnt = document.getElementById("total-amount");
let ItemsPrices = [87.99, 249.99];

// Favorites
let pageFavorites = document.getElementById("page-favorites");
let btnCloseFavorites = document.getElementById("btn-close-favorites");
let fatherFavoritesChildren = Array.from(document.getElementById("father-favorites").children);

let favoritesItem1 = document.getElementById("favorites-item-1");
let favoritesBtnAddToFavoritesItem1 = document.getElementById("favorites-btn-add-to-favorites-item-1");
let favoritesBtnRemoveFromFavoritesItem1 = document.getElementById("favorites-btn-remove-from-favorites-item-1");
let favoritesBtnAddToCardItem1 = document.getElementById("favorites-btn-add-to-card-item-1");
let favoritesBtnRemoveFromCardItem1 = document.getElementById("favorites-btn-remove-from-card-item-1");

let favoritesItem2 = document.getElementById("favorites-item-2");
let favoritesBtnAddToFavoritesItem2 = document.getElementById("favorites-btn-add-to-favorites-item-2");
let favoritesBtnRemoveFromFavoritesItem2 = document.getElementById("favorites-btn-remove-from-favorites-item-2");
let favoritesBtnAddToCardItem2 = document.getElementById("favorites-btn-add-to-card-item-2");
let favoritesBtnRemoveFromCardItem2 = document.getElementById("favorites-btn-remove-from-card-item-2");

// Header
let btnOpenShoppingCart = document.getElementById("btn-open-shopping-cart");
let numberOfBasket = document.getElementById("number-of-basket");
let btnOpenFavorites = document.getElementById("btn-open-favorites");
let NumberOfFavorites = document.getElementById("number-of-favorites");

// Main
let btnAddToFavoritesItem1 = document.getElementById("btn-add-to-favorites-item-1");
let btnRemoveFromFavoritesItem1 = document.getElementById("btn-remove-from-favorites-item-1");
let btnAddToCardItem1 = document.getElementById("btn-add-to-card-item-1");
let btnRemoveFromCardItem1 = document.getElementById("btn-remove-from-card-item-1");

let btnAddToFavoritesItem2 = document.getElementById("btn-add-to-favorites-item-2");
let btnRemoveFromFavoritesItem2 = document.getElementById("btn-remove-from-favorites-item-2");
let btnAddToCardItem2 = document.getElementById("btn-add-to-card-item-2");
let btnRemoveFromCardItem2 = document.getElementById("btn-remove-from-card-item-2");

let the1ExhibitionBtnLeft = document.getElementById("the-1-exhibition-btn-left");
let the1ExhibitionBtnRight = document.getElementById("the-1-exhibition-btn-right");
let the1Exhibition = document.getElementById("the-1-exhibition");
let the2ExhibitionBtnLeft = document.getElementById("the-2-exhibition-btn-left");
let the2ExhibitionBtnRight = document.getElementById("the-2-exhibition-btn-right");
let the2Exhibition = document.getElementById("the-2-exhibition");
let the3ExhibitionBtnLeft = document.getElementById("the-3-exhibition-btn-left");
let the3ExhibitionBtnRight = document.getElementById("the-3-exhibition-btn-right");
let the3Exhibition = document.getElementById("the-3-exhibition");
let the4ExhibitionBtnLeft = document.getElementById("the-4-exhibition-btn-left");
let the4ExhibitionBtnRight = document.getElementById("the-4-exhibition-btn-right");
let the4Exhibition = document.getElementById("the-4-exhibition");
let the5ExhibitionBtnLeft = document.getElementById("the-5-exhibition-btn-left");
let the5ExhibitionBtnRight = document.getElementById("the-5-exhibition-btn-right");
let the5Exhibition = document.getElementById("the-5-exhibition");
let the6ExhibitionBtnLeft = document.getElementById("the-6-exhibition-btn-left");
let the6ExhibitionBtnRight = document.getElementById("the-6-exhibition-btn-right");
let the6Exhibition = document.getElementById("the-6-exhibition");

onload = () => {
  if (JSON.parse(localStorage.getItem("pageShoppingCartStay")) === true) {
    btnOpenShoppingCart.click();
  };

  if (JSON.parse(localStorage.getItem("shoppingCartItem1")) === true) {
    favoritesBtnAddToCardItem1.style.display = "none";
    favoritesBtnRemoveFromCardItem1.style.display = "block";
    btnAddToCardItem1.style.display = "none";
    btnRemoveFromCardItem1.style.display = "block";
    shoppingCartItem1.style.display = "table-row";
    cNumberOfBasket();
  };

  if (JSON.parse(localStorage.getItem("shoppingCartItem2")) === true) {
    favoritesBtnAddToCardItem2.style.display = "none";
    favoritesBtnRemoveFromCardItem2.style.display = "block";
    btnAddToCardItem2.style.display = "none";
    btnRemoveFromCardItem2.style.display = "block";
    shoppingCartItem2.style.display = "table-row";
    cNumberOfBasket();
  };

  if (JSON.parse(localStorage.getItem("favoritesItem1")) === true) {
    favoritesBtnAddToFavoritesItem1.style.display = "none";
    favoritesBtnRemoveFromFavoritesItem1.style.display = "flex";
    btnAddToFavoritesItem1.style.display = "none";
    btnRemoveFromFavoritesItem1.style.display = "flex";
    favoritesItem1.style.display = "block";
    cNumberOfFavorites();
  };

  if (JSON.parse(localStorage.getItem("favoritesItem2")) === true) {
    favoritesBtnAddToFavoritesItem2.style.display = "none";
    favoritesBtnRemoveFromFavoritesItem2.style.display = "flex";
    btnAddToFavoritesItem2.style.display = "none";
    btnRemoveFromFavoritesItem2.style.display = "flex";
    favoritesItem2.style.display = "block";
    cNumberOfFavorites();
  };
};

let dataPro = [
  {
    title: "Navy Headphones",
    price: 87.99,
    imge: "Pictures/9.png",
  },
  {
    title: "Turquoise Laptop",
    price: 87.99,
    imge: "Pictures/9.png",
  },
  {
    title: "Skyblue Phone",
    price: 87.99,
    imge: "Pictures/9.png",
  }
];


let shoppingCartTbodyElemnt = document.getElementById("tbody");
  
  dataPro.map((pro) => {
    shoppingCartTbodyElemnt.innerHTML +=
     `
    <tr class="w-full min-h-[200px] h-[250px] hidden" id="shopping-cart-item-1" >
                <td class="min-w-[400px]">
                  <div class="flex flex-col justify-around items-center sm:flex-row">
                    <div class="w-full h-[50%] flex justify-around items-center sm:w-[50%] sm:h-full">
                      <img src="Pictures/9.png" class="w-[150px]" id="imge-item" alt="">
                    </div>
                    <div class="w-full h-[50%] flex justify-around items-center sm:w-[50%] sm:h-full">
                      <p class="font-bold" id="name-item-1">${pro.title}</p>
                    </div>
                  </div>
                </td>
                <td class="min-w-[150px]">
                  <p class="text-center" id="shopping-cart-price-item-1"></p>
                </td>
                <td class="min-w-[150px] h-full flex justify-around items-center">
                  <button class="quantity-down" id="shopping-cart-btn-quantity-down-item-1"><i class="fa-solid fa-chevron-left"></i></button>
                  <input type="number" value="1" readonly class="w-[150px] text-center outline-none quantity"
                    id="shopping-cart-quantity-item-1">
                  <button class="quantity-up" id="shopping-cart-btn-quantity-up-item-1"><i class="fa-solid fa-chevron-right"></i></button>
                </td>
                <td class="min-w-[150px] text-center"><input type="number" readonly
                    class="w-auto text-center outline-none" id="shopping-cart-total-item-1"><i
                    class="fa-solid fa-dollar-sign text-[20px]"></i>
                </td>
                <td class="min-w-[150px] text-center"><button class="w-[30px] h-[30px] bg-slate-100 rounded-full"
                    id="shopping-cart-btn-remove-item-1"><i class="fa-solid fa-trash"></i></button></td>
              </tr>
    `;
  });


function TotalCalculation() {
  let totalAmount = ItemsPrices.reduce((acc, current, index, arr) => {
    return acc + current;
  });
  totalElemnt.innerHTML = totalAmount;
};

function cNumberOfBasket() {
  let tbodyFilteredChildren = shoppingCartTbodyArrayChildren.filter((ele) => {
    return window.getComputedStyle(ele).display !== "none";
  });
  numberOfBasket.innerHTML = tbodyFilteredChildren.length;
};

function cNumberOfFavorites() {
  let fatherFavoritesFilteredChildren = fatherFavoritesChildren.filter((ele) => {
    return window.getComputedStyle(ele).display !== "none";
  });
  NumberOfFavorites.innerHTML = fatherFavoritesFilteredChildren.length;
};

btnOpenShoppingCart.onclick = () => {
  body.style.overflow = "hidden";
  pageShoppingCart.style.display = "flex";
  localStorage.setItem("pageShoppingCartStay", JSON.stringify(true));
};

btnCloseShoppingcart.onclick = () => {
  body.style.overflow = "auto";
  pageShoppingCart.style.display = "none";
  localStorage.setItem("pageShoppingCartStay", JSON.stringify(false));
};

shoppingCartPriceItem1.innerHTML = ItemsPrices[0];

shoppingCartBtnQuantityDownItem1.style.visibility = "hidden";

shoppingCartBtnQuantityDownItem1.onclick = () => {
  shoppingCartQuantityItem1.value--;
  if (+shoppingCartQuantityItem1.value <= 1) {
    shoppingCartBtnQuantityDownItem1.style.visibility = "hidden";
  }
  shoppingCarttheBeatenTottleItem1 = (+shoppingCartTotalItem1.value - 87.99);
  shoppingCartTotalItem1.value = shoppingCarttheBeatenTottleItem1.toFixed(2);
  localStorage.setItem("shoppingCartTotalItem1", JSON.stringify(shoppingCartTotalItem1.value));
  localStorage.setItem("shoppingCartQuantityItem1", JSON.stringify(shoppingCartQuantityItem1.value));
};

shoppingCartBtnQuantityUpItem1.onclick = () => {
  shoppingCartQuantityItem1.value++;
  if (+shoppingCartQuantityItem1.value > 1) {
    shoppingCartBtnQuantityDownItem1.style.visibility = "visible";
  }
  shoppingCarttheBeatenTottleItem1 = (+shoppingCartTotalItem1.value + 87.99);
  shoppingCartTotalItem1.value = shoppingCarttheBeatenTottleItem1.toFixed(2);
  localStorage.setItem("shoppingCartTotalItem1", JSON.stringify(shoppingCartTotalItem1.value));
  localStorage.setItem("shoppingCartQuantityItem1", JSON.stringify(shoppingCartQuantityItem1.value));
};

shoppingCartTotalItem1.value = ItemsPrices[0];

shoppingCartBtnRemoveItem1.onclick = () => {
  favoritesBtnAddToCardItem1.style.display = "block";
  favoritesBtnRemoveFromCardItem1.style.display = "none";
  btnAddToCardItem1.style.display = "block";
  btnRemoveFromCardItem1.style.display = "none";
  shoppingCartItem1.style.display = "none";
  localStorage.removeItem("shoppingCartQuantityItem1");
  localStorage.removeItem("shoppingCartTotalItem1");
  localStorage.setItem("shoppingCartItem1", JSON.stringify(false));
  TotalCalculation();
  cNumberOfBasket();
};

shoppingCartBtnQuantityDownItem2.onclick = () => {
  shoppingCartQuantityItem2.value--;
  if (+shoppingCartQuantityItem2.value <= 1) {
    shoppingCartBtnQuantityDownItem2.style.visibility = "hidden";
  }
  shoppingCarttheBeatenTottleItem2 = (+shoppingCartTotalItem2.value - 249.99);
  shoppingCartTotalItem2.value = shoppingCarttheBeatenTottleItem2.toFixed(2);
  localStorage.setItem("shoppingCartTotalItem2", JSON.stringify(shoppingCartTotalItem2.value));
  localStorage.setItem("shoppingCartQuantityItem2", JSON.stringify(shoppingCartQuantityItem2.value));
};

shoppingCartBtnQuantityUpItem2.onclick = () => {
  shoppingCartQuantityItem2.value++;
  if (+shoppingCartQuantityItem2.value > 1) {
    shoppingCartBtnQuantityDownItem2.style.visibility = "visible";
  }
  shoppingCarttheBeatenTottleItem2 = (+shoppingCartTotalItem2.value + 249.99);
  shoppingCartTotalItem2.value = shoppingCarttheBeatenTottleItem2.toFixed(2);
  localStorage.setItem("shoppingCartTotalItem2", JSON.stringify(shoppingCartTotalItem2.value));
  localStorage.setItem("shoppingCartQuantityItem2", JSON.stringify(shoppingCartQuantityItem2.value));
};

shoppingCartBtnRemoveItem2.onclick = () => {
  favoritesBtnAddToCardItem2.style.display = "block";
  favoritesBtnRemoveFromCardItem2.style.display = "none";
  btnAddToCardItem2.style.display = "block";
  btnRemoveFromCardItem2.style.display = "none";
  shoppingCartItem2.style.display = "none";
  shoppingCartQuantityItem2.value = 1;
  localStorage.removeItem("shoppingCartTotalItem2");
  localStorage.removeItem("shoppingCartQuantityItem2");
  localStorage.setItem("shoppingCartItem2", JSON.stringify(false));
  TotalCalculation();
  cNumberOfBasket();
};

btnOpenFavorites.onclick = () => {
  body.style.overflow = "hidden";
  pageFavorites.style.display = "flex";
};

btnCloseFavorites.onclick = () => {
  body.style.overflow = "auto";
  pageFavorites.style.display = "none";
};

favoritesBtnAddToFavoritesItem1.onclick = () => {
  favoritesBtnAddToFavoritesItem1.style.display = "none";
  favoritesBtnRemoveFromFavoritesItem1.style.display = "flex";
  btnAddToFavoritesItem1.style.display = "none";
  btnRemoveFromFavoritesItem1.style.display = "flex";
  favoritesItem1.style.display = "block";
  localStorage.setItem("favoritesItem1", JSON.stringify(true));
  cNumberOfFavorites();
};

favoritesBtnRemoveFromFavoritesItem1.onclick = () => {
  favoritesBtnAddToFavoritesItem1.style.display = "flex";
  favoritesBtnRemoveFromFavoritesItem1.style.display = "none";
  btnAddToFavoritesItem1.style.display = "flex";
  btnRemoveFromFavoritesItem1.style.display = "none";
  favoritesItem1.style.display = "none";
  localStorage.setItem("favoritesItem1", JSON.stringify(false));
  cNumberOfFavorites();
};

favoritesBtnAddToCardItem1.onclick = () => {
  favoritesBtnAddToCardItem1.style.display = "none";
  favoritesBtnRemoveFromCardItem1.style.display = "block";
  btnAddToCardItem1.style.display = "none";
  btnRemoveFromCardItem1.style.display = "block";
  shoppingCartItem1.style.display = "table-row";
  localStorage.setItem("shoppingCartItem1", JSON.stringify(true));
  cNumberOfBasket();
};

favoritesBtnRemoveFromCardItem1.onclick = () => {
  favoritesBtnAddToCardItem1.style.display = "block";
  favoritesBtnRemoveFromCardItem1.style.display = "none";
  btnAddToCardItem1.style.display = "block";
  btnRemoveFromCardItem1.style.display = "none";
  shoppingCartItem1.style.display = "none";
  localStorage.setItem("shoppingCartItem1", JSON.stringify(false));
  cNumberOfBasket();
};

favoritesBtnAddToFavoritesItem2.onclick = () => {
  favoritesBtnAddToFavoritesItem2.style.display = "none";
  favoritesBtnRemoveFromFavoritesItem2.style.display = "flex";
  btnAddToFavoritesItem2.style.display = "none";
  btnRemoveFromFavoritesItem2.style.display = "flex";
  favoritesItem2.style.display = "block";
  localStorage.setItem("favoritesItem1", JSON.stringify(true));
  cNumberOfFavorites();
};

favoritesBtnRemoveFromFavoritesItem2.onclick = () => {
  favoritesBtnAddToFavoritesItem2.style.display = "flex";
  favoritesBtnRemoveFromFavoritesItem2.style.display = "none";
  btnAddToFavoritesItem2.style.display = "flex";
  btnRemoveFromFavoritesItem2.style.display = "none";
  favoritesItem2.style.display = "none";
  localStorage.setItem("favoritesItem2", JSON.stringify(false));
  cNumberOfFavorites();
};

favoritesBtnAddToCardItem2.onclick = () => {
  favoritesBtnAddToCardItem2.style.display = "none";
  favoritesBtnRemoveFromCardItem2.style.display = "block";
  btnAddToCardItem2.style.display = "none";
  btnRemoveFromCardItem2.style.display = "block";
  shoppingCartItem2.style.display = "table-row";
  localStorage.setItem("shoppingCartItem2", JSON.stringify(true));
  cNumberOfBasket();
};

favoritesBtnRemoveFromCardItem2.onclick = () => {
  favoritesBtnAddToCardItem2.style.display = "block";
  favoritesBtnRemoveFromCardItem2.style.display = "none";
  btnAddToCardItem2.style.display = "block";
  btnRemoveFromCardItem2.style.display = "none";
  shoppingCartItem2.style.display = "none";
  localStorage.setItem("shoppingCartItem2", JSON.stringify(false));
  cNumberOfBasket();
};

shoppingCartBtnQuantityDownItem2.style.visibility = "hidden";

btnAddToFavoritesItem1.onclick = () => {
  favoritesBtnAddToFavoritesItem1.style.display = "none";
  favoritesBtnRemoveFromFavoritesItem1.style.display = "flex";
  btnAddToFavoritesItem1.style.display = "none";
  btnRemoveFromFavoritesItem1.style.display = "flex";
  favoritesItem1.style.display = "block";
  localStorage.setItem("favoritesItem1", JSON.stringify(true));
  cNumberOfFavorites();
};

btnRemoveFromFavoritesItem1.onclick = () => {
  favoritesBtnAddToFavoritesItem1.style.display = "flex";
  favoritesBtnRemoveFromFavoritesItem1.style.display = "none";
  btnAddToFavoritesItem1.style.display = "flex";
  btnRemoveFromFavoritesItem1.style.display = "none";
  favoritesItem1.style.display = "none";
  localStorage.setItem("favoritesItem1", JSON.stringify(false));
  cNumberOfFavorites();
};

btnAddToCardItem1.onclick = () => {
  favoritesBtnAddToCardItem1.style.display = "none";
  favoritesBtnRemoveFromCardItem1.style.display = "block";
  btnAddToCardItem1.style.display = "none";
  btnRemoveFromCardItem1.style.display = "block";
  shoppingCartItem1.style.display = "table-row";
  // gggggggggggggggggggggg 1
  localStorage.setItem("shoppingCartItem1", JSON.stringify(true));
  TotalCalculation();
  cNumberOfBasket();
};

btnRemoveFromCardItem1.onclick = () => {
  favoritesBtnAddToCardItem1.style.display = "block";
  favoritesBtnRemoveFromCardItem1.style.display = "none";
  btnAddToCardItem1.style.display = "block";
  btnRemoveFromCardItem1.style.display = "none";
  shoppingCartItem1.style.display = "none";
  // gggggggggggggggggggggg
  localStorage.removeItem("shoppingCartQuantityItem1");
  localStorage.removeItem("shoppingCartTotalItem1");
  localStorage.setItem("shoppingCartItem1", JSON.stringify(false));
  cNumberOfBasket();
};

btnAddToFavoritesItem2.onclick = () => {
  favoritesBtnAddToFavoritesItem2.style.display = "none";
  favoritesBtnRemoveFromFavoritesItem2.style.display = "flex";
  btnAddToFavoritesItem2.style.display = "none";
  btnRemoveFromFavoritesItem2.style.display = "flex";
  favoritesItem2.style.display = "block";
  localStorage.setItem("favoritesItem2", JSON.stringify(true));
  cNumberOfFavorites();
};

btnRemoveFromFavoritesItem2.onclick = () => {
  favoritesBtnAddToFavoritesItem2.style.display = "flex";
  favoritesBtnRemoveFromFavoritesItem2.style.display = "none";
  btnAddToFavoritesItem2.style.display = "flex";
  btnRemoveFromFavoritesItem2.style.display = "none";
  favoritesItem2.style.display = "none";
  localStorage.setItem("favoritesItem2", JSON.stringify(false));
  cNumberOfFavorites();
};

btnAddToCardItem2.onclick = () => {
  favoritesBtnAddToCardItem2.style.display = "none";
  favoritesBtnRemoveFromCardItem2.style.display = "block";
  btnAddToCardItem2.style.display = "none";
  btnRemoveFromCardItem2.style.display = "block";
  shoppingCartItem2.style.display = "table-row";
  shoppingCartQuantityItem2.value = 1;
  // gggggggggggggggggggggg 2
  localStorage.setItem("shoppingCartItem2", JSON.stringify(true));
  TotalCalculation();
  cNumberOfBasket();
};

function resetItem2() {
  shoppingCartQuantityItem1.value = 1;
  shoppingCartTotalItem1.value = 249.99;
};

btnRemoveFromCardItem2.onclick = () => {
  favoritesBtnAddToCardItem2.style.display = "block";
  favoritesBtnRemoveFromCardItem2.style.display = "none";
  btnAddToCardItem2.style.display = "block";
  btnRemoveFromCardItem2.style.display = "none";
  shoppingCartItem2.style.display = "none";
  shoppingCartQuantityItem2.value = 1;
  // gggggggggggggggggggggg
  localStorage.removeItem("shoppingCartTotalItem2");
  localStorage.removeItem("shoppingCartQuantityItem2");
  localStorage.setItem("shoppingCartItem2", JSON.stringify(false));
  cNumberOfBasket();
};

the1ExhibitionBtnRight.addEventListener("click", () => {
  the1Exhibition.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});

the1ExhibitionBtnLeft.addEventListener("click", () => {
  the1Exhibition.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});

the2ExhibitionBtnRight.addEventListener("click", () => {
  the2Exhibition.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});

the2ExhibitionBtnLeft.addEventListener("click", () => {
  the2Exhibition.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});

the3ExhibitionBtnRight.addEventListener("click", () => {
  the3Exhibition.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});

the3ExhibitionBtnLeft.addEventListener("click", () => {
  the3Exhibition.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});

the4ExhibitionBtnRight.addEventListener("click", () => {
  the4Exhibition.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});

the4ExhibitionBtnLeft.addEventListener("click", () => {
  the4Exhibition.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});

the5ExhibitionBtnRight.addEventListener("click", () => {
  the5Exhibition.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});

the5ExhibitionBtnLeft.addEventListener("click", () => {
  the5Exhibition.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});

the6ExhibitionBtnRight.addEventListener("click", () => {
  the6Exhibition.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});

the6ExhibitionBtnLeft.addEventListener("click", () => {
  the6Exhibition.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});