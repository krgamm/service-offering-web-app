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

let checkoutList = [];
let serviceItems = document.querySelectorAll(".service-item");
let serviceWrappers = document.querySelectorAll(".service-item-wrapper");
let ulList = document.querySelector("#shopping-list");

function captureServiceList() {
  let serviceTitle;

  serviceWrappers.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("service-item")) {
        serviceTitle = e.target.firstElementChild.textContent;
      } else if (e.target.tagName == "H3") {
        serviceTitle = e.target.textContent;
      } else if (e.target.classList.contains("info-icon")) {
        serviceTitle = e.target.parentElement.firstElementChild.textContent;
      } else if (e.target.tagName == "IMG") {
        serviceTitle =
          e.target.parentElement.parentElement.firstElementChild.textContent;
      }
      if (checkoutList.includes(serviceTitle)) {
        removeService(serviceTitle);
      } else {
        addService(serviceTitle);
      }
    });
  });
}
captureServiceList();

function addService(serviceTitle) {
  checkoutList.push(serviceTitle);

  const listEl = document.createElement("li");
  const h3El = document.createElement("h3");
  const serviceName = document.createTextNode(serviceTitle);

  h3El.appendChild(serviceName);
  h3El.classList.add("service-title");

  listEl.appendChild(h3El);
  listEl.classList.add("service-item");

  ulList.appendChild(listEl);

  console.log(checkoutList);
  return checkoutList;
}

function removeService(serviceTitle) {
  let index = checkoutList.indexOf(serviceTitle);
  checkoutList.splice(index, 1);
  ulList.removeChild(ulList.childNodes[index + 1]);
  console.log(index);
  console.log(checkoutList);
  return checkoutList;
}

// function createCheckout() {
//   serviceWrappers.forEach((item) => {
//     console.log(item);
//     item.addEventListener("click", (e) => {
//       console.log(e.target);
//       if (e.target.classList.contains("service-item")) {
//         let serviceTitle = e.target.firstElementChild.lastChild.data;
//         if (checkoutList.includes(serviceTitle)) {
//           let index = checkoutList.indexOf(serviceTitle);
//           checkoutList.splice(index, 1);
//           ulList.removeChild(ulList.childNodes[index + 1]);
//           console.log(index);
//           console.log(checkoutList);
//           return checkoutList;
//         } else {
//           checkoutList.push(serviceTitle);

//           const listEl = document.createElement("li");
//           const h3El = document.createElement("h3");
//           const serviceName = document.createTextNode(serviceTitle);

//           h3El.appendChild(serviceName);
//           h3El.classList.add("service-title");

//           listEl.appendChild(h3El);
//           listEl.classList.add("service-item");

//           ulList.appendChild(listEl);

//           console.log(checkoutList);
//           return checkoutList;
//         }
//       }
//     });
//   });

// function createCheckout() {
//     let serviceItems = document.querySelectorAll(".service-item");
//     let serviceWrappers = document.querySelectorAll(".service-item-wrapper");
//     let ulList = document.querySelector("#shopping-list");

//     serviceWrappers.forEach((item) => {
//       console.log(item);
//       item.addEventListener("click", (e) => {
//         console.log(e.target);
//         if (e.target.classList.contains("service-item")) {
//           let serviceTitle = e.target.firstElementChild.lastChild.data;
//           if (checkoutList.includes(serviceTitle)) {
//             let index = checkoutList.indexOf(serviceTitle);
//             checkoutList.splice(index, 1);
//             ulList.removeChild(ulList.childNodes[index + 1]);
//             console.log(index);
//             console.log(checkoutList);
//             return checkoutList;
//           } else {
//             checkoutList.push(serviceTitle);

//             const listEl = document.createElement("li");
//             const h3El = document.createElement("h3");
//             const serviceName = document.createTextNode(serviceTitle);

//             h3El.appendChild(serviceName);
//             h3El.classList.add("service-title");

//             listEl.appendChild(h3El);
//             listEl.classList.add("service-item");

//             ulList.appendChild(listEl);

//             console.log(checkoutList);
//             return checkoutList;
//           }
//         }
//       });
//     });

//   serviceItems.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       let serviceTitle = e.target.firstElementChild.lastChild.data;
//       if (checkoutList.includes(serviceTitle)) {
//         let index = checkoutList.indexOf(serviceTitle);

//         checkoutList.splice(index, 1);
//         ulList.removeChild(ulList.childNodes[index + 1]);
//         console.log(index);
//         console.log(checkoutList);
//         return checkoutList;
//       } else {
//         checkoutList.push(serviceTitle);

//         const listEl = document.createElement("li");
//         const h3El = document.createElement("h3");
//         const serviceName = document.createTextNode(serviceTitle);

//         h3El.appendChild(serviceName);
//         h3El.classList.add("service-title");

//         listEl.appendChild(h3El);
//         listEl.classList.add("service-item");

//         ulList.appendChild(listEl);

//         console.log(checkoutList);
//         return checkoutList;
//       }
//     });
//   });
// }
