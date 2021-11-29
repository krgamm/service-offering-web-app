// if service clicked
//  assign active state
// NEED...
// ...to get existing services on page
// ...assign event listener to each service button
// ...toggle active class

let serviceItemList = document.querySelectorAll(".service-item-original");
let serviceItemArray = Array.from(serviceItemList);
let shoppingCartModal = document.querySelector("#shopping-cart-modal");

console.log(serviceItemList);
console.log(serviceItemArray);

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
    console.log("Service Item Array");
    console.log(serviceItemArray);
    console.log("Active Service List Array");
    console.log(activeServiceItemArray);
    console.log("Shopping List Array");
    console.log(shoppingListArray);
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

  //   if (count === 0) {
  //     targetObject.newIndex = 0;
  //     shoppingListArray.push(targetObject);
  //     count++;
  //   } else {
  //     targetObject.newIndex = count++;
  //     shoppingListArray.push(targetObject);
  //   }
  //   console.log("Shopping List Array:");
  //   console.log(shoppingListArray);
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

  console.log("Service Item Array");
  console.log(serviceItemArray);
  console.log("Active Service List Array");
  console.log(activeServiceItemArray);
  console.log("Shopping List Array");
  console.log(shoppingListArray);
}

let clearBtn = document.querySelector("#clear-all");

