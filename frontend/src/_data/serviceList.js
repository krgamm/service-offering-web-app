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
