let carts = document.querySelectorAll(".add-to-cart");
let rooms = [
  {
    id: 1,
    name: "Pokój unarny",
    beds: 1,
    guests: 1,
    price: 170,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    inCart: 0,
  },
  {
    id: 2,
    name: "Pokój binarny",
    beds: 1,
    guests: 2,
    price: 240,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    inCart: 0,
  },
  {
    id: 3,
    name: "Pokój trójkowy",
    beds: 2,
    guests: 3,
    price: 290,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    inCart: 0,
  },
  {
    id: 4,
    name: "Pokój czwórkowy",
    beds: 2,
    guests: 4,
    price: 340,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(rooms[i]);
    totalCost(rooms[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(room) {
  console.log("room clicked", room);
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(room);
}

function setItems(room) {
  let cartItems = localStorage.getItem("roomsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[room.name] == undefined) {
      cartItems = {
        ...cartItems,
        [room.name]: room,
      };
    }
    cartItems[room.name].inCart += 1;
  } else {
    room.inCart = 1;
    cartItems = {
      [room.name]: room,
    };
  }
  localStorage.setItem("roomsInCart", JSON.stringify(cartItems));
}

function totalCost(room) {
  let cartCost = localStorage.getItem("totalCost");
  console.log("total ", cartCost);
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + room.price);
  } else {
    localStorage.setItem("totalCost", room.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("roomsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products-container");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((room) => {
      productContainer.innerHTML += `
      <div class="products">
        <ion-icon name='close-circle'></ion-icon>
        <span>${room.name}</span>
      </div>
      `;
    });
  }
}

onLoadCartNumbers();
displayCart();
