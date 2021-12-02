let serviceItemList = document.querySelectorAll(".service-item-original");
let serviceItemArray = Array.from(serviceItemList);
let shoppingCartModal = document.querySelector("#shopping-cart-modal");

// console.log(serviceItemList);
// console.log(serviceItemArray);

// Assign active class to clicked item
serviceItemArray.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("active-service-item")) {
      removeFromCheckout(e);
      monitorReset();

      return;
    } else {
      getActiveServices(e);
      monitorReset();
    }
    // console.log("Service Item Array");
    // console.log(serviceItemArray);
    // console.log("Active Service List Array");
    // console.log(activeServiceItemArray);
    // console.log("Shopping List Array");
    // console.log(shoppingListArray);
  });
});

// Store active items in array
// call checkout function to add active items
let activeServiceItemList;
let activeServiceItemArray;
function getActiveServices(e) {
  e.currentTarget.classList.toggle("active-service-item");
  shoppingCartModal.classList.remove("hidden");
  activeServiceItemList = document.querySelectorAll(".active-service-item");
  activeServiceItemArray = Array.from(activeServiceItemList);
  let targetObject = {
    item: e.currentTarget.cloneNode(true),
    origIndex: serviceItemArray.indexOf(e.currentTarget),
  };
  //   console.log("Active Service Item Array:");
  //   console.log(activeServiceItemArray);
  addToCheckout(targetObject);
}

// Checkout Functions
let shoppingList;
let shoppingListArray = [];
let shoppingListContainer = document.querySelector("#shopping-list");
let count = 0;

// Adds service items with active class
function addToCheckout(targetObject) {
  // duplicate clicked target
  const clone = targetObject.item;
  clone.removeChild(clone.childNodes[3]);

  shoppingListContainer.appendChild(clone);
  shoppingList = shoppingListContainer.querySelectorAll(
    ".service-item-original"
  );
  // remove active class to avoid duplicates in array
  shoppingList.forEach((item) => {
    item.classList.remove("active-service-item");
    item.classList.add("clone-service-item");
  });

  shoppingListArray.push(targetObject);
}

function removeFromCheckout(e) {
  e.currentTarget.classList.remove("active-service-item");
  let selectedIndex = serviceItemArray.indexOf(e.currentTarget);
  console.log(selectedIndex);

  for (let i = 0; i < shoppingListArray.length; i++) {
    if (selectedIndex === shoppingListArray[i].origIndex) {
      console.log(i);
      let index = shoppingListArray.indexOf(shoppingListArray[i]);
      shoppingListArray.splice(index, 1);

      shoppingListContainer.removeChild(
        shoppingListContainer.childNodes[index + 1]
      );

      activeServiceItemList = document.querySelectorAll(".active-service-item");
      activeServiceItemArray = Array.from(activeServiceItemList);
    }
  }

  // console.log("Service Item Array");
  // console.log(serviceItemArray);
  // console.log("Active Service List Array");
  // console.log(activeServiceItemArray);
  // console.log("Shopping List Array");
  // console.log(shoppingListArray);
}

let clearBtn = document.querySelector("#clear-all");
let submit = document.querySelector("#submit");

function monitorReset() {
  if (shoppingListArray.length > 0 && activeServiceItemArray.length > 0) {
    clearBtn.classList.remove("hidden");
    submit.classList.remove("hidden");
    shoppingCartModal.classList.remove("hidden");
    clearBtn.addEventListener("click", () => {
      activeServiceItemArray.forEach((item) => {
        item.classList.remove("active-service-item");
      });
      shoppingListArray = [];
      activeServiceItemArray = [];
      serviceItemArray = [];
      shoppingListContainer.innerHTML = "";
      clearBtn.classList.add("hidden");
      shoppingCartModal.classList.add("hidden");
    });
  } else if (
    shoppingListArray.length == 0 &&
    activeServiceItemArray.length == 0
  ) {
    clearBtn.classList.add("hidden");
    shoppingCartModal.classList.add("hidden");
  } else {
    clearBtn.classList.remove("hidden");
    shoppingCartModal.classList.remove("hidden");
  }
}

let tempModal = document.querySelector("#template-modal");
let tempBtn = document.querySelectorAll("#template-btn");

tempBtn.forEach((item) => {
  item.addEventListener("click", () => {
    tempModal.classList.toggle("hidden");
  });
});

function toggleClass(list, className) {
  for (let i = 0; i < list; i++) {
    list[i].classList.toggle(className);
  }
}