function monitorReset() {
  if (shoppingListArray.length > 0 && activeServiceItemArray.length > 0) {
    clearBtn.classList.remove("hidden");
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

// const Cache = require("@11ty/eleventy-cache-assets");
// require("dotenv").config();

// let serviceList = [];

// async function fetchData(apiPath) {
//   const url = `http://localhost:1337${apiPath}`;

//   try {
//     let json = await Cache(url, {
//       duration: "5s",
//       type: "json",
//     });
//     return json;
//   } catch (e) {
//     console.error(`[API] error fetching ${url}`);
//     return null;
//   }
// }

// module.exports = async function () {
//   const serviceAPI = await fetchData("/services");
//   for (i = 0; i < serviceAPI.length; i++) {
//     serviceList.push({
//       title: serviceAPI[i].title,
//       description: serviceAPI[i].description,
//       process: serviceAPI[i].category.process,
//       type: serviceAPI[i].category.type,
//     });
//   }
//   console.log(serviceList);
//   return serviceList;
// };

// Define variables ———————————————————————————————————————————————

// function captureServiceList() {
//   let serviceTitle;

//   //   Event bubbling by assigning event listeners to each service wrapper
//   serviceItems.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       // Checks target and navigates to H3
//       clone = e.currentTarget.cloneNode(true);
//       indexCopy = serviceItemArray.indexOf(e.currentTarget);
//       console.log(indexCopy);
//       console.log(clone);
//       console.log(e.currentTarget);
//       //   console.log(serviceItems);
//       if (e.target.classList.contains("service-item")) {
//         serviceTitle = e.target.firstElementChild.textContent;
//         e.target.classList.toggle("active-service-item");
//       } else if (e.target.tagName == "H3") {
//         serviceTitle = e.target.textContent;
//         e.target.parentElement.classList.toggle("active-service-item");
//       } else if (e.target.classList.contains("info-icon")) {
//         serviceTitle = e.target.parentElement.firstElementChild.textContent;
//         e.target.parentElement.classList.toggle("active-service-item");
//       } else if (e.target.tagName == "IMG") {
//         serviceTitle =
//           e.target.parentElement.parentElement.firstElementChild.textContent;
//         e.target.parentElement.parentElement.classList.toggle(
//           "active-service-item"
//         );
//       } else if (e.target === e.currentTarget) {
//       }

//       //   Check if service name is in array
//       if (checkoutList.includes(serviceTitle)) {
//         removeService(serviceTitle, clone, indexCopy);
//         toggleClearBtn();
//       } else {
//         if (serviceTitle === undefined) {
//         } else {
//           addService(serviceTitle, clone, indexCopy);
//         }
//       }
//     });
//   });
// }

// function removeAllChildNodes(parent) {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   }
// }

// clearBtn.addEventListener("click", () => {
//   checkoutList = [];
//   removeAllChildNodes(ulList);
//   toggleClearBtn();
//   serviceItems.forEach((element) => {
//     if (element.classList.contains("active-service-item")) {
//       element.classList.toggle("active-service-item");
//     }
//   });
//   console.log(checkoutList);
// });

// // Constructor for the service item
// function addService(serviceTitle, clone, indexCopy) {
//   checkoutList.push(serviceTitle);
//   toggleClearBtn();

//   const listEl = document.createElement("li");
//   const h3El = document.createElement("h3");
//   const serviceName = document.createTextNode(serviceTitle);

//   ulList.appendChild(clone);
//   //   h3El.appendChild(serviceName);
//   //   h3El.classList.add("service-title");

//   //   listEl.appendChild(h3El);
//   //   listEl.classList.add("service-item");

//   //   ulList.appendChild(listEl);

//   //   console.log(checkoutList);
//   captureServiceList();

//   return checkoutList;
// }

// function removeService(serviceTitle) {
//   let index = checkoutList.indexOf(serviceTitle);
//   checkoutList.splice(index, 1);
//   ulList.removeChild(ulList.childNodes[index + 1]);
//   console.log(index);
//   console.log(checkoutList);
//   return checkoutList;
// }

// let tempModal = document.querySelector("#template-modal");
// let tempBtn = document.querySelectorAll("#template-btn");

// tempBtn.forEach((item) => {
//   item.addEventListener("click", () => {
//     tempModal.classList.toggle("hidden");
//   });
// });

// function toggleClearBtn() {
//   if (checkoutList.length === 0) {
//     clearBtn.classList.add("hidden");
//     shoppingCartModal.classList.add("hidden");
//   } else {
//     clearBtn.classList.remove("hidden");
//     shoppingCartModal.classList.remove("hidden");
//     // console.log(checkoutList.length);
//   }
// }

// captureServiceList();

// WORKING CODE

// let checkoutList = [];
// let serviceItems = document.querySelectorAll(".service-item");
// let serviceWrappers = document.querySelectorAll(".service-item-wrapper");
// let ulList = document.querySelector("#shopping-list");
// let clearBtn = document.querySelector("#clear-all");
// let shoppingCartModal = document.querySelector("#shopping-cart-modal");

// function captureServiceList() {
//   let serviceTitle;

//   //   Event bubbling by assigning event listeners to each service wrapper
//   serviceWrappers.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       // Checks target and navigates to H3
//       console.log(e);
//       if (e.target.classList.contains("service-item")) {
//         serviceTitle = e.target.firstElementChild.textContent;
//       } else if (e.target.tagName == "H3") {
//         serviceTitle = e.target.textContent;
//       } else if (e.target.classList.contains("info-icon")) {
//         serviceTitle = e.target.parentElement.firstElementChild.textContent;
//       } else if (e.target.tagName == "IMG") {
//         serviceTitle =
//           e.target.parentElement.parentElement.firstElementChild.textContent;
//       }

//       //   Check if service name is in array
//       if (checkoutList.includes(serviceTitle)) {
//         removeService(serviceTitle);
//         toggleClearBtn();
//       } else {
//         addService(serviceTitle);
//       }
//     });
//   });
// }
// captureServiceList();

// function removeAllChildNodes(parent) {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   }
// }

// clearBtn.addEventListener("click", () => {
//   checkoutList = [];
//   removeAllChildNodes(ulList);
//   toggleClearBtn();
//   console.log(checkoutList);
// });

// // Constructor for the service item
// function addService(serviceTitle) {
//   checkoutList.push(serviceTitle);
//   toggleClearBtn();

//   const listEl = document.createElement("li");
//   const h3El = document.createElement("h3");
//   const serviceName = document.createTextNode(serviceTitle);

//   h3El.appendChild(serviceName);
//   h3El.classList.add("service-title");

//   listEl.appendChild(h3El);
//   listEl.classList.add("service-item");

//   ulList.appendChild(listEl);

//   console.log(checkoutList);
//   return checkoutList;
// }

// function removeService(serviceTitle) {
//   let index = checkoutList.indexOf(serviceTitle);
//   checkoutList.splice(index, 1);
//   ulList.removeChild(ulList.childNodes[index + 1]);
//   console.log(index);
//   console.log(checkoutList);
//   return checkoutList;
// }

// let tempModal = document.querySelector("#template-modal");
// let tempBtn = document.querySelectorAll("#template-btn");

// tempBtn.forEach((item) => {
//   item.addEventListener("click", () => {
//     tempModal.classList.toggle("hidden");
//   });
// });

// function toggleClearBtn() {
//   if (checkoutList.length === 0) {
//     clearBtn.classList.add("hidden");
//     shoppingCartModal.classList.add("hidden");
//   } else {
//     clearBtn.classList.remove("hidden");
//     shoppingCartModal.classList.remove("hidden");
//     console.log(checkoutList.length);
//   }
// }
