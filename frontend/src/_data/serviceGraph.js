const Cache = require("@11ty/eleventy-cache-assets");
require("dotenv").config();

async function fetchData(apiPath) {
  const url = `https://rp-service-offerings.herokuapp.com${apiPath}`;

  try {
    let json = await Cache(url, {
      duration: "5s",
      type: "json",
    });
    return json;
  } catch (e) {
    console.error(`[API] error fetching ${url}`);
    return null;
  }
}

module.exports = async function () {
  // TODO: make a forEach apiPaths
  const serviceData = await fetchData("/services");
  console.log(serviceData);
  return serviceData;
};

// // required packages
// const fetch = require("node-fetch");

// // get services
// async function getAllServices() {
//   // max number of records to fetch per query
//   const recordsPerQuery = 100;

//   // number of records to skip (start at 0)
//   let recordsToSkip = 0;

//   // do we make a query ?
//   let makeNewQuery = true;

//   // Services array
//   let allServices = [];

//   // make queries until makeNewQuery is set to false
//   while (makeNewQuery) {
//     try {
//       // initiate fetch
//       const data = await fetch(
//         "https://rp-service-offerings.herokuapp.com/services",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify({
//             query: `{
//             services{
//                 id
//                 title
//                 description
//                 category{
//                     type
//                     process
//                 }
//             }
//           }`,
//           }),
//         }
//       );

//       // store the JSON response when promise resolves
//       const response = await data.json();

//       //handle CMS errors
//       if (response.errors) {
//         let errors = response.errors;
//         errors.map((error) => {
//           console.log(error.message);
//         });
//         throw new Error("Houston... We have a CMS problem");
//       }

//       // update blogpost array with the data from the JSON response
//       allServices = allServices.concat(response.data.services);

//       // prepare for next query
//       recordsToSkip += recordsPerQuery;

//       // stop querying if we are getting back less than the records we fetch per query
//       if (response.data.services.length < recordsPerQuery) {
//         makeNewQuery = false;
//       }
//     } catch (error) {
//       throw new Error(error);
//     }
//   }

//   // format services objects
//   const allServicesFormatted = allServices.map((item) => {
//     return {
//       id: item.id,
//       title: item.title,
//       description: item.description,
//       category: {
//         type: item.category.type,
//         process: item.category.process,
//       },
//     };
//   });

//   // return formatted services
//   console.log(allServicesFormatted);
//   return allServicesFormatted;
// }

// // export for 11ty
// module.exports = getAllServices();
