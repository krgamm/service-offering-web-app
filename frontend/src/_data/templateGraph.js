// // required packages
// const fetch = require("node-fetch");

// // get templates
// async function getAllTemplates() {
//   // max number of records to fetch per query
//   const recordsPerQuery = 100;

//   // number of records to skip (start at 0)
//   let recordsToSkip = 0;

//   // do we make a query ?
//   let makeNewQuery = true;

//   // Services array
//   let allTemplates = [];

//   // make queries until makeNewQuery is set to false
//   while (makeNewQuery) {
//     try {
//       // initiate fetch
//       const data = await fetch("http://localhost:1337/graphql", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           query: `{
//             template{
//               title
//             templates{
//               title
//               description
//               category{
//                 type
//                 process
//              }
//             }
//             }
//           }`,
//         }),
//       });

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
//       allTemplates = allTemplates.concat(response.data.templates);

//       // prepare for next query
//       recordsToSkip += recordsPerQuery;

//       // stop querying if we are getting back less than the records we fetch per query
//       if (response.data.templates.length < recordsPerQuery) {
//         makeNewQuery = false;
//       }
//     } catch (error) {
//       throw new Error(error);
//     }
//   }

//   // format templates objects
//   const allTemplatesFormatted = allTemplates.map((item) => {
//     return {
//       title: item.title,
//       services: {
//         description: item.services.services.description,
//         category: {
//           type: item.services.category.type,
//           process: item.services.category.process,
//         },
//       },
//     };
//   });

//   // return formatted templates
//   console.log(allTemplatesFormatted);
//   return allTemplatesFormatted;
// }

// // export for 11ty
// module.exports = getAllTemplates();
